<template>
 <div class="docs-input justify-center add-good-form_container">
    <p class="q-display-1 form-title_txt">Add Goods</p>
    <q-btn color="negative" @click="newGoodToggler =! newGoodToggler" label="X" class="q-mb-xl q-ma-sm fixed-top-right absolute-top-right"/>
    <q-input dark color="secondary" v-model="title" float-label="Product Title"/>
    <q-select dark
      v-model="selectedCategory"
      float-label="Category"
     :options="selectCategory"
     color="secondary"
    />
    <q-input dark v-model="title" float-label="Product Title"/>
    <q-input dark v-model="title" float-label="Product Title"/>
    <q-input dark v-model="title" float-label="Product Title"/>
    <q-input dark v-model="title" float-label="Product Title"/>
 </div>               
</template>
<script>
export default {
  data(){
    return{
      selectCategory:[
        {
          label: 'Food',
          value: 'food'
        },
        {
          label: 'Beverage',
          value: 'bever'
        },
        {
          label: 'Clothing',
          value: 'cloth'
        },
      ],
      selectedCategory: NaN
    }
  },
    computed: {
    newGoodToggler:{
       get() {
        return this.$store.state.layoutDemo.toggleNewGood;
      },
      set(val) {
        this.$store.commit("layoutDemo/setToggleAddGood", val);
      }
    }
  }
}
</script>
<style lang="stylus">
    .form-title_txt
      color white
</style>


