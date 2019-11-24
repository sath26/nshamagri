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
          <q-spinner color="primary" size="3em" v-if="loading_quotation" />
          <q-list bordered highlight  v-else>
            <q-item multiline link v-for="(quotations, index ) in quotation" :key="quotations.id">
              <!-- <q-item-side image="statics/mountains.jpg"/> -->
              <q-item-section>
                <q-item-section label>{{quotations.value.title}}</q-item-section>
                <q-item-section sublabel>Rs {{quotations.value.rate}} / {{quotations.value.unit.value}}</q-item-section>
                <q-item-section sublabel>
                  <div >
                    <!-- <q-chip dense v-for="n in  quotations.value.category.length" :key="n">{{quotations.value.category[n-1].value}}</q-chip> -->
                    <q-chip dense v-for="(item,index) in  quotations.value.category" :key="index">{{item.value}}</q-chip>
                  </div>
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
import uniqid from "uniqid";
import { mapState, mapGetters, mapActions } from "vuex";
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
  created(){
this.fetchQuotation();
  },
  computed: {
     ...mapGetters("layoutDemo", ["view"]),
    ...mapState("quotation", ["quotation", "loading_quotation"]),
    
    newGoodToggler: {
      get() {
        return this.$store.state.layoutDemo.toggleNewGood;
      },
      set(val) {
        this.$store.commit("layoutDemo/setToggleAddGood", val);
      }
    }
  },
  methods:{
    ...mapActions("quotation", [
      "fetchQuotation",
      
    ]),
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


