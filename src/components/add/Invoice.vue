/* 
seller makes the invoice 
user dont even have the option
add good or service after saved takes back to invoice(remember route)
 */
 <template>
  <q-layout view="hHh LpR lFf">
    <q-page-container>
      <s-header></s-header>

      <q-page padding class="docs-table">
        <div class="q-gutter-y-md column">
          <q-table
            title="Invoice"
            class="invoice-table"
            :data="multiple"
            :columns="columns"
            row-key="name"
            no-data-label="Select product from below"
            separator="vertical"
          >
            <template slot="top-left" slot-scope="props">
              <p class="q-caption">* Click on cells to edit</p>
            </template>
            <q-tr slot="body" slot-scope="props" :props="props">
              <!-- <q-tr slot="body" slot-scope="props" :props="props" @click.native="$router.push({ path: '/invoice', query: { tripId: props.row._id } })" class="cursor-pointer" > -->
              <q-td key="desc" :props="props">
                {{ props.row.value.product }}
                <q-popup-edit v-model="props.row.product" title="Update product" buttons>
                  <q-input type="text" v-model="props.row.value.product" />
                </q-popup-edit>
              </q-td>

              <q-td key="rate" :props="props">
                {{ props.row.value.rate }}
                <!-- <q-chip small square color="amber">{{ props.row.unpaid }}</q-chip> -->
              </q-td>
              <q-td key="quantity" :props="props">{{ props.row.value.quantity }}</q-td>
              <q-td key="total" :props="props">{{ props.row.value.total }}</q-td>
              <q-td key="expiry_left" :props="props">{{ props.row.value.expiry_left }}</q-td>
            </q-tr>
          </q-table>
          <q-form class="q-gutter-md">
            <q-select
               ref="select"
              v-model="multiple"
              multiple
              input-debounce="0"
              use-chips
              filled
              color="tertiary"
              :options="filterOptions"
              label="Choose goods/services"
              use-input
              @filter="filterFn"
              @input="onValueChange"
               @new-value="createValue"
            />
            <q-btn to="/add_goods" label="Save" color="secondary" type="submit" />
          </q-form>
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
import { mapState, mapGetters } from "vuex";
const stringOptions = [
        {
          label: "Google",
          value: {
            product: "Google",
            rate: 30,
            quantity: 5,
            expiry_left: 150
          }
        },
        {
          label: "Facebook",
          value: {
            product: "Facebook",
            rate: 30,
            quantity: 5,
            expiry_left: 150
          }
        },
        {
          label: "Twitter",
          value: {
            product: "Twitter",
            rate: 30,
            quantity: 5,
            expiry_left: 150
          }
        },
        {
          label: "Apple Inc.",
          value: {
            product: "Apple Inc.",
            rate: 30,
            quantity: 5,
            expiry_left: 150
          }
        },
        {
          label: "Linux Inc.",
          value: {
            product: "Linux Inc.",
            rate: 30,
            quantity: 5,
            expiry_left: 150
          }
        },
        {
          label: "Dell Inc.",
          value: {
            product: "Dell Inc.",
            rate: 30,
            quantity: 5,
            expiry_left: 150
          }
        },
        {
          label: "Oracle",
          value: {
            product: "Oracle",
            rate: 30,
            quantity: 5,
            expiry_left: 150
          }
        }
      ];
export default {
  components: {
    SHeader,
    SFooter
  },
  data() {
    return {
      lazy: [],
      multiple: [],//model that takes selected values
      filterOptions: stringOptions,//value to add on select
      columns: [
        {
          name: "desc", //dont rename name
          required: false,
          label: "Goods/Services",
          align: "left",
          field: "product",
          sortable: false
        },

        { name: "rate", label: "Rate(Rs)", field: "rate", sortable: false }, //dont rename name
        {
          name: "quantity",
          label: "Quantity",
          field: "expiry_left",
          sortable: false
        }, //dont rename name
        {
          name: "total",
          label: "Total",
          field: "total",
          sortable: false
        }, //dont rename name
        {
          name: "expiry_left",
          label: "Expiry Left",
          field: "expiry_left",
          sortable: false
        }
      ],
      filter: ""
    };
  },
  computed: {
    // ...mapGetters("layoutDemo", ["view"])
  },
  methods: {
     onValueChange(){
     this.$refs['select'].__resetInputValue()
    },
    createValue (val, done) {
      console.log(val);
          if (val.length > 0) {
        if (!this.filterOptions.includes(val)) {
          this.filterOptions.push(val)
        }
        done(val, 'toggle')
      }
    },
    filterFn(val, update) {
      update(() => {
        if (val === "") {
          this.filterOptions = stringOptions;
        } else {
          const needle = val.toLowerCase();
         

          this.filterOptions = stringOptions.filter(
            v => v.label.toLowerCase().indexOf(needle) > -1
          );
        }
      });
    }
  }
};
</script>

<style lang="stylus" scoped></style>


