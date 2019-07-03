<template>
  <q-layout view="hHh LpR lFf">
    <!-- this view put header and footer fixed but tab is not fixed yet-->
    <q-page-container>
      <s-header></s-header>
      <q-toolbar inverted color="secondary">
        <q-toolbar-title>
          <q-btn flat>RajKumar pasal</q-btn>
        </q-toolbar-title>
        <q-btn-group>
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
        </q-btn-group>
      </q-toolbar>
      <q-tabs animated swipeable inverted color="secondary" align="justify">
        <q-tab default name="invoice" slot="title" label="invoice"/>
        <!-- <q-tab default name="buyers" slot="title" icon="mail" label="BUyers" /> -->
        <q-tab name="paid_date" slot="title" label="paid date"/>
        <!-- each item leads to its particular statement bought and sold statement  -->
        <!-- dark orange to those whose payment is due or unreceived  -->
        <q-tab-pane name="invoice">
          <q-page padding class="row justify-center">
            <div style="width: 500px; max-width: 90vw;">
              <q-list highlight>
                <q-item to="/invoice_good">
                  <q-item-main label="123" label-lines="1"></q-item-main>
                  <q-item-side right>
                    <!-- <span>Amt:</span> -->
                    5000
                  </q-item-side>
                </q-item>
                <q-item>
                  <q-item-main label="345" label-lines="1"/>
                  <q-item-side right stamp="3 min"/>
                </q-item>
                <q-item>
                  <q-item-main label="74j8" label-lines="1"/>
                  <q-item-side right stamp="1 hr"/>
                </q-item>
                <q-item>
                  <q-item-main label="433" label-lines="1"/>
                  <q-item-side right stamp="1 day"/>
                </q-item>
              </q-list>
            </div>
          </q-page>
        </q-tab-pane>

        <q-tab-pane name="paid_date">
          <q-page padding class="row justify-center">
            <div style="width: 500px; max-width: 90vw;">
              <q-list highlight>
                <q-item to="/invoice_good">
                  <q-item-main label="123" label-lines="1">
                    <q-item-tile sublabel lines="2">
                      <span>Received by:</span>
                      Riwat Rai
                    </q-item-tile>
                  </q-item-main>
                  <q-item-side right color="red">- 5000
                    <q-item-tile sublabel lines="2">
                      <!-- <span>Unpaid:</span> -->
                      (1000)
                    </q-item-tile>
                  </q-item-side>
                </q-item>
                <q-item>
                  <q-item-main label="334" label-lines="1"/>
                  <q-item-side right stamp="3 min"/>
                </q-item>
                <q-item>
                  <q-item-main label="3434" label-lines="1"/>
                  <q-item-side right stamp="1 hr"/>
                </q-item>
                <q-item>
                  <q-item-main label="1123" label-lines="1"/>
                  <q-item-side right stamp="1 day"/>
                </q-item>
              </q-list>
            </div>
          </q-page>
        </q-tab-pane>
      </q-tabs>
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
  computed: {}
};
</script>

<style lang="stylus" scoped>
</style>


