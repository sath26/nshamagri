<template>
  <q-layout view="hHh LpR lFf">
    <q-page-container>
      <s-header></s-header>

      <q-tabs v-model="tab" animated color="secondary" align="justify">
        <q-tab default name="buyers" label="me" />
        <!-- <q-tab default name="buyers" slot="section" icon="mail" label="BUyers" /> -->
        <q-tab name="sellers" label="enterprise" />
      </q-tabs>
      <q-separator />
      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="buyers">
          <div style="width: 500px; max-width: 90vw;" class="q-mx-auto">
            <q-card inline class="bigger q-ma-sm">
              <img src="statics/parallax2.jpg" />

              <q-card-section class="relative-position">
                <div class="ellipsis">Saugat Thapa</div>
              </q-card-section>
              <q-card-section>
                <q-btn flat>
                  <q-icon name="phone" />9860181513
                </q-btn>
              </q-card-section>
            </q-card>
          </div>
        </q-tab-panel>

        <q-tab-panel name="sellers">
          <div style="width: 500px; max-width: 90vw;" class="q-mx-auto">
            <q-card inline class="bigger q-ma-sm">
              <img src="statics/parallax2.jpg" />

              <q-card-section class="relative-position">
                <q-btn
                  fab
                  color="secondary"
                  icon="directions"
                  class="absolute"
                  style="top: 0; right: 8px; transform: translateY(-50%);"
                />

                <div class="ellipsis">Cafe Basilico</div>
                <!-- <q-rating slot="subsection" :max="5"/> -->
                <!-- <q-rating slot="subsection" v-model="stars" :max="5"/> -->
                <div slot="right" class="row items-center q-mt-md">
                  <q-icon name="place" />250 ft
                </div>
              </q-card-section>
              <q-card-section>
                <p>Retailer</p>
                <p class="text-faded">Pan no: 0987654321</p>
              </q-card-section>
              <q-separator />
              <q-card-actions>
                <q-btn flat icon>Opened now</q-btn>
                <q-btn flat>
                  <q-icon name="phone" />9860181513
                </q-btn>
                <!-- <q-btn flat color="secondary">Message</q-btn> -->
              </q-card-actions>
            </q-card>
          </div>
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
      tab: "buyers"
    };
  },
  computed: {
    // ...mapGetters("layoutDemo", ["view"])
  }
};
</script>

<style lang="stylus" scoped>
.footer-btn {
  border-radius: 0;
  color: #41aaa8;
  background: #fafafa;
}

.me-card, .enterprise-card {
  background: $primary-white;
  margin: 0 auto;
}

.tab-me, .tab-enterprise {
  background: $tab-color;
}
</style>


