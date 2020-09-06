/* another ui is needed when supplier provides u good with all info and u dont
have toinsert it */
<template>
  <q-layout view="hHh LpR lFf">
    <q-page-container>
      <s-header></s-header>
      <q-page padding class="row justify-center">
        <div style="width: 500px; max-width: 90vw;">
          <q-form
            @submit.prevent.stop="onSubmit()"
            @reset="onReset"
            class="q-gutter-md"
          >
            <q-input
              filled
              v-model="name"
              label="Goods/Services Name"
              color="secondary"
              :rules="[
                val => $v.name.required || 'Name is required',
                val => val.length <= 70 || 'Please use maximum 70 characters'
              ]"
            />
            <q-input
              filled
              v-model.number="price"
              type="number"
              label="Price"
              color="secondary"
              :rules="[
                val =>
                  val <= 1000001 || 'PLease use maximum of 10,00,000 price',
                val => !!val || 'Price is required'
              ]"
            />
            <q-select
              ref="unit_list"
              filled
              v-model="unit_list"
              :options="unit_quotation"
              label="Unit"
              @change="$v.unit_list.$touch()"
              @blur="$v.unit_list.$touch()"
              :rules="[val => $v.unit_list.required || 'Unit is required']"
            >
              <!-- bottom-slots
              :error="unit_list_error_message"
            <template v-slot:error>

            </template> -->
            </q-select>
            <div class="q-gutter-sm">
              <q-radio v-model="business" val="good" label="Good" />
              <q-radio v-model="business" val="service" label="Service" />
            </div>
            <!-- <q-select filter v-model="select" :options="options"/> -->
            <q-select
              ref="select"
              v-model="multiple"
              multiple
              input-debounce="0"
              use-chips
              filled
              color="tertiary"
              :options="category_quotation"
              label="add/change category"
              use-input
              @filter="filterFn"
              @input="onValueChange"
              @new-value="createValue"
            />

            <div>
              <!-- <q-btn label="Submit" type="submit" color="primary"/> -->
              <q-btn label="save" color="secondary" type="submit" />
              <!-- <q-btn label="Reset" type="reset" color="secondary" flat class="q-ml-sm" /> -->
              <q-btn
                label="Go Back"
                to="/quotation"
                type="reset"
                color="secondary"
                flat
                class="q-ml-sm"
              />
            </div>
          </q-form>
        </div>
      </q-page>
    </q-page-container>

    <s-footer></s-footer>
  </q-layout>
</template>
<script>
import SHeader from "../../layouts/Header";
import SFooter from "../../layouts/Footer";
import uniqid from "uniqid";
import { required } from "vuelidate/lib/validators";

import { mapState, mapGetters, mapActions } from "vuex";
//for category
const stringOptions = [
  {
    label: "course completion",
    value: "course completion"
  },
  {
    label: "crash course",
    value: "crash course"
  },
  {
    label: "monthly course",
    value: "monthly course"
  },
  {
    label: "teacher",
    value: "teacher"
  },
  {
    label: "tutor",
    value: "tutor"
  }
];
export default {
  components: {
    SHeader,
    SFooter
  },
  data() {
    return {
      search: "",
      business: "good",
      multiple: [], //model that takes selected values
      filterOptions: [], //value to add on select
      name: "",
      price: 0,
      unit_list: "",
      inptag: "",
      tags: [
        { id: 1, tag: "saugat" },
        { id: 2, tag: "narmala" }
      ],
      select: "",

      options: []
    };
  },
  created() {
    // this.$store.dispatch('fetchCategory', db.collection('category'))

    this.fetchCategory(); // this is a variable in category but function in reddit-clone
    this.fetchUnit();

    //db.collection('category')
  },
  computed: {
    ...mapState("quotation", [
      "category_quotation",
      "loading_category",
      "unit_quotation"
    ])
  },
  methods: {
    ...mapActions("quotation", [
      "fetchCategory",
      "fetchUnit",
      "createQuotation"
    ]),
    unit_selection_rule(val) {
      if (val === null) {
        return "You must make a selection!";
      }
    },
    onSubmit() {
      this.$refs.unit_list.validate();
      if (this.$refs.unit_list.hasError) {
        this.formHasError = true;
      } else {
        this.createQuotation({
          id: uniqid(),
          label: this.name,
          value: {
            title: this.name,
            rate: this.price,
            enterprise_type: this.business,
            unit: this.unit_list,
            category: this.multiple
          }
        });
      }
      console.log(this.price + 1);
    },
    onValueChange() {
      this.$refs["select"].__resetInputValue();
    },
    createValue(val, done) {
      console.log(val);
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
          this.filterOptions = stringOptions;
        } else {
          const needle = val.toLowerCase();

          this.filterOptions = stringOptions.filter(
            v => v.label.toLowerCase().indexOf(needle) > -1
          );
        }
      });
    },
    onReset() {
      this.goods = null;
      this.price = null;
      // this.accept = false
    },
    addTag() {
      this.tags.push(this.inptag);
      this.inptag = "";
    }
  },
  validations: {
    name: {
      required
    },
    unit_list: {
      required
    }
  }
};
</script>

<style lang="stylus" scoped></style>
