/* 
another ui is needed when supplier provides u good with all info and u dont have toinsert it 
 */
<template>
  <q-layout view="hHh LpR lFf">
    <q-page-container>
      <s-header></s-header>
      <q-page padding class="row justify-center">
        <div style="width: 500px; max-width: 90vw;">
          <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md"
    >
          <q-input filled v-model="goods" label="Goods/Services Name" color="secondary"/>
          <q-input filled v-model="price" label="Price" color="secondary"/>
          <q-input filled v-model="price" label="Unit" color="secondary"/>
          <q-input filled v-model="price" label="Good or Service(radio option)" color="secondary"/>
          <!-- <q-select filter v-model="select" :options="options"/> -->
          <div>
        <!-- <q-btn label="Submit" type="submit" color="primary"/> -->
          <q-btn to="/add_goods" label="Save" color="secondary" type="submit"/>
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
export default {
  components: {
    SHeader,
    SFooter
  },
  data() {
    return {
      search: "",
      goods: "",
      price: "",
      select: "",
      options: [
        {
          label: "Electronics",
          value: "Electronics"
        },
        {
          label: "Furniture",
          value: "Furniture"
        },
        {
          label: "Clothing",
          value: "Clothing"
        },
        {
          label: "Hardware",
          value: "Hardware"
        },
        {
          label: "Sports",
          value: "Sports"
        },
        {
          label: "Auto",
          value: "Auto"
        },
        {
          label: "Cosmetics",
          value: "Cosmetics"
        },
        {
          label: "Pharmacy",
          value: "Pharmacy"
        }
      ]
    };
  },
  methods: {
    onSubmit () {
      if (this.accept !== true) {
        this.$q.notify({
          color: 'red-5',
          textColor: 'white',
          icon: 'fas fa-exclamation-triangle',
          message: 'You need to accept the license and terms first'
        })
      }
      else {
        this.$q.notify({
          color: 'green-4',
          textColor: 'white',
          icon: 'fas fa-check-circle',
          message: 'Submitted'
        })
      }
    },

    onReset () {
      this.goods = null
      this.price = null
      // this.accept = false
    }
  }
};
</script>

<style lang="stylus" scoped>
</style>


