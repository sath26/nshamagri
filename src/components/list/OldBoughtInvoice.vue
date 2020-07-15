// consist of card that contains detail of product or service bought or sold
<template>
  <q-layout view="hHh LpR lFf">
    <!-- this view put header and footer fixed but tab is not fixed yet-->
    <q-page-container>
      <s-header></s-header>
      <q-toolbar inverted class="secondary">
        <q-toolbar-title>
          <q-btn flat>RajKumar pasal</q-btn>
        </q-toolbar-title>
        <q-btn-group outline class="desktop-transition-mid_toolbar">
          <q-btn flat>
            25 Jun, 2019
            <q-tooltip
              anchor="bottom middle"
              self="top middle"
              :offset="[10, 10]"
            >
              <strong>Date</strong>
            </q-tooltip>
          </q-btn>
          <q-btn flat color="black">
            (5000)
            <q-tooltip
              anchor="bottom middle"
              self="top middle"
              :offset="[10, 10]"
            >
              <strong>Unreceived</strong>
            </q-tooltip>
          </q-btn>
          <q-btn flat color="secondary">
            20000
            <q-tooltip
              anchor="bottom middle"
              self="top middle"
              :offset="[10, 10]"
            >
              <strong>Received</strong>
            </q-tooltip>
          </q-btn>
          <q-btn flat color="black">
            25000
            <q-tooltip
              anchor="bottom middle"
              self="top middle"
              :offset="[10, 10]"
            >
              <strong>Total</strong>
            </q-tooltip>
          </q-btn>
        </q-btn-group>
      </q-toolbar>
      <q-separator />
      <div class="mobile-transition-mid_toolbar">
        <q-btn-group outline class="q-ml-lg">
          <q-btn flat>
            25 Jun, 2019
            <q-tooltip
              anchor="bottom middle"
              self="top middle"
              :offset="[10, 10]"
            >
              <strong>Date</strong>
            </q-tooltip>
          </q-btn>
          <q-btn flat color="black">
            (5000)
            <q-tooltip
              anchor="bottom middle"
              self="top middle"
              :offset="[10, 10]"
            >
              <strong>Unreceived</strong>
            </q-tooltip>
          </q-btn>
          <q-btn flat color="secondary">
            20000
            <q-tooltip
              anchor="bottom middle"
              self="top middle"
              :offset="[10, 10]"
            >
              <strong>Received</strong>
            </q-tooltip>
          </q-btn>
          <q-btn flat color="black">
            25000
            <q-tooltip
              anchor="bottom middle"
              self="top middle"
              :offset="[10, 10]"
            >
              <strong>Total</strong>
            </q-tooltip>
          </q-btn>
        </q-btn-group>
      </div>
      <q-page padding class="docs-table">
        <!--  class="invoice-table"
          dark-->
        <q-table
          title="Invoice"
          :data="details"
          :columns="columns"
          row-key="name"
          :filter="filter"
        >
          <template slot="top-right" slot-scope="props">
            <q-input hide-underline v-model="filter" color="secondary" />
          </template>
          <template slot="top-left" slot-scope="props">
            <p class="q-caption">* Invoice(cannot be edited once made)</p>
          </template>
          <q-tr slot="body" slot-scope="props" :props="props">
            <!-- <q-tr slot="body" slot-scope="props" :props="props" @click.native="$router.push({ path: '/invoice', query: { tripId: props.row._id } })" class="cursor-pointer" > -->
            <q-td key="desc" :props="props">{{ props.row.title }}</q-td>

            <q-td key="rate" :props="props">
              {{ props.row.rate }}
              <!-- <q-chip small square color="amber">{{ props.row.unpaid }}</q-chip> -->
            </q-td>
            <q-td key="quantity" :props="props">{{ props.row.quantity }}</q-td>
            <q-td key="total" :props="props">{{ props.row.total }}</q-td>
          </q-tr>
        </q-table>
      </q-page>
    </q-page-container>

    <s-footer></s-footer>
  </q-layout>
</template>
<script>
//consists of buyers and sellers
import SHeader from "../../layouts/Header";
import SFooter from "../../layouts/Footer";

import tableData from "../../assets/invoice-data";
import { db } from "../../store/service/firebase";

import { mapState, mapGetters } from "vuex";
export default {
  components: {
    SHeader,
    SFooter
  },
  data() {
    return {
      tableData,
      details: [],
      columns: [
        {
          name: "desc", //dont rename name
          required: false,
          label: "Goods/Services",
          align: "left",
          field: "title",
          sortable: true
        },

        { name: "rate", label: "Rate(Rs)", field: "rate", sortable: false }, //dont rename name
        {
          name: "quantity",
          label: "Quantity",
          field: "quantity",
          sortable: false
        }, //dont rename name
        {
          name: "total",
          label: "Total",
          field: "total",
          sortable: false
        } //dont rename name
      ],

      filter: "",

      selected: [
        // initial selection
        //{ name: "Ice cream sandwich" }
      ]
    };
  },
  created() {
    const ref = db
      .collection("bought")
      .doc(this.$route.params.bought_id)
      .collection("invoice")
      .doc(this.$route.params.invoice_id)
      .collection("invoice_details")
      .get()
      .then(doc => {
        // console.log(doc.docs[0].data());
        this.details = doc.docs[0].data().items;
      });
  }
};
</script>

<style lang="stylus" scoped>
@import '..\..\css\app.styl';

.mid-toolbar {
  background: $navColor1;
}

.invoice-table {
  background: #485C65;
}

.mobile-transition-mid_toolbar {
  background: $navColor1;

  @media screen and (min-width: 600px) {
    display: none;
  }
}

.desktop-transition-mid_toolbar {
  @media screen and (max-width: 600px) {
    display: none;
  }
}
</style>
