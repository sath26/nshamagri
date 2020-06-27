<template>
  <div>
     <q-btn-dropdown color="secondary text-white" label="Create" flat>
      <q-list v-for="(createItem, index) in createList" :key="index">
        <q-item clickable  :to="createItem.route" v-close-popup @click="onItemClick">
          <q-item-section>
            <q-item-label>{{ createItem.label }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-btn-dropdown>
    </div>
</template>
<script>
export default {
    name:"SCreate",
    data(){
      return  {
        createList:[
          {
            label:"Quotation",
            route:"/add/quotation"
          },
          {
            label:"Category",
            route:"/category"
          },
          {
            label:"Unit",
            route:"/unit"
          }
        ]
      }
    },
    methods: {
      onItemClick () {
        console.log('Clicked on an Item')
      }
  }
};
</script>

