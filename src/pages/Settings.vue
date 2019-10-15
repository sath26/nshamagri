<template>
  <q-layout view="hHh LpR lFf">
    <!-- this view put header and footer fixed but tab is not fixed yet-->
    <s-header></s-header>
    <q-page-container>
      <q-page padding class="row justify-center">
        <div style="width: 500px; max-width: 90vw;">
          <q-list  bordered separator  class="q-mb-sm">
            <q-item multiline to="/add_goods">
              <!-- <q-item-side image="statics/mountains.jpg"/> -->
              <q-item-section>
                <q-item-section label>Settings</q-item-section>
              </q-item-section>

              
            </q-item>
          </q-list>
          <q-list bordered highlight>
            <q-item multiline link >
              <!-- <q-item-side image="statics/mountains.jpg"/> -->
              <q-item-section>
                <q-item-section label>Service Charge</q-item-section>
                
              </q-item-section>
              <q-item-section avatar>
                <div class="group" style=" text-align: center;">
                  <q-toggle color="secondary" v-model="notifications" val="service_charge" />
                </div>
              </q-item-section>
            </q-item>

            <q-item multiline link>
              <!-- <q-item-side image="statics/parallax1.jpg"/> -->
              <q-item-section>
                <q-item-section label>Reverse VAT Charge in invoice</q-item-section>
                
              </q-item-section>
              <q-item-section avatar>
                <div class="group" style=" text-align: center;">
                  <q-toggle color="secondary" v-model="notifications" val="vat" />
                </div>
              </q-item-section>
            </q-item>

            <q-item multiline link >
              <!-- <q-item-side image="statics/parallax1.jpg"/> -->
              <q-item-section>
                <q-item-label >Device/Vehicle number</q-item-label>
               
              </q-item-section>
                <q-item-section avatar>
                <div class="group" style=" text-align: center;">
                  <q-toggle color="secondary" v-model="notifications" val="device_no" />
                </div>
              </q-item-section>
            </q-item>
                <q-item multiline link >
              <!-- <q-item-side image="statics/parallax1.jpg"/> -->
              <q-item-section>
                <q-item-label >Provide Deadline Date</q-item-label>
               
              </q-item-section>
                <q-item-section avatar>
                <div class="group" style=" text-align: center;">
                  <q-toggle color="secondary" v-model="notifications" val="deadline" />
                </div>
              </q-item-section>
            </q-item>
          </q-list>
        </div>
      </q-page>
    </q-page-container>

    <s-footer></s-footer>
  </q-layout>
</template>
<script>
import SHeader from "../layouts/Header";
import SFooter from "../layouts/Footer";

import { mapState, mapGetters } from "vuex";
export default {
  components: {
    SHeader,
    SFooter,
   
  },
  data() {
    return {
      search: "",
      opened: false,
      notifications:['deadline']
    };
  },
  computed: {
    ...mapGetters("layoutDemo", ["view"]),
    newGoodToggler: {
      get() {
        return this.$store.state.layoutDemo.toggleNewGood;
      },
      set(val) {
        this.$store.commit("layoutDemo/setToggleAddGood", val);
      }
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '..\css\app.styl'

.list-goods {
  background: $primaryWhite;
}

.add-good-form_container {
  padding: 40px;
  width: 100%;
  height: 100%;
  background: $primary-bg-color;
}
</style>


