<template>
<ais-instant-search index-name="dev_enterprise" :search-client="searchClient">
  <ais-configure :hits-per-page.camel="9"/>
  <div class="container">
    <ais-search-box>
    <q-input
      @click="searchPopout = true"
      dark
      dense
      standout
      debounce="500"
      slot-scope="{ currentRefinement, refine }"
      :value="currentRefinement"
      @input="refine($event)"
      input-class="text-right"
      class="q-ml-md search-box"
    >
      <template v-slot:append>
        <q-icon v-if="text === ''" name="search" />
        <q-icon v-else name="clear" class="cursor-pointer" @click="text = ''" />
      </template>
    </q-input>
    </ais-search-box>
  </div>
  <!-- search extension modal -->
    <div
      class="search-extension"
      :class="{
        extensionActive: searchPopout
      }"
    >
      <q-card class="my-card">
        <q-tabs
          v-model="tab"
          class="text-grey my-card-tab"
          active-color="secondary"
          indicator-color="secondary"
          align="left"
        >
          <q-tab name="enterprise" label="Enterprise"></q-tab>
          <q-tab name="quotation" label="Quotation"></q-tab>
          <q-tab name="bought" label="Bought"></q-tab>
          <q-tab name="sold" label="Sold"></q-tab>
          <q-btn-dropdown
            auto-close
            stretch
            flat
            label="Now"
            class="colorGreen"
          >
            <q-list>
              <q-item clickable @click="tab = 'now'">
                <q-item-section>Now</q-item-section>
              </q-item>

              <q-item clickable @click="tab = 'recent'">
                <q-item-section>History</q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>
           <!-- close button -->
          <q-btn
            flat
            @click="searchPopout = false"
            class="close-btn"
            label="X"
            color="negative"
          ></q-btn>
        </q-tabs>
        <q-separator></q-separator>
        <!-- tab pannels -->
        <q-tab-panels v-model="tab" 
        animated 
        swipeable
        vertical
        infinite
        >
          <q-tab-panel name="enterprise" class="ent-panel shadow-0">
            <div class="row">
              <div class="col-xl-2 col-md-4 col-sm-3">
                <f-filter></f-filter>
              </div>
                  <!-- search reult Card -->
              <div class="col-xl-10 col-md-8 col-sm-9 result-card_container">
            <ais-hits>
              <div class="result-card" slot="item" slot-scope="{ item }">
                 <q-card class="my-search-card on-right">
          <q-card-section horizontal class="row">
            <!-- user image with name -->
            <q-img class="q-mr-lg card-img col-4" style="width:150px; height:150px"
              src="../statics/guy-avatar.png" alt="user image">
              <!-- <div class="absolute-bottom text-subtitle2 text-center">
                 {{item.enterprise_name}} <br /><span class="usr-name_txt text-weight-bold"
                      >Saugat Thapa</span>
              </div> -->
            </q-img>
            <q-card-section class="card-info-txt col-8">
              <h4 class="card-info-txt_header">Saugat Thapa</h4>
              <p class="card-info-txt_p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta deleniti repudiandae nemo nam pariatur ..</p>
            </q-card-section>
          </q-card-section>
            
            <q-card-section horizontal>
                  <!-- distance info -->
                <q-card-section class="info-section info-distance_section ">
                    <div class="info-section-container q-pr-xl">
                      <div><img class="info-icons distance-icon"
                              src="../statics/icons/distance-icon.svg"
                              alt="distance icon"/>
                              <q-tooltip content-class="bg-teal" :offset="[-10, -10]">
                                Distance
                            </q-tooltip>
                              </div>
                            <div class="distance-txt_info txt-info">
                              <p class="info-value">
                                {{item.distance}}
                              </p>
                            </div>
                    </div>
                </q-card-section>
                <!-- invoice info -->
                <q-card-section class="info-section info-invoice_section">
                    <div class="info-section-container q-pr-xl">
                    <div><img
                      class="info-icons invoice-icon"
                      src="../statics/img/Invoice-graphics.png"
                      alt="invoice icon"
                    /><q-tooltip content-class="bg-teal" :offset="[-5, -5]">
                          Invoice
                        </q-tooltip></div>
                    <div class="invoice-txt_info txt-info">
                      <p class="info-value">
                        {{item.invoice}}
                      </p>
                    </div>
                    </div>
            </q-card-section>
            <!-- customer appreciation  -->
            <q-card-section class="info-section info-customer_section">
                    <div class="info-section-container q-pr-lg">
                    <div><img
                      class="info-icons customer-icon"
                      src="../statics/icons/customers-icons.svg"
                      alt="customer icon"
                    /><q-tooltip content-class="bg-teal" :offset="[-5, -5]">
                          Customer count
                        </q-tooltip></div>
                    <div class="customer-txt_info ">
                      <p class="info-value">
                        {{item.customers}}
                      </p>
                    </div>
                    </div>
            </q-card-section>
            <q-card-section>
              <div class="card-info-footer-date">Date modified: 12/02/2020</div>
            </q-card-section>
            </q-card-section>
        
      <q-separator ></q-separator>

    
    </q-card>
              </div>

            </ais-hits>
            <ais-pagination class="q-pa-lg"></ais-pagination>
              </div>
            </div>
          </q-tab-panel>
          <q-tab-panel name="quotation">
            <p class="text-black">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero nam
              mollitia architecto ab doloremque omnis! Atque beatae consequuntur
              quo architecto.
            </p>
          </q-tab-panel>

          <q-tab-panel name="bought">
            <div class="text-h6">Movies</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>
        </q-tab-panels>
      </q-card>
    </div>
</ais-instant-search>
</template>
<script>
import FFilter from "./search/Filter.vue"
import { mapState, mapGetters } from "vuex";
import { AisInstantSearch, AisSearchBox, AisHits,AisConfigure, AisPagination } from 'vue-instantsearch';
import algoliasearch from "algoliasearch/lite";
import "instantsearch.css/themes/algolia-min.css";
export default {
   components: {
    AisInstantSearch,
    AisSearchBox,
    AisHits,
    AisConfigure,
    AisPagination,
    FFilter
  },
  name: "SSearch",
  data() {
    return {
      tab: "enterprise",
      searchPopout: false,
      searchBox: "",
      text: "",
      filter: false,
      searchClient: algoliasearch(
        "HIGFUILYRM",
        "b3cd4d3709c017e877390d653bea5eba"
        //this is of shamagri algolia
      )
    };
  },
  // methods:{
  //   al(){
  //     this.searchPopout = true;
  //   }
  // },
  computed: {}
};
</script>

<style lang="stylus" scoped>
  @import '..\css\components-style\_search';

</style>
