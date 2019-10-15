/* tailoring
sectiontenaince(bike, car, electronic, plumbing) 
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
              <!-- <q-item-section image="statics/mountains.jpg"/> -->
              <q-item-section label="Services">
                <q-input
                  filled
                  label="Category"
                  @focus="focusOn()"
                  @blur="blurFocusOff()"
                  ref="focus"
                  color="secondary"
                  v-model="new_category"
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
          <q-list bordered class="list-container">
            <q-item multiline>
              <!-- to="/single_service" -->
              <!-- <q-item-section image="statics/mountains.jpg"/> -->
              <q-item-section>
                <q-item-section label v-show="!showField('category')" @click="focusField('category')">{{category}}</q-item-section>
                <q-item-section label  v-show="showField('category')">
                  <q-input
                 
                  filled
                  @focus="focusField('category')"
                  @blur="blurField"
                  ref="focus"
                  color="secondary"
                  v-model="category"
                >
                </q-input>
                </q-item-section>
              </q-item-section>
            </q-item>

            <q-item multiline>
              <!-- <q-item-section image="statics/parallax1.jpg"/> -->
              <q-item-section>
                <q-item-section label>Crash Course</q-item-section>
              </q-item-section>
            </q-item>

            <q-item multiline>
              <!-- <q-item-section image="statics/parallax1.jpg"/> -->
              <q-item-section>
                <q-item-section label>Monthly Course</q-item-section>
              </q-item-section>
            </q-item>
            <q-item multiline>
              <!-- <q-item-section image="statics/parallax1.jpg"/> -->
              <q-item-section>
                <q-item-section label>Teacher</q-item-section>
              </q-item-section>
            </q-item>
            <q-item multiline>
              <!-- <q-item-section image="statics/parallax1.jpg"/> -->
              <q-item-section>
                <q-item-section label>Tutor</q-item-section>
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
      new_category:"",
      category: "",
      edit_category: "",
      add: true,
      done: false
    };
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
    },
    focusField(category){
      this.edit_category = category;
    },
    blurField(){
      this.edit_category = '';
    },
    showField(category){
      return (category == '' || this.edit_category == category)
    },
    edit(){},
    remove(){},
    insert(){}
  },
  mounted() {}
};
</script>

<style lang="stylus" scoped>
@import '../../css/app.styl';

.list-container {
  background: $primary-white;
}
</style>


