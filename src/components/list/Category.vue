/* tailoring sectiontenaince(bike, car, electronic, plumbing) food and
restaurant Wash(vehicle, clothes) printing furniture engineering firms(it,
civil) sales security tuition classes tour and travel(guide) Legal Services
Advertising Agency Event Management Healthcare / Pharma / Biotech / Health Care/
R &D electronics plumbing */ // can choose what type of service i am in
enterprise detail no need of service option
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
                  :rules="[
                    val =>
                      val.length <= 70 || 'Please use maximum 70 characters'
                  ]"
                >
                  <template v-slot:append>
                    <q-btn flat color="secondary" v-if="done" @click="insert()">
                      <q-icon name="done" />
                    </q-btn>
                  </template>
                </q-input>
              </q-item-section>
            </q-item>
          </q-list>
          <q-spinner color="primary" size="3em" v-if="loading_category" />
          <q-list bordered v-else class="list-container">
            <q-item
              multiline
              v-for="(categories, index) in category"
              :key="categories.id"
            >
              <!-- to="/single_service" -->
              <!-- <q-item-section image="statics/mountains.jpg"/> -->
              <q-item-section avatar>
                <q-btn
                  flat
                  v-if="categories.hover && categories.cantChangeIconAfterFocus"
                  :key="index"
                  @mouseover="mouseover(categories)"
                >
                  <q-icon name="img:statics/icons/category-icon.svg" />
                </q-btn>
                <q-btn
                  flat
                  v-else
                  @click="remove(categories)"
                  @mouseleave="mouseleave(categories)"
                >
                  <q-icon name="delete" />
                </q-btn>
              </q-item-section>
              <q-item-section>
                <q-item-section
                  label
                  v-show="!showField(categories)"
                  @click.exact="focusField(categories)"
                  >{{ categories.value }}</q-item-section
                >
                <q-item-section label v-show="showField(categories)">
                  <q-input
                    filled
                    color="teal"
                    @focus.exact="focusField(categories)"
                    @blur.exact="blurField(categories)"
                    @keyup.enter="focusField(categories)"
                    ref="efocus"
                    v-model="categories.value"
                    :rules="[
                      val =>
                        val.length <= 70 || 'Please use maximum 70 characters'
                    ]"
                  ></q-input>
                </q-item-section>
              </q-item-section>
              <q-item-section avatar>
                <q-btn
                  flat
                  v-if="categories.editIcon"
                  @click="edit(categories)"
                >
                  <q-icon name="edit" />
                </q-btn>
                <q-btn flat v-else @click="rename(categories)">
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
import { fireDB, storage, auth, db } from "../../store/service/firebase";
import { mapState, mapGetters, mapActions } from "vuex";
import swal from "sweetalert";
import uniqid from "uniqid";
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
      cantChangeIconAfterFocus: true, //for delete from category icon
      done: false,
      editIcon: true, // for edit icon to be true,
      hover: true,
      categories: []
    };
  },
  computed: {
    ...mapGetters("layoutDemo", ["view"]),
    ...mapState("category", ["category", "loading_category"]),

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
    this.fetchCategory(); // this is a variable in category but function in reddit-clone
    //db.collection('category')
  },
  methods: {
    ...mapActions("category", [
      "fetchCategory",
      "createCategory",
      "updateCategory",
      "deleteCategory"
    ]),
    focusOn() {
      this.add = false;
      this.done = true; //done is for change in icon here
      this.$refs.focus.focus();
    },
    focusOff() {
      this.add = true;
      this.done = false;
      this.new_category = "";
    },
    blurFocusOff() {
      // this.$refs.focus.blur();
    },
    focusField(ecategory) {
      ecategory.done = true;
      if (event) {
        event.preventDefault();
      }
      ecategory.editIcon = false;
      this.hover = false;
      this.cantChangeIconAfterFocus = false;
      this.edit_category = ecategory.value; //variable remains same but server must have it
      //  this.$refs["efocus"].focus();
    },
    blurField(ecategory) {
      if (event) {
        event.stopPropagation();
      }
      if (ecategory.value.length > 0) {
        ecategory.done = false;
        this.edit_category = "";
        this.hover = true;
        // this.remove(ecategory);
      } else {
        this.remove(ecategory);
      }
    },
    prevent() {
      if (event) {
        event.stopPropagation();
      }
    },
    showField(ecategory) {
      return ecategory.done;
      if (event) {
        event.stopPropagation();
      }
      return ecategory == "" || this.edit_category == ecategory.value;
    },
    edit(ecategory) {
      this.focusField(ecategory);
    },
    remove(ecategory) {
      swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this data!",
        icon: "warning",
        buttons: true,
        dangerMode: true
      }).then(willDelete => {
        if (willDelete) {
          this.deleteCategory({
            id: ecategory.id
          });
          swal("Poof! Your data has been deleted!", {
            icon: "success"
          });
        } else {
          swal("Your data is safe!");
        }
      });
    },
    insert() {
      console.log(this.new_category);
      if (this.new_category.length <= 0) {
        swal({
          title: "Nothing to add",
          text: "Please type in your category!",
          icon: "warning",
          dangerMode: true
        });
      } else {
        this.createCategory({
          id: uniqid(),
          value: this.new_category,
          label: this.new_category,
          add: true,
          cantChangeIconAfterFocus: true,
          done: false,
          editIcon: true,
          hover: true
        });
      }
      this.add = true;
      this.done = false;
      this.new_category = "";
    },
    mouseover(categories) {
      categories.hover = false;
    },
    mouseleave(categories) {
      categories.hover = true;
    },
    rename(ecategory) {
      ecategory.hover = true;
      ecategory.editIcon = true;
      this.cantChangeIconAfterFocus = true; //for delete from category icon

      if (ecategory.value.length > 0) {
        this.updateCategory({
          value: ecategory.value,
          label: ecategory.label,
          id: ecategory.id
        });
        // this.remove(ecategory);
      } else {
        this.remove(ecategory);
      }

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
