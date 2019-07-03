<template>
  <q-layout view="hHh LpR lFf">
    <q-page-container>
      <s-header></s-header>
      <div style="width: 500px; max-width: 90vw;" class="q-mx-auto">
        <q-page padding class="row items-start">
          <q-card inline class="bigger q-ma-sm">
            <q-card-media>
              <img src="statics/parallax2.jpg">
            </q-card-media>
            <q-card-title class="relative-position">
              <q-btn
                fab
                color="secondary"
                icon="directions"
                class="absolute"
                style="top: 0; right: 8px; transform: translateY(-50%);"
              />

              <div class="ellipsis">Cafe Basilico</div>
              <!-- <q-rating slot="subtitle" :max="5"/> -->
              <!-- <q-rating slot="subtitle" v-model="stars" :max="5"/> -->
              <div slot="right" class="row items-center q-mt-md">
                <q-icon name="place"/>250 ft
              </div>
            </q-card-title>
            <q-card-main>
              <p>Retailer</p>
              <p class="text-faded">Pan no: 0987654321</p>
            </q-card-main>
            <q-card-separator/>
            <q-card-actions>
              <q-btn flat icon>Opened now</q-btn>
              <q-btn flat>
                <q-icon name="phone"/>9860181513
              </q-btn>
              <!-- <q-btn flat color="secondary">Message</q-btn> -->
            </q-card-actions>
          </q-card>
        </q-page>
      </div>
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


