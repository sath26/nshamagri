<template>
  <div>
     <q-btn-dropdown color="secondary text-white" label="Create" flat>
      <q-list >
        <q-item clickable  v-close-popup @click="onItemClick">
          <q-item-section>
            <q-item-label >Goods</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-close-popup @click="onItemClick">
          <q-item-section>
            <q-item-label>Service</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-close-popup @click="onItemClick">
          <q-item-section>
            <q-item-label>Measurement</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-btn-dropdown>
    </div>
</template>
<script>
export default {
    name:"SCreate",
     methods: {
    onItemClick () {
      console.log('Clicked on an Item')
    }
  }
};
</script>

