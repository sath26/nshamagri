<template>
  <q-layout view="hHh LpR lFf">
    <!-- this view put header and footer fixed but tab is not fixed yet-->
    <q-page-container>
      <s-header></s-header>

      <q-page padding class="row justify-center">
        <div style="width: 500px; max-width: 90vw;">
          <q-list separator class="q-mb-sm">
            <q-list-header color="secondary">Bought</q-list-header>
          </q-list>
          <q-list highlight class="list-container">
            <q-item to="/bought">
              <q-item-side avatar="statics/boy-avatar.png"/>
              <q-item-main label="RajKumar Bogati Kirana Pasal" label-lines="1"/>
              <q-item-side right stamp="(1)"/>
            </q-item>
            <q-item>
              <q-item-side avatar="statics/guy-avatar.png"/>
              <q-item-main label="Pawan Kirana" label-lines="1"/>
              <q-item-side right stamp="(3)"/>
            </q-item>
            <q-item>
              <q-item-side avatar="statics/linux-avatar.png"/>
              <q-item-main label="Vaiya ko Furniture Pasal" label-lines="1"/>
              <q-item-side right stamp="(4)"/>
            </q-item>
            <q-item>
              <q-item-side avatar="statics/mountains.jpg"/>
              <q-item-main label="RajKumar Bogati Kirana Pasal" label-lines="1"/>
              <q-item-side right stamp="(20)"/>
            </q-item>
          </q-list>
        </div>
      </q-page>
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
@import '../../css/app.styl';

.top-tab {
  background: $tab-color;
}

.list-container {
  background: $primary-white;
}

.footer-btn {
  border-radius: 0;
  color: $navColor1;
  background: $primary-white;
}
</style>


