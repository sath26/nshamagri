<template>
  <div class="filter-container">
    <!-- category filter -->
    <div class="filter-category">
      <div class="row no-wrap">
        <q-toolbar class="col-8 flat text-teal-7">
          <q-toolbar-title class="text-h5">Filters</q-toolbar-title>
        </q-toolbar>
        <q-toolbar class="col-4">
          <q-list>
            <q-item clickable class="filter-reset-btn text-red-8">
              <q-item-section class="filter-reset-btn-icon" avatar>
                <img
                  class="side-menu-icon"
                  src="statics/icons/reset-icon.svg"
                />
              </q-item-section>
              <q-item-section class="text-teal-6">Reset</q-item-section>
            </q-item>
          </q-list>
        </q-toolbar>
      </div>
    </div>
    <!-- distance filter slider -->
    <q-separator></q-separator>
    <div class=" filter-distance q-my-lg">
      <div class="text-h6 q-mb-sm text-teal-5">Distance</div>
      <q-badge outline color="teal" class="q-mb-lg q-pa-sm">
        {{ distance.min }}km to {{ distance.max }}km
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
        light
        :disable="noLimit"
      ></q-range>
      <div class="q-mt-sm">
        <q-checkbox
          light
          class="text-teal"
          v-model="noLimit"
          label="No Limit"
          color="teal"
        >
        </q-checkbox>
      </div>
    </div>
    <q-separator></q-separator>
    <!-- price filter minimum and maximum -->
    <div class=" filter-price q-my-lg">
      <div class="text-h6 q-mb-sm text-teal-5">Price</div>
      <div class="filter-price_subcontainer  relative-position">
        <div class="filter-price-max">
          <q-input
            debounce="500"
            light
            color="teal"
            v-model.lazy="maxPrice"
            type="number"
            label="Max price"
            dense
            class="price-input_field"
          ></q-input>
        </div>
        <div class="filter-price-min">
          <q-input
            debounce="500"
            light
            color="teal"
            v-model.lazy="minPrice"
            type="number"
            label="Min price"
            dense
            class="price-input_field"
          ></q-input>
        </div>
      </div>
    </div>
    <!-- done button -->
    <q-btn
      class="full-width q-mt-lg"
      color="teal"
      text-color="grey-1"
      unelevated
      label="find it now"
    ></q-btn>
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
      distance: {
        min: 0,
        max: 100
      }
    };
  }
};
</script>
<style lang="stylus" scoped>

.filter-container
  width 100%
  height 100%
  padding 2.1rem
  .filter-reset-btn
    &-icon
      min-width 28px
      padding 0 
</style>
