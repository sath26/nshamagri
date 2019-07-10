<template>
  <q-layout view="hHh LpR lFf">
    <!-- this view put header and footer fixed but tab is not fixed yet-->
    <q-page-container>
      <s-header></s-header>

      <q-page padding class="row justify-center">
        <div style="width: 500px; max-width: 90vw;">
          <q-list bordered separator class="q-mb-sm list-container">
            
            <q-item>
            <q-item-section>
              <q-item-section label>Sold</q-item-section>
            </q-item-section>
            </q-item>
         
          </q-list>
          <q-list bordered  class="list-container">
            <q-item to="/sold">
              <q-item-section avatar>
                <q-avatar>
                  <img src="statics/boy-avatar.png" alt />
                </q-avatar>
              </q-item-section>
              <q-item-section label label-lines="1">RajKumar Bogati Kirana Pasal</q-item-section>
              <q-item-section right stamp="(1)"></q-item-section>
            </q-item>
            <q-item>
              <q-item-section  avatar>
                <q-avatar>
                  <img src="statics/guy-avatar.png" alt />
                </q-avatar>
              </q-item-section>

              <q-item-section label label-lines="1">Pawan Kirana</q-item-section>
              <q-item-section right stamp="(3)"></q-item-section>
            </q-item>
            <q-item>
              <q-item-section avatar>
                <q-avatar>
                  <img src="statics/linux-avatar.png" alt />
                </q-avatar>
              </q-item-section>

              <q-item-section label label-lines="1">Vaiya ko Furniture Pasal</q-item-section>
              <q-item-section right stamp="(4)"></q-item-section>
            </q-item>
            <q-item>
              <q-item-section  avatar>
                <q-avatar>
                  <img src="statics/mountains.jpg" alt />
                </q-avatar>
              </q-item-section>

              <q-item-section label label-lines="1">RajKumar Bogati Kirana Pasal</q-item-section>
              <q-item-section right stamp="(20)"></q-item-section>
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


