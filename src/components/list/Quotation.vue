<template>
  <q-layout view="hHh LpR lFf">
    <!-- this view put header and footer fixed but tab is not fixed yet-->
    <s-header></s-header>
    <q-page-container>
      <q-page padding class="row justify-center">
        <div style="width: 500px; max-width: 90vw;">
          <q-list bordered separator class="q-mb-sm">
            <q-item multiline>
              <!-- <q-item-side image="statics/mountains.jpg"/> -->
              
              <q-item-section>
                <q-item-section label>Quotation</q-item-section>
              </q-item-section>

              <q-item-section avatar>
                <div class="group" style=" text-align: center;">
                  <q-btn flat color="secondary" to="/add/quotation">
                    <q-icon name="add" />
                  </q-btn>
                </div>
              </q-item-section>
            </q-item>
          </q-list>
          <q-list bordered highlight>
            <q-item multiline link>
              <!-- <q-item-side image="statics/mountains.jpg"/> -->
              <q-item-section>
                <q-item-section label>Wai Wai</q-item-section>
                <q-item-section sublabel>Rs 20 / packet</q-item-section>
                <q-item-section sublabel>
                  <div>
                    <q-chip dense>Food</q-chip>
                    <q-chip dense>Dry</q-chip>
                    <q-chip dense>Junk</q-chip>
                    <q-chip dense>Cheap</q-chip>
                    <q-chip dense>Popular</q-chip>
                  </div>
                </q-item-section>
              </q-item-section>
            </q-item>

            <q-item multiline link>
              <!-- <q-item-side image="statics/parallax1.jpg"/> -->
              <q-item-section>
                <q-item-section label>Happy Happy</q-item-section>
                <q-item-section sublabel>Rs 10 / packet</q-item-section>
              </q-item-section>
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
              <q-item-section>
                <q-item-label>Happy Happy</q-item-label>
                <q-item-label sublabel>Rs 10 / packet</q-item-label>
              </q-item-section>
              <q-item-section side top>
                <q-btn label="Unavailable" color="deep-orange" size="sm" flat />
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


