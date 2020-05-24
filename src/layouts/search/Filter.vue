<template>
    <div class="filter-container">
        <!-- category filter -->
          <div class="filter-category">
            <q-btn-dropdown
                  auto-close
                  flat
                  :label="categorySelection"
                  class="dd dd-category q-pa-sm full-width"
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
          <q-separator></q-separator>
          <div class=" filter-distance q-my-lg">
              <div class="text-h6 q-mb-sm">Distance</div>
              <q-badge outline color="white" class="q-mb-lg q-pa-sm">
                {{ distance.min }}km to {{ distance.max }}km
              </q-badge>
            <!-- slider -->
            <q-range
              v-model="distance"
              :min="0"
              :max="100"
              :step="4"
              label
              color="white"
              dense
              dark
              :disable="noLimit"
            ></q-range>
            <div class="q-mt-sm">
              <q-checkbox
                  dark
                  v-model="noLimit"
                  label="No Limit"
                  color="orange">
                </q-checkbox>
            </div>
          </div>
          <q-separator></q-separator>
          <!-- price filter minimum and maximum -->
          <div class=" filter-price q-my-lg">
              <div class="text-h6 q-mb-sm">Price</div>
            <div class="filter-price_subcontainer  relative-position">
              <div class="filter-price-min">
              <q-input
                    debounce="500"
                    dark
                    color="white"
                    v-model.lazy="minPrice"
                    type="number"
                    label="Min price"
                    dense
                    class="price-input_field"
                  ></q-input>
              </div>
                  <div class="filter-price-max">
                    <q-input
                    debounce="500"
                    dark
                    color="white"
                    v-model.lazy="maxPrice"
                    type="number"
                    label="Max price"
                    dense
                    class="price-input_field"
                  ></q-input>
                  </div>
            </div>
          </div>
         <!-- done button -->
         <q-btn class="full-width q-mt-lg" dark color="white" text-color="grey-9" unelevated>filter</q-btn>
        <!-- end tab filter -->
    </div>
</template>
<script>
export default {
    name: "FFilter",
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
            }
        };
    }
}
</script>
<style >
    .filter-container{
        width:100%;
        height:100%;
        padding: 10px;        
    }
</style>