<template>
  <div>
    <q-page padding class="row justify-center">
      <div style="width: 500px; max-width: 90vw;">
        <q-infinite-scroll @load="onLoad" :offset="200">
          <q-list
            v-for="item in paid_bys"
            :key="item.id"
            bordered
            separator
            highlight
          >
            <q-item>
              <q-item-section label="123" label-lines="1">
                <q-item-section sublabel lines="2">
                  <span>{{ item.receiver_member_displayName }}</span>
                </q-item-section>
              </q-item-section>
              <q-item-section>
                {{ item.paid_amount }}
              </q-item-section>
              <q-item-section avatar>
                <q-item-section side sublabel lines="2">
                  <span>Paid by:</span>
                  {{ item.paid_by_displayName }}
                </q-item-section>
              </q-item-section>
            </q-item>
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
      paid_bys: [],
      furtherUpdatedAt: new Date()
    };
  },
  methods: {
    onLoad(index, done) {
      const paid = db
        .collection("bought")
        .doc(this.$route.params.id)
        .collection("paid_by")
        .orderBy("created_at", "desc")
        .startAfter(this.furtherUpdatedAt)
        .limit(5);
      paid.get().then(snapshot => {
        snapshot.forEach(doc => {
          this.paid_bys.push({
            key: doc.id,
            created_at: doc.data().created_at.toDate(),
            individual_total: doc.data().individual_total,
            paid_amount: doc.data().paid_amount,
            paid_by_displayName: doc.data().paid_by_displayName,
            receiver_member_displayName: doc.data().receiver_member_dispalyName
          });
        });

        if (snapshot.docs.length == 0) {
          // stop();
          done(true);
        } else {
          this.furtherUpdatedAt = snapshot.docs[snapshot.docs.length - 1]
            .data()
            .created_at.toDate();

          done();
        }
      });
    }
  }
};
</script>
