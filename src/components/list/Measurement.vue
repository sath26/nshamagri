<template>
  <q-layout view="hHh LpR lFf">
    <!-- this view put header and footer fixed but tab is not fixed yet-->
    <s-header></s-header>
    <q-page-container>
      <q-page padding class="row justify-center">
        <div style="width: 500px; max-width: 90vw;">
          <q-list bordered separator class="q-mb-sm">
           <q-item multiline>
              <q-item-section avatar>
                <q-btn flat color="secondary" v-if="add" @click="focusOn()">
                  <q-icon color="secondary" name="add" />
                </q-btn>
                <q-btn flat color="secondary" v-else @click.stop="focusOff()">
                  <q-icon color="secondary" name="close" />
                </q-btn>
              </q-item-section>
              <!-- <q-item-section image="sta tics/mountains.jpg"/> -->
              <q-item-section label="Services">
                <q-input
                  filled
                  label="Unit"
                  @focus="focusOn()"
                  @blur="blurFocusOff()"
                  ref="focus"
                  color="secondary"
                  v-model="unit"
                >
                  <template v-slot:append>
                    <q-btn flat color="secondary" v-if="done" @click>
                      <q-icon name="done" />
                    </q-btn>
                  </template>
                </q-input>
              </q-item-section>
            </q-item>
          </q-list>
          <q-list bordered highlight>
            <q-item multiline link>
              <!-- <q-item-side image="statics/mountains.jpg"/> -->
              <q-item-section>
                <q-item-section label>Kilo</q-item-section>
              </q-item-section>
            </q-item>

            <q-item multiline link>
              <!-- <q-item-side image="statics/parallax1.jpg"/> -->
              <q-item-section>
                <q-item-section label>Litre</q-item-section>
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
                <q-item-label>Cartoon</q-item-label>
              </q-item-section>
            </q-item>
            <q-item multiline link>
              <!-- <q-item-side image="statics/parallax1.jpg"/> -->
              <q-item-section>
                <q-item-label>Packet</q-item-label>
              </q-item-section>
            </q-item>
            <q-item multiline link>
              <!-- <q-item-side image="statics/parallax1.jpg"/> -->
              <q-item-section>
                <q-item-label>Pieces</q-item-label>
              </q-item-section>
            </q-item>
              <q-item multiline link>
              <!-- <q-item-side image="statics/parallax1.jpg"/> -->
              <q-item-section>
                <q-item-label>Monthly</q-item-label>
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
    SFooter,
    
  },
  data() {
    return {
      search: "",
      opened: false,
       unit: "",
      add: true,
      done: false
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
  },
   methods: {
    focusOn() {
      this.add = false;
      this.$refs.focus.focus();
      this.done = true;
    },
    focusOff() {
      this.add = true;
      this.category = "";
      this.done = false;
    },
    blurFocusOff() {
      this.$refs.focus.blur();
    }
  },
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


