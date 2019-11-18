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
            <q-item multiline v-for="(categories, index) in category"
              :key="categories.id">
              <!-- to="/single_service" -->
              <!-- <q-item-section image="statics/mountains.jpg"/> -->
              <q-item-section avatar>
                <q-btn flat v-if="categories.hover && categories.cantChangeIconAfterFocus" :key="index"  @mouseover="mouseover(categories)">
                  <q-icon  name="img:statics/icons/category-icon.svg" />
                </q-btn>
                <q-btn flat  v-else @mouseleave="mouseleave(categories)">
                  <q-icon  name="delete" />
                </q-btn>
              </q-item-section>
              <q-item-section>
                <q-item-section
                  label
                  v-show="!showField(categories.title)"
                  @click="focusField(categories.title)"
                >{{categories.title}}</q-item-section>
                <q-item-section label v-show="showField(categories.title)">
                  <q-input
                    filled
                    color="grey-10"
                    @focus="focusField(categories.title)"
                    @blur="blurField()"
                    ref="efocus"
                    
                    v-model="categories.title"
                  ></q-input>
                </q-item-section>
              </q-item-section>
              <q-item-section avatar>
                <q-btn flat  v-if="categories.editIcon" @click="edit(categories)">
                  <q-icon name="edit" />
                </q-btn>
                <q-btn flat  v-else @click="rename(categories)">
                  <q-icon name="done" />
                </q-btn>
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
import { fireDB, storage, auth, db } from '../../store/service/firebase';
import { mapState, mapGetters, mapActions } from "vuex";
export default {
  components: {
    SHeader,
    SFooter
  },
  data() {
    return {
      new_category: "",
      ecategory: "",
      edit_category: "",
      add: true,
      cantChangeIconAfterFocus:true,//for delete from category icon
      done: false,
      // editIcon: true,// for edit icon to be true,
      hover: true,
       categories: [],
       
    };
  },
  computed: {
    ...mapGetters("layoutDemo", ["view"]),
    ...mapState("category", ["category"]),
    
    newServiceToggler: {
      get() {
        return this.$store.state.layoutDemo.toggleNewService;
      },
      set(val) {
        this.$store.commit("layoutDemo/setToggleAddService", val);
      }
    }
  },
  created() {
    // this.$store.dispatch('fetchCategory', db.collection('category'))
    this.fetchCategory();// this is a variable in category but function in reddit-clone
    //db.collection('category')
  },
  methods: {
    ...mapActions("category", ["fetchCategory", "createCategory", "updateCategory"]),
    focusOn() {
      this.add = false;
      this.done = true;
      this.$refs.focus.focus();
    },
    focusOff() {
      this.add = true;
      this.done = false;
      this.category = "";
    },
    blurFocusOff() {
      // this.$refs.focus.blur();
      
    },
    focusField(ecategory) {
      ecategory.editIcon= false;
      this.hover = false;
      this.cantChangeIconAfterFocus = false;
      this.edit_category = ecategory.title;//variable remains same but server must have it
      //  this.$refs["efocus"].focus();
    },
    blurField() {
      this.edit_category = "";
      this.hover = true;
    },
    showField(ecategory) {
      return ecategory == "" || this.edit_category == ecategory;
    },
    edit(ecategory) {
      this.focusField(ecategory)
    },
    remove() {},
    insert() {},
    mouseover(categories) {
      categories.hover = false;
    },
    mouseleave(categories) {
      categories.hover = true;
    },
    rename(ecategory){
      ecategory.hover = true;
      ecategory.editIcon =true;
      this.cantChangeIconAfterFocus = true;//for delete from category icon
     
      this.updateCategory( {
        title:ecategory.title,
        id: ecategory.id
      })
      // this.$refs["efocus"].blur();
    }
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


