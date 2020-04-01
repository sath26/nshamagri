<template>
<ais-instant-search index-name="dev_enterprise" :search-client="searchClient">
  <ais-configure :hits-per-page.camel="6"/>
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
    <div
      class="search-extension"
      :class="{
        extensionActive: searchPopout,
        extensionDeactive: searchPopout == false
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
          <!-- category filter -->
          <q-separator vertical></q-separator>
          <div class="filter-category">
            <q-btn-dropdown
                  auto-close
                  flat
                  :label="categorySelection"
                  size="lg"
                  class="dd dd-category q-pa-sm"
                >
                  <q-list>
                    <q-item
                      v-for="category in categories"
                      :key="category.name"
                      tag="label"
                      v-ripple
                      class="q-pr-xl"
                    >
                      <q-item-section avatar>
                        <q-radio
                          v-model="categorySelection"
                          :val="category.value"
                          color="teal"
                        ></q-radio>
                      </q-item-section>
                      <q-item-section>
                        <q-item-label>{{ category.name }}</q-item-label>
                      </q-item-section>
                    </q-item>
                  </q-list>
                </q-btn-dropdown>
          </div>
          <!-- distance filter slider -->
          <q-separator vertical></q-separator>
          <div class="q-px-md q-pa-sm filter-distance relative-position row">
            <div class="float-left col-8">
              <q-badge color="secondary" class="q-mb-lg">
              Distance: {{ distance.min }}km to {{ distance.max }}km
            </q-badge>
            <!-- slider -->
            <q-range
              v-model="distance"
              :min="0"
              :max="100"
              :step="4"
              label
              color="teal"
              dense
              :disable="noLimit"
            ></q-range>
            </div>
            <div class="float-right col-4 q-mt-sm q-pl-md">
              <q-checkbox
                  v-model="noLimit"
                  label="No Limit"
                  color="teal">
                </q-checkbox>
            </div>
          </div>
          <q-separator vertical></q-separator>
          <!-- price filter minimum and maximum -->
          <div class=" filter-price">
            <div class="filter-price_subcontainer  relative-position">
              <div class="filter-price-min float-left">
              <q-input
                    debounce="500"
                    color="teal"
                    v-model.lazy="minPrice"
                    type="number"
                    label="Min price"
                    dense
                    class="price-input_field"
                  ></q-input>
              </div>
                  <div class="filter-price-max float-right">
                    <q-input
                    debounce="500"
                    color="teal"
                    v-model.lazy="maxPrice"
                    type="number"
                    label="Max price"
                    dense
                    class="price-input_field"
                  ></q-input>
                  </div>
            </div>
          </div>
          <q-separator vertical></q-separator>
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
        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="enterprise" class="ent-panel">
            <!-- Card -->
            <ais-hits>
              <div slot="item" slot-scope="{ item }">
                 <q-card class="my-search-card">
          <q-card-section horizontal>
            <!-- user image with name -->
            <q-img style="width:200px; height:200px"
              src="../statics/guy-avatar.png" alt="user image">
              <div class="absolute-bottom text-subtitle2 text-center">
                 {{item.enterprise_name}} <br /><span class="usr-name_txt text-weight-bold"
                      >Saugat Thapa</span>
              </div>
            </q-img>
            <!-- distance info -->
            <q-card-section class="info-section info-distance_section">
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
            </q-card-section>
            <!-- invoice info -->
            <q-card-section class="info-section info-invoice_section">
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
            </q-card-section>
            <!-- customer appreciation  -->
            <q-card-section class="info-section info-customer_section">
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
            </q-card-section>
          </q-card-section>
        
      <q-separator ></q-separator>

      <q-card-actions>
        <q-btn flat>
          Open
        </q-btn>
        <q-btn flat color="negative">
          Close
        </q-btn>
        <q-btn flat color="primary">
          Contact
        </q-btn>
        <q-btn flat class="float-right">
          Date modified - 12/02/2019
        </q-btn>
      </q-card-actions>
    </q-card>
              </div>
            </ais-hits>
            <ais-pagination></ais-pagination>
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
  </div>
</ais-instant-search>
</template>
<script>
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
    AisPagination
  },
  name: "SSearch",
  data() {
    return {
      tab: "enterprise",
      searchPopout: false,
      searchBox: "",
      text: "",
      categorySelection: "category",
      categories: [
        { name: "All categories", value: "all" },
        { name: "Electornics", value: "electronic" },
        { name: "Food", value: "food" },
        { name: "Driver", value: "driver" }
      ],
      filter: false,
      minPrice: Number,
      maxPrice: Number,
      locationRange: 0,
      noLimit: false,
      distance:{
        min:0,
        max:100
      },
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
  .colorGreen
    color #4B7D6E
  .ent-panel
    background #399779
  .enterprise-card_container
    background none
  .filter-icon
    width 25px
    height 20px
  .search-extension
    width 100%
    height 100%
    position absolute
    border none
    left 0
    .my-card
      border-radius 0px
  .extensionActive
    animation extInAnimation 500ms cubic-bezier(0.22, 0.44, 0, 1) forwards
  .extensionDeactive
    animation extOutAnimation 500ms cubic-bezier(0.22, 0.44, 0, 1) forwards
  .filter-dropdown_content-list_item
    background transparent
    padding 0
    margin 0
  .dd
    width 100%
  .dd-price, .dd-location
    padding 9px
  .price-input_field
    width 50%
.close-btn
  position absolute
  right 10px
// filter items
.filter-category
  width 10%
  text-align center
.filter-distance
  width 20%
.filter-price
  &-min>*, &-max>*
    margin 0 auto
// card styling
.list-card_container
  overflow hidden
  background #fafafa
  color #424242
  vertical-align center
  position relative
.info-icons
  width 55px
  height 55px
.info-section
  padding-left 2rem
.info-section>*
  vertical-align middle
  margin-top 1.2rem
  .info-value
    text-align center
    font-weight 700
  .txt-info
    display inline-block
  .distance-text_info
    display inline-block
  .info-customer_container
    text-align center
  .email-icon, .contact-icon
    width 30px
    height 30px
  .info-date_txt
    font-size 1vw
    opacity .8
    position absolute
    bottom -5%
    right 2%

  @keyframes extInAnimation{
    0%{
      top:0;
      opacity:0;
    }
    100%{
      opacity:1;
      top:70px;
    }
  }
  @keyframes extOutAnimation{
    0%{
      top:70px;
      opacity:1;
    }
    100%{
      opacity:0;
      top:0;
      visibility hidden
    }
  }

  
</style>
