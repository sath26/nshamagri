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
          <q-input
            ref="buyer_email"
            filled
            color="secondary"
            v-model.trim="email"
            label="Buyer's Email..."
            @input="$v.email.$touch()"
            debounce="1000"
            :rules="[
              val => $v.email.required || 'Email is required',
              val => $v.email.email || 'Invalid email format',
              val => {
                $v.email.isUnique;
              }
            ]"
            bottom-slots
            :error="emailExist"
          >
            <template v-slot:error>
              Buyer has not registered yet!
            </template>
          </q-input>
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
              <p class="q-caption">
                * Click on rate's or quantity's cells to edit
              </p>
            </template>
            <template slot="top-right" slot-scope="props">
              <p class="q-caption">
                <b>{{ newTotalInvoice }}</b>
              </p>
            </template>
            <q-tr slot="body" slot-scope="props" :props="props">
              <!-- <q-tr slot="body" slot-scope="props" :props="props" @click.native="$router.push({ path: '/invoice', query: { tripId: props.row._id } })" class="cursor-pointer" > -->
              <q-td key="desc" :props="props">
                {{ props.row.value.title }}
                <!-- <q-popup-edit
                  v-model="props.row.title"
                  title="Update product"
                  buttons
                >
                  <q-input type="text" v-model="props.row.value.title" />
                </q-popup-edit> -->
              </q-td>

              <q-td key="rate" :props="props">
                {{ props.row.value.rate }}
                <q-popup-edit
                  v-model.number="props.row.value.rate"
                  title="Update Price"
                  buttons
                  :validate="rateRangeValidation"
                  @hide="rateRangeValidation"
                >
                  <q-input
                    type="number"
                    v-model.number="props.row.value.rate"
                    :error="errorrate"
                    :error-message="errorMessagerate"
                  />
                </q-popup-edit>
                <!-- <q-chip small square color="amber">{{ props.row.unpaid }}</q-chip> -->
              </q-td>
              <q-td key="quantity" :props="props">
                {{ props.row.value.quantity }}
                <q-popup-edit
                  v-model.number="props.row.value.quantity"
                  title="Update Quantity"
                  buttons
                  :validate="quantityRangeValidation"
                  @hide="quantityRangeValidation"
                >
                  <q-input
                    type="number"
                    v-model.number="props.row.value.quantity"
                    :error="errorquantity"
                    :error-message="errorMessagequantity"
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
              color="secondary"
              ref="select"
              v-model="multiple"
              multiple
              input-debounce="0"
              use-chips
              filled
              :options="filterOptions"
              label="Search and Choose goods/services"
              use-input
              @filter="filterFn"
              @input="onValueChange"
            >
              <template v-slot:no-option>
                <q-item>
                  <q-item-section class="text-grey">
                    No results! Go to Quotation to add.
                  </q-item-section>
                </q-item>
              </template>
            </q-select>
            <!-- @new-value="createValue" -->
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
import firebase from "firebase";

