/* find what u can buy */
/* 
another ui is needed when supplier provides u good with all info and u dont have toinsert it 
 */
<template>
  <q-layout view="hHh LpR lFf">
    <!-- this view put header and footer fixed but tab is not fixed yet-->
    <q-page-container>
      <s-header></s-header>
      <q-page padding class="row justify-center">
        <div style="width: 500px; max-width: 90vw;">
          <q-input v-model="goods" float-label="Service Category Name" color="secondary"/>
          <q-input v-model="brand" float-label="Description" color="secondary"/>
          <q-field float-label="Category">
            <q-select filter v-model="select" :options="options"/>
          </q-field>
          <q-btn to="/add_service" label="Save" color="secondary" flat/>
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
          label: "Restaurant",
          value: "Restaurant"
        },
        {
          label: "Tailor",
          value: "Tailor"
        },
        {
          label: "Maintenaince",
          value: "Maintenaince"
        },
        {
          label: "Wash",
          value: "Wash"
        },
        {
          label: "Printing",
          value: "Printing"
        },
        {
          label: "Furniture",
          value: "Furniture"
        },
        {
          label: "Engineering Firms",
          value: "Cosmetics"
        },
        {
          label: "Travel guide",
          value: "Travel guide"
        },
        {
          label: "Legal Services",
          value: "Legal Services"
        },
        {
          label: "Advertising Agency",
          value: "Advertising Agency"
        },
        {
          label: "Event Management",
          value: "Event Management"
        },
        {
          label: "Sales",
          value: "Sales"
        }
      ]
    };
  }
};
</script>

<style lang="stylus" scoped>
</style>


