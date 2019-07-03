/* 
another ui is needed when supplier provides u good with all info and u dont have toinsert it 
 */
<template>
  <q-layout view="hHh LpR lFf ">
    <!-- this view put header and footer fixed but tab is not fixed yet-->
    <q-page-container>
      <s-header></s-header>
      <q-page padding class="row justify-center">
        <div style="width: 500px; max-width: 90vw;">
          <q-input v-model="goods" float-label="Goods Name" color="secondary"/>
          <q-input v-model="brand" float-label="Brand Name" color="secondary"/>
          <q-select filter v-model="select" :options="options"/>
          <q-btn to="/add_goods" label="Save" color="secondary" flat/>
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
      brand: "",
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
  }
};
</script>

<style lang="stylus" scoped>
</style>


