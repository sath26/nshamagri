<template>
  <q-layout view="hHh LpR lFf">
    <!-- this view put header and footer fixed but tab is not fixed yet-->
    <q-page-container>
      <s-header></s-header>
      <q-toolbar inverted color="secondary">
        <q-toolbar-title>
          <q-btn flat>{{ bought.enterprise_name }}</q-btn>
        </q-toolbar-title>
        <div class="q-pa-sm q-gutter-sm">
          <q-btn flat color="red"
            >{{ bought.unpaid }}
            <q-tooltip
              anchor="bottom middle"
              self="top middle"
              :offset="[10, 10]"
            >
              <strong>Unpaid</strong>
            </q-tooltip>
          </q-btn>
          <q-btn flat color="black"
            >{{ bought.paid }}
            <q-tooltip
              anchor="bottom middle"
              self="top middle"
              :offset="[10, 10]"
            >
              <strong>paid</strong>
            </q-tooltip>
          </q-btn>
          <q-btn flat color="black"
            >{{ bought.total }}
            <q-tooltip
              anchor="bottom middle"
              self="top middle"
              :offset="[10, 10]"
            >
              <strong>Total</strong>
            </q-tooltip>
          </q-btn>
        </div>
      </q-toolbar>
    </q-page-container>
    <q-separator />
    <q-tabs
      v-model="tab"
      animated
      swipeable
      inverted
      active-color="secondary"
      indicator-color="secondary"
      align="justify"
    >
      <q-route-tab
        name="invoice"
        label="invoice"
        :to="{ name: 'invoice', params: { id: $route.params.id } }"
      />
      <!-- <q-tab default name="buyers" slot="title" icon="mail" label="BUyers" /> -->
      <q-route-tab
        name="paid_date"
        label="paid date"
        :to="{ name: 'paid_by', params: { id: $route.params.id } }"
      />
      <!-- each item leads to its particular statement bought and sold statement  -->
      <!-- dark orange to those whose payment is due or unreceived  -->
    </q-tabs>

    <q-page-container> <router-view :key="$route.params.id"/></q-page-container>

    <s-footer></s-footer>
  </q-layout>
</template>
<script>
//consists of buyers and sellers
import { db } from "../../store/service/firebase";
import SHeader from "../../layouts/Header";
import SFooter from "../../layouts/Footer";
// import SInvoice from "../components/bought/Invoice.vue";
import { mapState, mapGetters } from "vuex";
export default {
  components: {
    SHeader,
    SFooter
  },
  data() {
    return {
      tab: "invoice",
      bought: {},
      furtherUpdatedAt: new Date(),
      paid_bys: []
    };
  },
  created() {
    const ref = db.collection("bought").doc(this.$route.params.id);
    ref.get().then(doc => {
      if (doc.exists) {
        this.bought = doc.data();
      } else {
        alert("No such document!");
      }
    });
  },
  methods: {},
  computed: {}
};
</script>

<style lang="stylus" scoped></style>
