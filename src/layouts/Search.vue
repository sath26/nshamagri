<template>
<ais-instant-search index-name="dev_enterprise" :search-client="searchClient">
  <ais-configure :hitsPerPage="5"/>
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
          <!-- Filter dropdown button -->
          <q-btn flat class="colorGreen" @click="filter = true">
            <q-avatar square class="q-mr-sm">
              <q-img
                class="filter-icon"
                src="../statics/icons/Filter-icon.svg"
                alt="filter icon"
              ></q-img>
            </q-avatar>
            Filter
          </q-btn>
          <!-- close button -->
          <q-btn
            flat
            @click="searchPopout = false"
            class="close-btn"
            label="X"
            color="negative"
          ></q-btn>
          <!-- filter drop down menu content -->
          <q-dialog
            v-model="filter"
            transition-show="flip-down"
            transition-hide="flip-up"
          >
            <q-card style="width: 400px; max-width: 80vw;" class="q-pa-md">
              <!-- category section -->
              <q-card-section>
                <q-btn-dropdown
                  auto-close
                  stretch
                  flat
                  :label="categorySelection"
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
              </q-card-section>
              <!-- prices section -->
              <q-card-section class="filter-option_price">
                <div class="text-h6">Price</div>
                <q-item>
                  <q-input
                    debounce="500"
                    color="teal"
                    v-model.number="minPrice"
                    type="number"
                    label="Min price"
                    dense
                    class="price-input_field"
                  ></q-input>
                </q-item>
                <!-- max price -->
                <q-item>
                  <q-input
                    debounce="500"
                    color="teal"
                    v-model.number="maxPrice"
                    type="number"
                    label="Max price"
                    dense
                    class="price-input_field"
                  ></q-input>
                </q-item>
              </q-card-section>
              <!-- location section -->
              <q-card-section>
                <div class="text-h6">Location</div>
                <q-item>
                  <q-badge>
                    Range in Kilometers: {{ locationRange }}km (0 to 50)
                  </q-badge>
                </q-item>
                <q-item>
                  <q-slider
                    v-model="locationRange"
                    :disable="noLimit"
                    :min="0"
                    :max="50"
                    color="teal"
                  ></q-slider>
                </q-item>
                <q-item>
                  <q-item-section
                    ><q-checkbox
                      v-model="noLimit"
                      label="No Limit"
                      color="teal"
                    ></q-checkbox
                  ></q-item-section>
                </q-item>
              </q-card-section>
              <!-- done section -->
              <q-card-section>
                <q-item>
                  <q-btn flat label="done" color="teal" v-close-popup></q-btn>
                </q-item>
              </q-card-section>
            </q-card>
          </q-dialog>
          <!-- Filter UI END -->
        </q-tabs>
        <q-separator></q-separator>
        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="enterprise" class="ent-panel">
            <!-- Card -->
            <ais-hits>
              <div slot="item" slot-scope="{ item }">
                
            <q-card
            
             
              flat
              class="enterprise-card_container"
            >
              <q-card-section>
                <div
                  class="list-card_container row items-center shadow-4 q-my-sm"
                >
                  <div class="usr-img_container col">
                    <img
                      class="usr-img"
                      src="../statics/guy-avatar.png"
                      alt="dummy image"
                    />
                  </div>
                  <div class="info-name_container col-2">
                    <p class="info-name_txt">
                      {{item.enterprise_name}} <br /><span class="usr-name_txt"
                        >Saugat Thapa</span
                      >
                    </p>
                  </div>
                  <div class="info-distance_container info-container col">
                    <img
                      class="info-icons distance-icon"
                      src="../statics/icons/distance-icon.svg"
                      alt="distance icon"
                    />
                    <div class="distance-txt_info txt-info">
                      <p class="info-header">
                        Distance<br /><span class="info-value">{{item.distance}}</span>
                      </p>
                    </div>
                  </div>
                  <div class="info-invoice_container info-container col">
                    <img
                      class="info-icons invoice-icon"
                      src="../statics/img/Invoice-graphics.png"
                      alt="invoice icon"
                    />
                    <div class="invoice-txt_info txt-info">
                      <p class="info-header">
                        Invoice<br /><span class="info-value">{{item.invoice}}</span>
                      </p>
                    </div>
                  </div>
                  <div class="info-contact_container info-container col">
                    <img
                      class="info-icons contact-icon"
                      src="../statics/icons/contact-icon.svg"
                      alt="contact icon"
                    />
                    <div class="contact-txt_info txt-info">
                      <p class="info-header">
                        Phone no.<br /><span class="info-value"
                          >{{item.contact}}</span
                        >
                      </p>
                    </div>
                  </div>
                  <div class="info-email_container info-container col">
                    <img
                      class="info-icons email-icon"
                      src="../statics/icons/email-icon.svg"
                      alt="email icon"
                    />
                    <div class="email-txt_info txt-info">
                      <p class="info-header">
                        Email address<br /><span class="info-value"
                          >Saugat@example.com</span
                        >
                      </p>
                    </div>
                  </div>
                  <div class="info-customer_container col">
                    <img
                      class="customer-icon"
                      src="../statics/icons/customers-icons.svg"
                      alt="customer icon"
                    />
                    <div class="customer-txt_info ">
                      <p class="info-header">
                        Customers<br /><span class="info-value">{{item.customers}}</span>
                      </p>
                    </div>
                  </div>
                  <p class="info-date_txt">Date modified - 12/02/2019</p>
                </div>
              </q-card-section>
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
    display none
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
// card styling
.list-card_container
  overflow hidden
  background #fafafa
  color #424242
  vertical-align center
  position relative
  .info-container
    text-align center
    padding 10px
  .usr-img_container
    width 10vw
    height 10vw
    // padding-top 10px
    // padding-bottom 5px
    // margin 0
    // background red
    overflow hidden
  .usr-img
    width 10vw
    height 10vw
    // margin-left 10px
  .info-name_container
    text-align left
    color #256856
  .info-name_txt
    font-size 2vw
    line-height 25px
    .usr-name_txt
      font-size 1.1vw
  .info-icons
    width 40px
    height 40px
    margin-right 10px
    transform translateY(5px)
    display inline-block
  .info-header
    font-weight 700
    font-size 1.1vw
    line-height 25px
  .info-value
    font-weight 400
  .txt-info
    display inline-block
  .distance-text_info
    display inline-block
  .info-customer_container
    text-align center
  .customer-icon
    width 45px
    height 35px
    transform translateY(5px)
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
</style>
