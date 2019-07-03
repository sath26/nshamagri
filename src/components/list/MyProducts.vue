<template>
  <q-layout view="hHh LpR lFf">
    <!-- this view put header and footer fixed but tab is not fixed yet-->
    <s-header></s-header>
    <q-page-container>
      <q-page padding class="row justify-center">
        <div style="width: 500px; max-width: 90vw;">
          <q-list separator class="q-mb-sm">
            <q-item multiline to="/add_goods">
              <!-- <q-item-side image="statics/mountains.jpg"/> -->
              <q-item-main>
                <q-item-tile label>Goods</q-item-tile>
              </q-item-main>

              <q-item-side right>
                <div class="group" style=" text-align: center;">
                  <q-btn flat color="secondary" v-close-overlay>
                    <q-icon name="add"/>
                  </q-btn>
                </div>
              </q-item-side>
            </q-item>
          </q-list>
          <q-list highlight>
            <q-item multiline link to="/single_product">
              <!-- <q-item-side image="statics/mountains.jpg"/> -->
              <q-item-main>
                <q-item-tile label>Wai Wai(click here to go to single product)</q-item-tile>
                <q-item-tile sublabel>Rs 20</q-item-tile>
              </q-item-main>
            </q-item>

            <q-item multiline link>
              <!-- <q-item-side image="statics/parallax1.jpg"/> -->
              <q-item-main>
                <q-item-tile label>Happy Happy</q-item-tile>
                <q-item-tile sublabel>Rs 10</q-item-tile>
              </q-item-main>
              <!--    <q-item-side right>
                <q-btn round flat>
                  <q-icon name="more_vert"/>
                  <q-popover>
                    <div class="group" style=" text-align: center;">
                      <q-btn flat color="secondary" v-close-overlay>
                        <q-icon name="edit"/>
                      </q-btn>
                      <q-btn flat color="secondary" v-close-overlay>
                        <q-icon name="delete"/>
                      </q-btn>
                    </div>
                  </q-popover>
                </q-btn>
              </q-item-side>-->
            </q-item>

            <q-item multiline link>
              <!-- <q-item-side image="statics/parallax1.jpg"/> -->
              <q-item-main>
                <q-item-tile label>Happy Happy</q-item-tile>
                <q-item-tile sublabel>Rs 10</q-item-tile>
                <q-item-tile sublabel>
                  <q-btn label="Unavailable" color="deep-orange" size="sm" flat disabled/>
                </q-item-tile>
              </q-item-main>
            </q-item>
          </q-list>
        </div>
      </q-page>
    </q-page-container>

    <s-footer></s-footer>
  </q-layout>
</template>
<script>
import SHeader from "../../layouts/Header";
import SFooter from "../../layouts/Footer";
import ModalGood from "../add/NewGood";
import { mapState, mapGetters } from "vuex";
export default {
  components: {
    SHeader,
    SFooter,
    ModalGood
  },
  data() {
    return {
      search: "",
      opened: false
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
@import '..\..\css\app.styl';

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


