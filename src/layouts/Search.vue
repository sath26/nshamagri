 <template>
  <div class="container">
      <q-input @click="searchPopout = true"  dark dense standout debounce="500" v-model="text" input-class="text-right" class="q-ml-md search-box">
            <template v-slot:append>
              <q-icon v-if="text === ''" name="search" />
              <q-icon v-else name="clear" class="cursor-pointer" @click="text = ''" />
            </template>
      </q-input>
        <div v-if="searchPopout" class="search-extension">
           <q-card class="my-card">
          <q-tabs
            v-model="tab"
            class="text-grey my-card-tab"
            active-color="secondary"
            indicator-color="secondary"
            align="left">
            <q-tab name="enterprise" label="Enterprise" ></q-tab>
            <q-tab name="quotation" label="Quotation" ></q-tab>
            <q-tab name="bought" label="Bought" ></q-tab>
            <q-tab name="sold" label="Sold" ></q-tab>
            <q-btn-dropdown auto-close stretch flat label="Now">
                <q-list>
                  <q-item clickable @click="tab = 'now'">
                    <q-item-section>Now</q-item-section>
                  </q-item>
      
                  <q-item clickable @click="tab = 'recent'">
                    <q-item-section>History</q-item-section>
                  </q-item>
                </q-list>
            </q-btn-dropdown>
            <!-- Filter ui -->
            <q-btn flat color="teal" @click="filter = true" > 
              <q-avatar square size="25px" class="q-mr-sm">
                <q-img class="filter-icon" src="../statics/icons/Filter-icon.svg" alt="filter icon"></q-img>
              </q-avatar>
              Filter
            </q-btn>
            <q-dialog v-model="filter" transition-show="flip-down" transition-hide="flip-up">
              <q-card style="width: 400px; max-width: 80vw;">
                <!-- category section -->
                <q-card-section>
                  <q-btn-dropdown auto-close stretch flat label="Category" class="dd dd-category q-pa-sm">
                <q-list >
                  <q-item v-for="category in categories" tag="label" v-ripple class="q-pr-xl">
                    <q-item-section avatar>
                      <q-radio v-model="categorySelection" :val="category.value" color="teal" ></q-radio>
                    </q-item-section>
                     <q-item-section>
                        <q-item-label>{{category.name}}</q-item-label>
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
                          dense class="price-input_field"
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
                          dense class="price-input_field"
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
                        <q-slider v-model="locationRange" :disable="noLimit" :min="0" :max="50" color="teal"></q-slider>
                      </q-item>
                      <q-item>
                        <q-item-section><q-checkbox v-model="noLimit" label="No Limit" color="teal" ></q-checkbox></q-item-section>
                      </q-item>
                </q-card-section>
                <!-- done section -->
                <q-card-section>
                  <q-item>
                        <q-btn flat color="teal">Done</q-btn>
                      </q-item>
                </q-card-section>
              </q-card>
            </q-dialog>
            <!-- Filter UI END -->
          </q-tabs>
          <q-separator ></q-separator>
          <q-tab-panels v-model="tab" animated>
            <q-tab-panel name="enterprise">
              <div class="list-card_container">

              </div>
            </q-tab-panel>

            <q-tab-panel name="quotation">
              <div class="text-h6">Alarms</div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </q-tab-panel>
  
            <q-tab-panel name="bought">
              <div class="text-h6">Movies</div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </q-tab-panel>
          </q-tab-panels>
        </q-card>
        </div>
  </div>
</template>
<script>
import { mapState, mapGetters } from "vuex";
export default {
  name: "SSearch",
  data() {
    return {
      tab: "enterprise",
      searchPopout: false,
      searchBox: '',
      text: '',
      categorySelection:"all",
      categories: [
        {name:'All categories', value:'all'},
        {name:'Electornics', value:'electronic'},
        {name:'Food', value:'food'},
        {name:'Driver', value:'driver'}
      ],
      filter: false,
      minPrice: Number,
      maxPrice: Number,
      locationRange: 0,
      noLimit: false
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
  .search-extension
    width 100%
    height 100%
    position absolute
    top 90% 
    left 0
    border none
    .my-card
      border-radius 0px
  
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
</style>