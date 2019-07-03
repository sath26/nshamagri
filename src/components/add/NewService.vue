<template>
 <div class="docs-input justify-center add-service-form_container">
    <p class="q-display-1 form-title_txt">Add Goods</p>
    <q-btn color="negative" @click="newGoodToggler =! newGoodToggler" label="X" class="q-mb-xl q-ma-sm fixed-top-right absolute-top-right"/>
    <q-input dark color="secondary" v-model="title" float-label="Service Title"/>
    <q-select dark
      v-model="selectedCategory"
      float-label="Category"
     :options="selectCategory"
     color="secondary"
    />
    <q-input dark v-model="title" float-label="Service Title"/>
    <q-input dark v-model="title" float-label="Service Title"/>
    <q-input dark v-model="title" float-label="Service Title"/>
    <q-input dark v-model="title" float-label="Service Title"/>
 </div>               
</template>
<script>
export default {
  data(){
    return{
      selectCategory:[
        {
          label: 'Delivery',
          value: 'deliver'
        },
        {
          label: 'Security',
          value: 'secure'
        },
        {
          label: 'Fast Food',
          value: 'food'
        },
      ],
      selectedCategory: NaN
    }
  },
    computed: {
    newGoodToggler:{
       get() {
        return this.$store.state.layoutDemo.toggleNewService;
      },
      set(val) {
        this.$store.commit("layoutDemo/setToggleAddService", val);
      }
    }
  }
}
</script>
<style lang="stylus">
   @import "..\..\css\app.styl"
    .form-title_txt
      color white
    .add-service-form_container
        padding 40px
        width 100%
        height 100%
        background $primary-bg-color
</style>


