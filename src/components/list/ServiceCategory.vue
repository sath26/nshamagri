/* tailoring
maintenaince(bike, car, electronic, plumbing) 
food and restaurant
Wash(vehicle, clothes) 
printing
furniture
engineering firms(it, civil)
sales
security
tuition classes
tour and travel(guide)
Legal Services
Advertising Agency
Event Management
Healthcare / Pharma / Biotech / Health Care/ R &D
electronics
plumbing */
// can choose what type of service i am in enterprise detail no need of service option 
<template>
  <q-layout view="hHh LpR lFf">
    <!-- this view put header and footer fixed but tab is not fixed yet-->
    <q-page-container>
      <s-header></s-header>
      <q-page padding class="row justify-center">
        <div style="width: 500px; max-width: 90vw;">
          <q-list separator class="q-mb-sm">
            <q-item multiline>
              <!-- <q-item-side image="statics/mountains.jpg"/> -->
              <q-item-main label="Services"/>

              <q-item-side right>
                <q-btn flat color="secondary" v-close-overlay>
                  <q-icon name="add"/>
                </q-btn>
              </q-item-side>
            </q-item>
          </q-list>
          <q-list highlight class="list-container">
            <q-item multiline to="/single_service">
              <!-- <q-item-side image="statics/mountains.jpg"/> -->
              <q-item-main>
                <q-item-tile label>Course Completion</q-item-tile>
                <q-item-tile sublabel>1.5 months</q-item-tile>
              </q-item-main>
            </q-item>

            <q-item multiline>
              <!-- <q-item-side image="statics/parallax1.jpg"/> -->
              <q-item-main>
                <q-item-tile label>Crash Course</q-item-tile>
                <q-item-tile sublabel>1 month</q-item-tile>
              </q-item-main>
            </q-item>

            <q-item multiline>
              <!-- <q-item-side image="statics/parallax1.jpg"/> -->
              <q-item-main>
                <q-item-tile label>Monthly Course</q-item-tile>
                <q-item-tile sublabel>3 months (minimum)</q-item-tile>
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
//consists of buyers and sellers
import SHeader from "../../layouts/Header";
import SFooter from "../../layouts/Footer";
import ModalService from "../add/NewService";
import { mapState, mapGetters } from "vuex";
export default {
  components: {
    SHeader,
    SFooter,
    ModalService
  },
  computed: {
    ...mapGetters("layoutDemo", ["view"]),
    newServiceToggler: {
      get() {
        return this.$store.state.layoutDemo.toggleNewService;
      },
      set(val) {
        this.$store.commit("layoutDemo/setToggleAddService", val);
      }
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '../../css/app.styl';

.list-container {
  background: $primary-white;
}
</style>


