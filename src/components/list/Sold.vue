<template>
  <q-layout view="hHh LpR lFf">
    <!-- this view put header and footer fixed but tab is not fixed yet-->
    <q-page-container>
      <s-header></s-header>
      <q-toolbar inverted color="secondary">
        <q-toolbar-title>
          <q-btn flat>rajkumar pasal</q-btn>
        </q-toolbar-title>
        <div class="q-pa-sm q-gutter-sm">
          <q-btn flat color="black">
            (5000)
            <q-tooltip anchor="bottom middle" self="top middle" :offset="[10, 10]">
              <strong>Unreceived</strong>
            </q-tooltip>
          </q-btn>
          <q-btn flat color="secondary">
            20000
            <q-tooltip anchor="bottom middle" self="top middle" :offset="[10, 10]">
              <strong>Received</strong>
            </q-tooltip>
          </q-btn>
          <q-btn flat color="black">
            25000
            <q-tooltip anchor="bottom middle" self="top middle" :offset="[10, 10]">
              <strong>Total</strong>
            </q-tooltip>
          </q-btn>
        </div>
      </q-toolbar>
      <q-separator />

      <q-tabs animated swipeable inverted active-color="secondary"
            indicator-color="secondary" v-model="tab" align="justify">
        <q-tab default name="invoice"  label="invoice" sublabel="25000" />
        <!-- <q-tab default name="buyers"  icon="mail" label="BUyers" /> -->
        <q-tab name="paid_date"  label="received date" />
        <!-- each item leads to its particular statement bought and sold statement  -->
        <!-- dark orange to those whose payment is due or unreceived  -->
      </q-tabs>
      <q-tab-panels v-model="tab">
        <q-tab-panel name="invoice">
          <q-page padding class="row justify-center">
            <div style="width: 500px; max-width: 90vw;">
              <q-list bordered highlight>
                <q-item to="/invoice_good">
                  <q-item-section label="123" label-lines="1">
                    <q-item-section sublabel lines="2">
                      <span>Unreceived:</span>
                      1000
                    </q-item-section>
                  </q-item-section>
                  <q-item-section side color="secondary">+ 5000</q-item-section>
                </q-item>
                <q-item>
                  <q-item-section label="345" label-lines="1" >345</q-item-section>
                  <q-item-section side stamp="3 min" >3 min</q-item-section>
                </q-item>
                <q-item>
                  <q-item-section label="74j8" label-lines="1" >74j8</q-item-section>
                  <q-item-section side stamp="1 hr" >1 hr</q-item-section>
                </q-item>
                <q-item>
                  <q-item-section label="433" label-lines="1" >433</q-item-section>
                  <q-item-section side stamp="1 day" >1 day</q-item-section>
                </q-item>
              </q-list>
            </div>
          </q-page>
        </q-tab-panel>

        <q-tab-panel name="paid_date">
          <q-page padding class="row justify-center">
            <div style="width: 500px; max-width: 90vw;">
              <q-list highlight>
                <q-item to="/invoice_good">
                  <q-item-section label="123" label-lines="1">
                    <q-item-section sublabel lines="2">
                      <span>Received by:</span>
                      Saugat Thapa
                    </q-item-section>
                  </q-item-section>
                  <q-item-section side color="secondary">+ 5000</q-item-section>
                </q-item>
                <q-item>
                  <q-item-section label="334" label-lines="1" >334</q-item-section>
                  <q-item-section side stamp="3 min" >3 min</q-item-section>
                </q-item>
                <q-item>
                  <q-item-section label="3434" label-lines="1" >3434</q-item-section>
                  <q-item-section side stamp="1 hr" >1 hr</q-item-section>
                </q-item>
                <q-item>
                  <q-item-section label="1123" label-lines="1" >1123</q-item-section>
                  <q-item-section side stamp="1 day" > 1 day</q-item-section>
                </q-item>
              </q-list>
            </div>
          </q-page>
        </q-tab-panel>
      </q-tab-panels>
    </q-page-container>

    <s-footer></s-footer>
  </q-layout>
</template>
<script>
//consists of buyers and sellers
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
      tab: "invoice"
    };
  },
  computed: {}
};
</script>

<style lang="stylus" scoped></style>


