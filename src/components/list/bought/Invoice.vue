<template>
  <div>
    <q-page padding class="row justify-center">
      <div style="width: 500px; max-width: 90vw;">
        <q-infinite-scroll @load="onLoad" :offset="200">
          <q-list v-for="item in invoices" :key="item.id">
            <q-item
              class="caption"
              clickable
              :to="{
                name: 'oldBoughtInvoice',
                params: {
                  invoice_id: item.key,
                  bought_id: item.bought_id
                }
              }"
            >
              <q-item-section>
                <q-item-label>{{ item.invoice_no }}</q-item-label>
                <!-- <q-item-label caption>{{ item.individual_total }}</q-item-label> -->
              </q-item-section>
              <q-item-section side>
                <q-item-label>{{ item.individual_total }}</q-item-label>
              </q-item-section>
            </q-item>
            <q-separator></q-separator>
          </q-list>
          <template v-slot:loading>
            <div class="row justify-center q-my-md">
              <q-spinner-dots color="primary" size="40px" />
            </div>
          </template>
        </q-infinite-scroll>
      </div>
    </q-page>
  </div>
</template>
<script>
import { db } from "../../../store/service/firebase";
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";

export default {
  data() {
    return {
      tab: "invoice",
      bought: {},
      furtherCreatedAt: new Date(),
      invoices: [],
      paid_bys: []
    };
  },

  created() {
    this.fetchProfile(this.user);
  },
  computed: {
    ...mapState("profile", ["current_enterprise"]),
    ...mapState("auth", ["user", "pic", "isAuthenticated"])
  },
  methods: {
    ...mapActions("profile", [
      "fetchProfile",
      "updateTitle",
      "deleteCategory",
      "fetchRole",
      "checkAndFindMember",
      "createRole"
    ]),
    onLoad(index, done) {
      //buyer_enteprise_id is needed for security rule
      const invoice = db
        .collection("bought")
        .doc(this.$route.params.id)
        .collection("invoice")
        .where(
          "buyer_enterprise_id",
          "==",
          this.current_enterprise[0].admin_enterprise_id
        )
        .orderBy("created_at", "desc")
        .startAfter(this.furtherCreatedAt)
        .limit(10);
      invoice.get().then(res => {
        res.forEach(doc => {
          this.invoices.push({
            key: doc.id,
            created_at: doc.data().created_at.toDate(),
            individual_total: doc.data().individual_total,
            invoice_no: doc.data().invoice_no,
            bought_id: this.$route.params.id
          });
        });

        if (res.docs.length == 0) {
          // stop();
          done(true);
        } else {
          this.furtherCreatedAt = res.docs[res.docs.length - 1]
            .data()
            .created_at.toDate();

          done();
        }
      });
    }
  }
};
</script>
