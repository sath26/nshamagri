/* 
Product name
Category
brand
Stock change (depending on the stock finishes the list goes away)
    Stock left
    Expiration left
    Price
    purchased from
    date of purchase
features
usecases
 */
 <template>
  <q-layout view="hHh LpR lFf ">
    <q-page-container>
      <s-header></s-header>

      <q-page padding class="docs-table">
        <q-btn label="Wai Wai" color="secondary" push flat class="col-6"/>
        <q-btn flat>Refill Stock</q-btn>
        <q-btn flat to="/bought">Payment</q-btn>
        <q-table :data="tableData" :columns="columns" row-key="name">
          <template slot="top-right" slot-scope="props">
            <q-search hide-underline v-model="filter" color="secondary"/>
          </template>
          <template slot="top-left" slot-scope="props">
            <q-btn flat>Raj Kumar Bogati Kirana Pasal</q-btn>
          </template>
          <q-tr
            slot="body"
            slot-scope="props"
            :props="props"
            @click.native="$router.push({ path: '/invoice_good', query: {  } })"
            class="cursor-pointer"
          >
            <!-- <q-tr slot="body" slot-scope="props" :props="props" @click.native="$router.push({ path: '/invoice', query: { tripId: props.row._id } })" class="cursor-pointer" > -->
            <q-td key="desc" :props="props">{{ props.row.price }}</q-td>

            <q-td key="stock" :props="props">
              {{ props.row.stock }}
              <!-- <q-chip small square color="amber">{{ props.row.unpaid }}</q-chip> -->
            </q-td>
            <q-td key="expiration" :props="props">{{ props.row.expiry_left }}</q-td>
            <q-td key="timeline" :props="props">{{ props.row.timeline }}</q-td>
            <q-td key="action" :props="props">{{ props.row.action }}</q-td>
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
import tableData from "../../assets/goods-data";
// import { mapState, mapGetters } from "vuex";
export default {
  components: {
    SHeader,
    SFooter
  },
  data() {
    return {
      lorem:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, nemo minus dolore facere saepe molestias, fugiat officia aspernatur expedita pariatur, accusantium hic exercitationem perspiciatis voluptate possimus nobis temporibus ipsa officiis!",
      tableData,
      columns: [
        {
          name: "desc", //dont rename name
          required: false,
          label: "Price(Rs)",
          align: "left",
          field: "price",
          sortable: false
        },

        { name: "stock", label: "Stock", field: "stock", sortable: false }, //dont rename name
        {
          name: "expiration",
          label: "Expiration",
          field: "expiry_left",
          sortable: false
        }, //dont rename name
        {
          name: "timeline",
          label: "Timeline",
          field: "timeline",
          sortable: false
        }, //dont rename name
        {
          name: "action",
          label: "Action",
          field: "action",
          sortable: false,
          sort: (a, b) => parseInt(a, 10) - parseInt(b, 10)
        }
      ],

      filter: "",

      selected: [
        // initial selection
        //{ name: "Ice cream sandwich" }
      ]
    };
  },
  watch: {},
  computed: {},
  methods: {}
};
</script>

<style lang="stylus" scoped>
.table-top-nav {
  background: rgba(255, 255, 255, 0.9);
  border-radius: 5.5px 5.5px 0 0;
  display: flex;

  .btn-side {
    @media screen and (max-width: 360px) {
      display: none;
    }
  }

  .popup-menu {
    flex-grow: 1;

    @media screen and (min-width: 361px) {
      display: none;
    }
  }
}
</style>


