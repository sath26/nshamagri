<template>
  <q-layout view="hHh LpR lFf">
    <!-- this view put header and footer fixed but tab is not fixed yet-->
    <q-page-container>
      <s-header></s-header>

      <q-page padding class="row justify-center">
        <div style="width: 500px; max-width: 90vw;">
          <q-toolbar class="  shadow-2">
            <q-toolbar-title class="q-pa-sm text-uppercase"
              >sold</q-toolbar-title
            >
            <q-btn dense round flat color="black">
              <q-icon name="help_outline" color="white" />
              <q-tooltip v-model="showing">Buyers</q-tooltip>
            </q-btn>
          </q-toolbar>
          <q-list bordered highlight class="list-container">
            <q-infinite-scroll @load="onLoad" :offset="250">
              <q-item
                v-for="sold in solds"
                :key="sold.key"
                clickable
                :to="{ name: 'soldOverview', params: { id: sold.key } }"
              >
                <q-item-section avatar>
                  <q-avatar>
                    <img src="statics/boy-avatar.png" />
                  </q-avatar>
                </q-item-section>

                <q-item-section label-lines="1">
                  <q-item-label overline>{{
                    sold.enterprise_name
                  }}</q-item-label>
                  <q-item-label caption>{{ sold.total }}</q-item-label>
                </q-item-section>
                <q-item-section side>
                  {{ sold.unreceived }}
                </q-item-section>
              </q-item>
              <template v-slot:loading>
                <div class="row justify-center q-my-md">
                  <q-spinner-dots color="primary" size="40px" />
                </div>
              </template>
            </q-infinite-scroll>
          </q-list>
          <!-- <q-infinite-scroll @load="onLoad" :offset="250">
            <div v-for="(item, index) in items" :key="index" class="caption">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                repellendus sit voluptate voluptas eveniet porro. Rerum
                blanditiis perferendis totam, ea at omnis vel numquam
                exercitationem aut, natus minima, porro labore.
              </p>
            </div>

            <template v-slot:loading>
              <div class="row justify-center q-my-md">
                <q-spinner-dots color="primary" size="40px" />
              </div>
            </template>
          </q-infinite-scroll> -->
        </div>
      </q-page>
    </q-page-container>

    <s-footer></s-footer>
  </q-layout>
</template>
<script>
//consists of buyers and sellers
import SHeader from "../../layouts/Header";
import SFooter from "../../layouts/Footer";
import { db } from "../../store/service/firebase";
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
export default {
  components: {
    SHeader,
    SFooter
  },
  computed: {
    // ...mapState("sold", ["solds", "furthersoldLoad"])
    ...mapState("profile", ["current_enterprise"])
  },
  data() {
    return {
      solds: [],
      showing: false,
      furtherUpdatedAt: new Date()
    };
  },
  created() {
    // this.firstLoad();
  },
  methods: {
    // ...mapActions("sold", ["firstLoad", "furtherLoad"]),
    // ...mapMutations("sold", ["setsolds", "setAnchorDoc"]),
    /*  setTimeout(() => {$
        if (this.items) {
          this.items.push({}, {}, {}, {}, {}, {}, {});
          done();
        }
      }, 2000); 
      console.log(index);

      this.furtherLoad();

      done(); */
    onLoad(index, done) {
      db.collection("sold")
        .where(
          "seller_enterprise_id",
          "==",
          this.current_enterprise[0].admin_enterprise_id
        )
        .orderBy("updated_at", "desc")
        .startAfter(this.furtherUpdatedAt)
        .limit(5)
        .get()
        .then(res => {
          console.log(res);
          res.forEach(doc => {
            this.solds.push({
              key: doc.id,
              updated_at: doc.data().updated_at.toDate(),
              enterprise_name: doc.data().enterprise_name,
              received: doc.data().received,
              total: doc.data().total,
              unreceived: doc.data().unreceived
            });
          });

          if (res.docs.length == 0) {
            // stop();
            done(true);
          } else {
            this.furtherUpdatedAt = res.docs[res.docs.length - 1]
              .data()
              .updated_at.toDate();

            done();
          }
        });
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '../../css/app.styl';

.top-tab {
  background: $tab-color;
}

.list-container {
  background: $primary-white;
}

.footer-btn {
  border-radius: 0;
  color: $navColor1;
  background: $primary-white;
}
</style>
