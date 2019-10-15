/* 
another ui is needed when supplier provides u good with all info and u dont have toinsert it 
 */
<template>
  <q-layout view="hHh LpR lFf">
    <q-page-container>
      <s-header></s-header>
      <q-page padding class="row justify-center">
        <div style="width: 500px; max-width: 90vw;">
          <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
            <q-input filled v-model="name" label="Goods/Services Name" color="secondary" />
            <q-input filled v-model="price" type="number" label="Price" color="secondary" />
             <q-select filled v-model="unit" :options="options" label="Unit" />
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
              :options="filterOptions"
              label="add/change category"
              use-input
              @filter="filterFn"
              @input="onValueChange"
               @new-value="createValue"
            />
            
            <div>
              <!-- <q-btn label="Submit" type="submit" color="primary"/> -->
              <q-btn to="/add_goods" label="save" color="secondary" type="submit" />
              <q-btn label="Reset" type="reset" color="secondary" flat class="q-ml-sm" />
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

import { mapState, mapGetters } from "vuex";
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
      filterOptions: stringOptions,//value to add on select
      name: "",
      price: "",
      unit: "",
      inptag: "",
      tags: [{ id: 1, tag: "saugat" }, { id: 2, tag: "narmala" }],
      select: "",
      options: [
        //for units
        {
          label: "kilo",
          value: "kilo"
        },
        {
          label: "litre",
          value: "litre"
        },
        {
          label: "cartoon",
          value: "cartoon"
        },
        {
          label: "packet",
          value: "packet"
        },
        {
          label: "pieces",
          value: "pieces"
        },
        {
          label: "monthly",
          value: "monthly"
        }
      ]
    };
  },
  methods: {
    onSubmit() {
      if (this.accept !== true) {
        this.$q.notify({
          color: "red-5",
          textColor: "white",
          icon: "fas fa-exclamation-triangle",
          message: "You need to accept the license and terms first"
        });
      } else {
        this.$q.notify({
          color: "green-4",
          textColor: "white",
          icon: "fas fa-check-circle",
          message: "Submitted"
        });
      }
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


