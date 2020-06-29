<template>
  <q-layout view="hHh LpR lFf">
    <!-- this view put header and footer fixed but tab is not fixed yet-->
    <q-page-container>
      <s-header></s-header>

      <q-page padding class="row justify-center">
        <div style="width: 500px; max-width: 90vw;">
          <q-toolbar class="bg-secondary text-white shadow-2">
            <q-toolbar-title class="q-pa-sm text-uppercase"
              >bought</q-toolbar-title
            >
          </q-toolbar>
          <q-list bordered highlight class="list-container">
            <q-infinite-scroll @load="onLoad" :offset="50">
              <q-item
                v-for="bought in boughts"
                :key="bought.id"
                clickable
                to="/bought"
              >
                <q-item-section avatar>
                  <q-avatar>
                    <img src="statics/boy-avatar.png" />
                  </q-avatar>
                </q-item-section>
                <q-item-section label-lines="1">{{
                  bought.updated_at.toDate()
                }}</q-item-section>
                <!-- <q-item-section right stamp="(1)"></q-item-section>  -->
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
    ...mapState("bought", ["boughts", "furtherBoughtLoad"])
  },
  data() {
    return {
      items: [{}, {}, {}, {}, {}, {}, {}],
      vue_boughts: []
    };
  },
  created() {
    this.firstLoad();
  },
  methods: {
    ...mapActions("bought", ["firstLoad", "furtherLoad"]),
    ...mapMutations("bought", ["setBoughts", "setAnchorDoc"]),
    onLoad(index, done) {
      /*  setTimeout(() => {$
        if (this.items) {
          this.items.push({}, {}, {}, {}, {}, {}, {});
          done();
        }
      }, 2000); */
      console.log(index);

      this.furtherLoad();

      done();
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
