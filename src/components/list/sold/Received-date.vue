<template>
  <div>
    <q-page padding class="row justify-center">
      <div style="width: 500px; max-width: 90vw;">
        <q-infinite-scroll @load="onLoad" :offset="200">
          <q-list
            v-for="item in received_bys"
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
                {{ item.received_amount }}
              </q-item-section>
              <q-item-section avatar>
                <q-item-section side sublabel lines="2">
                  <span>received by:</span>
                  {{ item.received_by_displayName }}
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
      tab: "received_by",
      received_bys: [],
      furtherUpdatedAt: new Date()
    };
  },
  methods: {
    onLoad(index, done) {
      const received = db
        .collection("sold")
        .doc(this.$route.params.id)
        .collection("received_by")
        .orderBy("created_at", "desc")
        .startAfter(this.furtherUpdatedAt)
        .limit(5);
      received.get().then(snapshot => {
        snapshot.forEach(doc => {
          this.received_bys.push({
            key: doc.id,
            created_at: doc.data().created_at.toDate(),
            individual_total: doc.data().individual_total,
            received_amount: doc.data().received_amount,
            received_by_displayName: doc.data().received_by_displayName,
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