export default {
  components: {
    SHeader,
    SFooter
  },
  data() {
    return {
      sold_id: "",
      invoice_id: "",
      buyer_enterprise_id: "",
      this_enterprise_buyer_bought_list_id: "",
      rate: 0,
      quantity: 0,
      total_invoice: 0,
      loadingState: false,
      sum: 0,
      email: "",
      emailExist: false,
      buyer_exist: false,
      lazy: [],
      multiple: [], //model that takes selected values
      multipleObject: {},
      // data: multiple,
      filterOptions: [], //value to add on select
      errorquantity: false,
      errorMessagequantity: "",
      errorrate: false,
      errorMessagerate: "",
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
    ...mapState("profile", ["current_enterprise"]),

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
    rateRangeValidation(val) {
      if (val > 0 || val < 1000001) {
        this.errorrate = true;
        this.errorMessagerate = "The value must be between 0 and 10,00,000!";
        return false;
      }
      this.errorrate = false;
      this.errorMessagerate = "";
      return true;
    },
    quantityRangeValidation(val) {
      if (val > 0 || val < 10001) {
        this.errorquantity = true;
        this.errorMessagequantity = "The value must be between 0 and 10,000!";
        return false;
      }
      this.errorquantity = false;
      this.errorMessagequantity = "";
      return true;
    },
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
      /*  const messageRef = db
        .collection("rooms")
        .add({ hey: "there" })
        .then(ref => {
          console.log("messageRef " + ref);
          db.collection("rooms")
            .doc(ref.id)
            .collection("message")
            .add({ ok: "plz work" })
            .then(ref2 => {
              db.collection("rooms")
                .doc(ref.id)
                .collection("message")
                .doc(ref2.id)
                .collection("toilet")
                .add({ ok: "plz work" });
              console.log("success");
            });
        }); */

      this.$refs.buyer_email.validate();
      if (this.multiple.length === 0) {
        this.$q.notify({
          message: "Choose at least one goods or services",
          position: "top-right",
          timeout: 2500,
          color: "negative",
          textColor: "white"
        });
      } else if (this.$refs.buyer_email.hasError) {
        this.$q.notify({
          message: "Enter buyer's email",
          position: "top-right",
          timeout: 2500,
          color: "negative",
          textColor: "white"
        });
      } else if (this.buyer_exist === true) {
        const res = db
          .collection("bought")
          .doc(this.this_enterprise_buyer_bought_list_id)
          .collection("invoice")
          .add({
            individual_total: this.newTotalInvoice,
            created_at: firebase.firestore.Timestamp.now()
          })
          .then(ref => {
            console.log("bought-->invoice_id " + ref.id);
            db.collection("bought")
              .doc(this.this_enterprise_buyer_bought_list_id)
              .collection("invoice")
              .doc(ref.id)
              .collection("invoice_details")
              .add({
                individual_total: this.newTotalInvoice,
                created_at: firebase.firestore.Timestamp.now(),

                items: this.multiple
              });
          });
        console.log(
          "already added document with id " +
            res.id +
            " " +
            this.this_enterprise_buyer_bought_list_id
        );
        /* **************************************sold************************ */
        const sold_res = db
          .collection("sold")
          .doc(this.this_enterprise_buyer_bought_list_id)
          .collection("invoice")
          .add({
            individual_total: this.newTotalInvoice,
            created_at: firebase.firestore.Timestamp.now()
          })
          .then(ref => {
            console.log("sold-->invoice_id " + ref.id);
            this.invoice_id = ref.id;
            db.collection("sold")
              .doc(this.this_enterprise_buyer_bought_list_id)
              .collection("invoice")
              .doc(ref.id)
              .collection("invoice_details")
              .add({
                individual_total: this.newTotalInvoice,
                created_at: firebase.firestore.Timestamp.now(),

                items: this.multiple
              })
              .then(ref2 => {
                console.log("sold-->invoice_id " + ref.id);
                console.log("sold-->invoice_id-->invoice_details " + ref2.id);
                this.$router.push({
                  name: "newSoldInvoice",
                  //item.key and item.sold_id not defined yet
                  query: {
                    invoice_id: ref.id,
                    sold_id: this.this_enterprise_buyer_bought_list_id
                  }
                });
              })
              .catch(error => console.log(error));
          });
      } else {
        //* bought shows seller but
        //! "buyer_enterprise_id" must consist of current_enterprise[0].admin_enterprise_id in invoice.vue(for bought)
        const res = db
          .collection("bought")
          .add({
            buyer_email_id: this.email,
            buyer_enterprise_id: this.buyer_enterprise_id,
            //*this bought will come based on buyer_enterprise_id so this info wont come in this enterprise
            seller_enterprise_id: this.current_enterprise[0]
              .admin_enterprise_id,
            enterprise_name: this.current_enterprise[0].title,
            //*enterprise name is of seller enterprise
            updated_at: firebase.firestore.Timestamp.now(),
            seller_profile_pic: this.current_enterprise[0].photoURL
          })
          .then(ref => {
            db.collection("bought")
              .doc(ref.id)
              .collection("invoice")
              .add({
                individual_total: this.newTotalInvoice,
                created_at: firebase.firestore.Timestamp.now()
              })
              .then(ref2 => {
                db.collection("bought")
                  .doc(ref.id)
                  .collection("invoice")
                  .doc(ref2.id)
                  .collection("invoice_details")
                  .add({
                    buyer_enterprise_id: this.buyer_enterprise_id,
                    seller_enterprise_id: this.current_enterprise[0],
                    seller_enterprise_name: this.current_enterprise[0].title,
                    individual_total: this.newTotalInvoice,
                    created_at: firebase.firestore.Timestamp.now(),
                    items: this.multiple
                  });
              });
          });
        console.log("bought data inserted " + res.id);
        /* **************************************sold************************ */
        //* sold shows buyer but
        //! "buyer_enterprise_id" must consist of this.buyer_enterprise_id in invoice.vue(for sold)

        const sold_res = db
          .collection("sold")
          .add({
            buyer_email_id: this.email,
            buyer_enterprise_id: this.buyer_enterprise_id,
            seller_enterprise_id: this.current_enterprise[0]
              .admin_enterprise_id,
            //?this enterprise sold so data will come from seller_enterprise_id as condtion in sold

            enterprise_name: this.current_enterprise[0].title,
            //*enterprise name is of bought enterprise

            updated_at: firebase.firestore.Timestamp.now(),
            seller_profile_pic: this.current_enterprise[0].photoURL
          })
          .then(ref => {
            db.collection("sold")
              .doc(ref.id)
              .collection("invoice")
              .add({
                individual_total: this.newTotalInvoice,
                created_at: firebase.firestore.Timestamp.now()
              })
              .then(ref2 => {
                this.sold_id = ref.id;
                this.invoice_id = ref2.id;
                db.collection("sold")
                  .doc(ref.id)
                  .collection("invoice")
                  .doc(ref2.id)
                  .collection("invoice_details")
                  .add({
                    buyer_enterprise_id: this.buyer_enterprise_id,
                    seller_enterprise_id: this.current_enterprise[0],
                    seller_enterprise_name: this.current_enterprise[0].title,
                    individual_total: this.newTotalInvoice,
                    created_at: firebase.firestore.Timestamp.now(),
                    items: this.multiple
                  })
                  .then(ref3 => {
                    console.log("sold data inserted " + sold_res.id);
                    this.$router.push({
                      name: "newSoldInvoice",
                      //item.key and item.sold_id not defined yet
                      query: { invoice_id: ref2.id, sold_id: ref.id }
                    });
                  });
              });
          });
      }
    }
  }, //methods
  validations: {
    email: {
      required,
      email,
      isUnique(val) {
        // standalone validator ideally should not assume a field is required
        if (val === "") {
          return true;
        }
        // return !true;
        return new Promise((resolve, reject) => {
          db.collection("enterprise")
            .where("email", "==", val)
            .get()
            .then(success => {
              if (success.docs.length === 1) {
                success.forEach(doc => {
                  console.log(doc.id);

                  this.buyer_enterprise_id = doc.data().admin_enterprise_id;
                });
                //here and of both of buyer_enterprise_id and seller_enterprise_id
                //must match
                //*then else if condition of enterprise or client that already exist insert query must run
                //else new entprise or client has to be created
                console.log("buyer_enterprise_id " + this.buyer_enterprise_id);
                console.log(
                  "current_enterprise[0].admin_enterprise_id " +
                    this.current_enterprise[0].admin_enterprise_id
                );
                db.collection("sold")
                  .where("buyer_enterprise_id", "==", this.buyer_enterprise_id)
                  .where(
                    "seller_enterprise_id",
                    "==",
                    this.current_enterprise[0].admin_enterprise_id
                  )
                  .get()
                  .then(success => {
                    console.log(success.docs);
                    if (success.docs.length == 1) {
                      this.buyer_exist = true;
                      console.log(this.buyer_exist);
                      success.forEach(docs => {
                        this.this_enterprise_buyer_bought_list_id = docs.id;
                        console.log(docs.id);
                      });
                    } else {
                      console.log("new buyer");
                    }
                  })
                  .catch(error => {
                    console.log(error);
                  });
                this.emailExist = false;
                this.isUnique = true;
                resolve(true);
              } else {
                this.emailExist = true;
                this.isUnique = false;
                reject(false);
              }
            })
            .catch(error => {
              console.log("error");
              console.log(error);
              this.emailExist = true;

              this.isUnique = false;
              reject(false);
            });
        });
      }
    }
    /* password: {
      required,
    }, */
  }
};
</script>

<style lang="stylus" scoped></style>
