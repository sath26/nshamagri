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
              <q-item-section label="Goods">
                <q-input
                  filled
                  label="Unit"
                  @focus="focusOn()"
                  @blur="blurFocusOff()"
                  ref="focus"
                  color="secondary"
                  v-model="new_unit"
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
          <q-spinner color="primary" size="3em" v-if="loading_unit" />
          <q-list bordered v-else>
            <q-item multiline v-for="(units) in unit" :key="units.id" >
              <!-- <q-item-side image="statics/mountains.jpg"/> -->
              <q-item-section>
                <q-item-section
                  label
                  v-show="!showField(units)"
                  @click.exact="focusField(units)"
                >{{units.value}}</q-item-section>
                <q-item-section label v-show="showField(units)">
                  <q-input
                    filled
                    color="teal"
                    @focus.exact="focusField(units)"
                    @blur.exact="blurField(units)"
                    @keyup.enter="focusField(units)"
                    ref="efocus"
                    v-model="units.value"
                  ></q-input>
                </q-item-section>
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
import { fireDB, storage, auth, db } from "../../store/service/firebase";
import { mapState, mapGetters, mapActions } from "vuex";
import warnS from "sweetalert";
import uniqid from "uniqid";

export default {
  components: {
    SHeader,
    SFooter,
    
  },
  data() {
    return {
      new_unit : "",
      eunit: "",
      edit_unit:"",
      noFocusChange: true,
      add: true,
      done:false,
      opened: false,
      units: [],
    };
  },
  computed: {
    ...mapGetters("layoutDemo", ["view"]),
    ...mapState("unit", ["unit", "loading_unit"]),

    newGoodToggler: {
      get() {
        return this.$store.state.layoutDemo.toggleNewGood;
      },
      set(val) {
        this.$store.commit("layoutDemo/setToggleAddGood", val);
      }
    }
  },
    created(){
      this.fetchUnit();
    },
   methods:{
    ...mapActions("unit", [
      "fetchUnit",
      "createUnit",
      "updateUnit",
      "deleteUnit"
    ]),
    focusOn() {
      this.add = false;
      this.done = true; //done is for change in icon here
      this.$refs.focus.focus();
    },
    focusOff() {
      this.add = true;
      this.done = false;
      this.new_unit = "";
    },
     blurFocusOff() {
      // this.$refs.focus.blur();
    },
    focusField(eunit) {
      eunit.done = true;
      if (event) {
        event.preventDefault();
      }
      eunit.editIcon = false;
      this.hover = false;
      this.cantChangeIconAfterFocus = false;
      this.edit_unit = eunit.value; //variable remains same but server must have it
      //  this.$refs["efocus"].focus();
    },
    blurField(eunit) {
      if (event) {
        event.stopPropagation();
      }
       if(eunit.value.length > 0 ){w
        eunit.done = false;
        this.edit_unit = "";
        this.hover = true;
        // this.remove(eunit);
      }else{
        this.remove(eunit);
      }
    },
    showField(eunit) {
      return eunit.done;
      if (event) {
        event.stopPropagation();
      }
      return eunit == "" || this.edit_unit == eunit.value;
    },
    edit(eunit) {
      this.focusField(eunit);
    },
    insert() {
      console.log(this.new_unit);
        if(this.new_unit.length<=0){
          swal({
            title: "Nothing to add",
            text:
              "Please type in your unit!",
            icon: "warning",
            dangerMode: true
          })
        }else{
          this.createUnit({
        id: uniqid(),
        value: this.new_unit,
        label: this.new_unit,
        add: true,
        noFocusChange: true,
        done: false,
        editIcon: true,
        hover: true
      });
        }
      this.add = true;
      this.done = false;
      this.new_unit = "";
    },
     mouseover(units) {
      units.hover = false;
    },
    mouseleave(units) {
      units.hover = true;
    },
    rename(eunit) {
      eunit.hover = true;
      eunit.editIcon = true;
      this.cantChangeIconAfterFocus = true; //for delete from unit icon

      if(eunit.value.length > 0 ){
        this.updateunit({
        value: eunit.value,
        label:eunit.label,
        id: eunit.id
        });
        // this.remove(eunit);
      }else{
        this.remove(eunit);
      }
    },
  }
  
};
// Insert

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


