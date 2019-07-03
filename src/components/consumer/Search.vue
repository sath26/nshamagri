/* 
serviceprovider
singleenterprise
singlegood
all these options wont have add or edit or delete option for consumer
so i must provide different option based on data ownership
or i can reuse the same code without the option
 */
<template>
  <q-layout view="hHh LpR lFf">
    <s-header></s-header>
    <q-page-container>
      <q-toolbar inverted color="secondary">
        <q-toolbar-title>3 enterprises found for "wai wai"</q-toolbar-title>Sort by:
        <q-select hide-underline color="secondary" v-model="select" :options="options"/>
      </q-toolbar>
      <q-page padding class="row justify-center">
        <div style="width: 500px; max-width: 90vw;">
          <q-list highlight>
            <q-item multiline link to="/single_product">
              <q-item-main>
                <q-item-tile label>RajKumar</q-item-tile>
                <q-item-tile sublabel>
                  <!-- Rs 20  · 0.5 km -->
                  Rs 20 | 0.5 km
                </q-item-tile>
                <q-item-tile sublabel>
                  <div class="text-negative">Closed</div>
                </q-item-tile>
              </q-item-main>
            </q-item>
            <q-item-separator/>
            <q-item multiline link>
              <q-item-main>
                <q-item-tile label>Kiran</q-item-tile>
                <q-item-tile sublabel> Rs 10 | 0.5 km</q-item-tile>
                <q-item-tile sublabel>
                  Open
                </q-item-tile>
              </q-item-main>
              <q-item-separator/>
            </q-item>
            <q-item-separator/>

            <q-item multiline link>
              <q-item-main>
                <q-item-tile label>Pawan</q-item-tile>
                <q-item-tile sublabel> Rs 10 | 0.5 km</q-item-tile>
                <q-item-tile sublabel>
                  Open
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
      opened: false,
      select: "price",
      options: [
        {
          label: "Distance",
          value: "dist"
        },
        {
          label: "Price(low to high)",
          value: "price"
        }
      ]
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


