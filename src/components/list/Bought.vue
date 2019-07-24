<template>
  <q-layout view="hHh LpR lFf">
    <!-- this view put header and footer fixed but tab is not fixed yet-->
    <q-page-container>
      <s-header></s-header>
      <q-toolbar inverted color="secondary">
        <q-toolbar-title>
          <q-btn flat>RajKumar pasal</q-btn>
        </q-toolbar-title>
        <div class="q-pa-sm q-gutter-sm">
          <q-btn flat color="black">(5000)
            <q-tooltip anchor="bottom middle" self="top middle" :offset="[10, 10]">
              <strong>Unpaid</strong>
            </q-tooltip>
          </q-btn>
          <q-btn flat color="red">20000
            <q-tooltip anchor="bottom middle" self="top middle" :offset="[10, 10]">
              <strong>paid</strong>
            </q-tooltip>
          </q-btn>
          <q-btn flat color="black">25000
            <q-tooltip anchor="bottom middle" self="top middle" :offset="[10, 10]">
              <strong>Total</strong>
            </q-tooltip>
          </q-btn>
        </div>
      </q-toolbar>
       <q-separator/>
      <q-tabs v-model="tab" animated swipeable inverted active-color="secondary"
            indicator-color="secondary"
            align="justify">
        <q-tab default name="invoice"  label="invoice"/>
        <!-- <q-tab default name="buyers" slot="title" icon="mail" label="BUyers" /> -->
        <q-tab name="paid_date"  label="paid date"/>
        <!-- each item leads to its particular statement bought and sold statement  -->
        <!-- dark orange to those whose payment is due or unreceived  -->
        </q-tabs>

        <q-tab-panels v-model="tab">
        <q-tab-panel name="invoice">
          <q-page padding class="row justify-center" >
            <div style="width: 500px; max-width: 90vw;">
              <q-list  bordered separator >
                <q-item to="/invoice_good">
                  <q-item-section label="123" label-lines="1">123</q-item-section>
                  <q-item-section side>
                    <!-- <span>Amt:</span> -->
                    5000
                  </q-item-section>
                </q-item>
                <q-item>
                  <q-item-section label-lines="1">345</q-item-section>
                  <q-item-section side stamp="">3 min</q-item-section>
                </q-item>
                <q-item>
                  <q-item-section label="74j8" label-lines="1">74j8</q-item-section>
                  <q-item-section side stamp="">1 hr</q-item-section>
                </q-item>
                <q-item>
                  <q-item-section label="" label-lines="1">433</q-item-section>
                  <q-item-section side stamp="">1 day</q-item-section>
                </q-item>
              </q-list>
            </div>
          </q-page>
        </q-tab-panel>

        <q-tab-panel name="paid_date">
          <q-page padding class="row justify-center">
            <div style="width: 500px; max-width: 90vw;">
              <q-list bordered separator highlight>
                <q-item to="/invoice_good">
                  <q-item-section label="123" label-lines="1">
                    <q-item-section sublabel lines="2">
                      <span>Received by:</span>
                      Riwat Rai
                    </q-item-section>
                  </q-item-section>
                  <q-item-section side class="text-red">
                    - 5000
                  </q-item-section>
                    <q-item-section side sublabel lines="2">
                      <!-- <span>Unpaid:</span> -->
                      (1000)
                    </q-item-section>
                </q-item>
                <q-item>
                  <q-item-section label="334" label-lines="1">
                    334
                  </q-item-section>
                  <q-item-section side stamp="">3 min</q-item-section>
                </q-item>
                <q-item>
                  <q-item-section label="3434" label-lines="1">3434</q-item-section>
                  <q-item-section side stamp="1 hr">1 hr</q-item-section>
                </q-item>
                <q-item>
                  <q-item-section label="1123" label-lines="1">1123</q-item-section>
                  <q-item-section side stamp="1 day">1 day</q-item-section>
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
   data () {
    return {
      tab: 'invoice'
    }
    },
  computed: {}
};
</script>

<style lang="stylus" scoped>
</style>


