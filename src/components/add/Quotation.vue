/* 
another ui is needed when supplier provides u good with all info and u dont have toinsert it 
 */
<template>
  <q-layout view="hHh LpR lFf">
    <q-page-container>
      <s-header></s-header>
      <q-page padding class="row justify-center">
        <div style="width: 500px; max-width: 90vw;">
          <q-form @submit="onSubmit()" @reset="onReset" class="q-gutter-md">
            <q-input filled v-model="name" label="Goods/Services Name" color="secondary" />
            <q-input filled v-model="price" type="number" label="Price" color="secondary" />
             <q-select filled v-model="unit_list" :options="unit_quotation" label="Unit" />
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
              <q-btn  label="save" color="secondary" type="submit" />
              <!-- <q-btn label="Reset" type="reset" color="secondary" flat class="q-ml-sm" /> -->
              <q-btn label="Go Back" to="/quotation" type="reset" color="secondary" flat class="q-ml-sm" />
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
        },
        
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
      multiple: [],//model that takes selected values
      filterOptions: [],//value to add on select
      name: "",
      price: 0,
      unit_list: [],
      inptag: "",
      tags: [{ id: 1, tag: "saugat" }, { id: 2, tag: "narmala" }],
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
  computed:{
    ...mapState("quotation", 
                    ["category_quotation",
                    "loading_category",
                    "unit_quotation"
                    ]),
  },
  methods: {
    ...mapActions("quotation", [
      "fetchCategory",
      "fetchUnit",
      "createQuotation",
      
    ]),
    onSubmit() {
       this.createQuotation({
         id: uniqid(),
          label:this.name,
          value:{
            title:this.name,
            rate:this.price,
            enterprise_type:this.business,
            unit: this.unit_list,
            category: this.multiple
          }
      });
      
    },
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
  }
};
</script>

<style lang="stylus" scoped></style>


