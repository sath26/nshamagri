/* seller makes the invoice user dont even have the option add good or service
after saved takes back to invoice(remember route) */ /* validation process -
select tag(required at least one) - find member(required) - validate quantity
title and rate */
<template>
  <q-layout view="hHh LpR lFf">
    <q-page-container>
      <s-header></s-header>

      <q-page padding class="docs-table">
        <div class="q-gutter-y-md column">
          <!--    debounce="1000"
          lazy-rules
            clearable
           -->
          <!-- <q-input
            filled
            :loading="loadingState"
            color="tertiary"
            label="Buyer's Email"
            v-model="buyer_email"
            debounce="1000"
            lazy-rules
            :rules="[myRules]"
          ></q-input> 
          @input="$v.email.$touch()" :rules="[ val => $v.email.required ||
          'Email is required', val => $v.email.email || 'Invalid email format',
          ]"-->
          <q-input
            filled
            v-model.trim="email"
            label="Your Email..."
            @input="$v.email.$touch()"
            debounce="1000"
            :rules="[
              val => $v.email.required || 'Email is required',
              val => $v.email.email || 'Invalid email format'
            ]"
          ></q-input>
          <q-table
            title="Invoice"
            class="invoice-table"
            :data="multiple"
            :columns="columns"
            row-key="name"
            no-data-label="Select product from below"
            no-results-label="The filter didn't uncover any results"
            separator="vertical"
          >
            <template slot="top-left" slot-scope="props">
              <p class="q-caption">* Click on cells to edit</p>
            </template>
            <template slot="top-right" slot-scope="props">
              <p class="q-caption">
                {{ total_invoice }}, {{ newTotalInvoice }}
              </p>
            </template>
            <q-tr slot="body" slot-scope="props" :props="props">
              <!-- <q-tr slot="body" slot-scope="props" :props="props" @click.native="$router.push({ path: '/invoice', query: { tripId: props.row._id } })" class="cursor-pointer" > -->
              <q-td key="desc" :props="props">
                {{ props.row.value.title }}
                <q-popup-edit
                  v-model="props.row.title"
                  title="Update product"
                  buttons
                >
                  <q-input type="text" v-model="props.row.value.title" />
                </q-popup-edit>
              </q-td>

              <q-td key="rate" :props="props">
                {{ props.row.value.rate }}
                <q-popup-edit v-model="rate" title="Update Price" buttons>
                  <q-input type="number" v-model="props.row.value.rate" />
                </q-popup-edit>
                <!-- <q-chip small square color="amber">{{ props.row.unpaid }}</q-chip> -->
              </q-td>
              <q-td key="quantity" :props="props">
                {{ props.row.value.quantity }}
                <q-popup-edit
                  v-model.number="props.row.value.quantity"
                  title="Update Quantity"
                  buttons
                >
                  <q-input
                    type="number"
                    v-model.number="props.row.value.quantity"
                  />
                </q-popup-edit>
              </q-td>
              <q-td key="total" :props="props">{{
                props.row.value.quantity * props.row.value.rate
              }}</q-td>
              <!-- <q-td key="expiry_left" :props="props">{{ props.row.value.expiry_left }}</q-td> -->
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
              :options="quotation"
              label="Choose goods/services"
              use-input
              @filter="filterFn"
              @input="onValueChange"
              @new-value="createValue"
            />
            <q-btn
              label="Save"
              @click="saveInvoice"
              color="secondary"
              type="submit"
            />
          </q-form>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>
