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
                name: 'oldSoldInvoice',
                params: { invoice_id: item.key, sold_id: item.sold_id }
              }"
            >
              <q-item-section>
                <q-item-label>{{ item.invoice_no }}</q-item-label>
                <!-- <q-item-label caption>{{ item.total }}</q-item-label> -->
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

export default {
  data() {
    return {
      tab: "sale-invoice",
      sold: {},
      furtherUpdatedAt: new Date(),
      invoices: [],
      paid_bys: []
    };
  },
  methods: {
    onLoad(index, done) {
      db.collection("sold")
        .doc(this.$route.params.id)
        .collection("invoice")

        .orderBy("created_at", "desc")
        .startAfter(this.furtherUpdatedAt)
        .limit(10)
        .get()
        .then(res => {
          res.forEach(doc => {
            this.invoices.push({
              key: doc.id,
              created_at: doc.data().created_at.toDate(),
              individual_total: doc.data().individual_total,
              invoice_no: doc.data().invoice_no,
              sold_id: this.$route.params.id
            });
          });

          if (res.docs.length == 0) {
            // stop();
            done(true);
          } else {
            this.furtherUpdatedAt = res.docs[res.docs.length - 1]
              .data()
              .created_at.toDate();

            done();
          }
        });
    }
  }
};
</script>