<script>
//consists of buyers and sellers
import SHeader from "../../layouts/Header";
import SFooter from "../../layouts/Footer";
import { mapState, mapGetters, mapActions } from "vuex";
import { required, email } from "vuelidate/lib/validators";
import { db } from "../../store/service/firebase";
// const stringOptions = [
//   {
//     label: "Google",
//     value: {
//       product: "Google",
//       rate: 30,
//       quantity: 5,
//       expiry_left: 150
//     }
//   },
//   {
//     label: "Facebook",
//     value: {
//       product: "Facebook",
//       rate: 30,
//       quantity: 5,
//       expiry_left: 150
//     }
//   },
//   {
//     label: "Twitter",
//     value: {
//       product: "Twitter",
//       rate: 30,
//       quantity: 5,
//       expiry_left: 150
//     }
//   },
//   {
//     label: "Apple Inc.",
//     value: {
//       product: "Apple Inc.",
//       rate: 30,
//       quantity: 5,
//       expiry_left: 150
//     }
//   },
//   {
//     label: "Linux Inc.",
//     value: {
//       product: "Linux Inc.",
//       rate: 30,
//       quantity: 5,
//       expiry_left: 150
//     }
//   },
//   {
//     label: "Dell Inc.",
//     value: {
//       product: "Dell Inc.",
//       rate: 30,
//       quantity: 5,
//       expiry_left: 150
//     }
//   },
//   {
//     label: "Oracle",
//     value: {
//       product: "Oracle",
//       rate: 30,
//       quantity: 5,
//       expiry_left: 150
//     }
//   }
// ];
export default {
  components: {
    SHeader,
    SFooter
  },
  data() {
    return {
      rate: 0,
      quantity: 0,
      total_invoice: 0,
      loadingState: false,
      sum: 0,
      email: "",
      lazy: [],
      multiple: [], //model that takes selected values
      multipleObject: {},
      // data: multiple,
      filterOptions: [], //value to add on select
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
          field: "quantity",
          sortable: false
        }, //dont rename name
        {
          name: "total",
          label: "Total",
          field: "total",
          sortable: false
        } //dont rename name
        /*   {
          name: "expiry_left",
          label: "Expiry Left",
          field: "expiry_left",
          sortable: false
        }  */
      ],
      filter: ""
    };
  },
  created() {
    this.fetchQuotation();
  },
  computed: {
    ...mapState("quotation", ["quotation", "loading_quotation"]),

    newTotalInvoice() {
      let total = 0;
      this.multiple.forEach(x => {
        total = total + x.value.rate * x.value.quantity;
      });
      return total; // return is important in computed()
    }
    // ...mapGetters("layoutDemo", ["view"])
  },
  watch: {
    multiple() {
      // this.multiple.forEach(myFunction);

      this.sum = this.multiple.map(arrayItem => {
        var x = 0;
        return (x += arrayItem.value.rate * arrayItem.value.quantity);
      });
      this.total_invoice = this.sum.reduce((total, value, index, array) => {
        return (total += value);
      });
      var biggerMultiple = [];
      var mapped = this.multiple.map(item => ({ title: item.value.title }));
      // var multipleObject = Object.assign({}, ...mapped);
      // var multipleObject = Object.assign(multipleObject, ...mapped);
      biggerMultiple.push(mapped);
      console.log(biggerMultiple[0]);
    }
  },
  methods: {
    ...mapActions("quotation", ["fetchQuotation"]),
    /* myRules(val) {
      return new Promise((resolve, reject) => {
        console.log(val.includes("@gmail.com"));
        console.log(val);

        if (!val.includes("@gmail.com")) {
          resolve(!!val || "Field must contain @gmail.com");
        } else {
          this.loadingState = true;
          db.collection("enterprise")
            .where("email", "==", val)
            .get()
            .then(data => {
              this.loadingState = false;
              if (data.docs.length !== 0) {
                console.log(val);
                resolve(!!val || "This user doesnt exist");
              }
            })
            .catch(data => console.log(data));
        }
      });
    }, */
    onValueChange() {
      // console.log(multiple);
      this.$refs["select"].__resetInputValue();
    },
    createValue(val, done) {
      // console.log(val);
      if (val.length > 0) {
        if (!this.filterOptions.includes(val)) {
          this.filterOptions.push(val);
        }
        done(val, "toggle");
      }
    },

    filterFn(val, update) {
      update(() => {
        if (val === "") {
          this.filterOptions = this.quotation;
          // console.log(this.filterOptions);
        } else {
          const needle = val.toLowerCase();

          this.filterOptions = this.quotation.filter(
            v => v.label.toLowerCase().indexOf(needle) > -1
          );
        }
      });
    },
    saveInvoice() {
      console.log(this.multiple);
    }
  },
  validations: {
    email: {
      required,
      email
    }
    /* password: {
      required,
    }, */
  }
};
</script>

<style lang="stylus" scoped></style>
