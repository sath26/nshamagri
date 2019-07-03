<template>
  <q-tab-pane name="buyers">
    <q-page padding class="docs-table">
      <!-- <q-btn flat to="/enterprise_stock">Stock</q-btn> -->
      total: 25000
      Paid:20000
      Unpaid:5000
      <q-list highlight>
        <q-item to="/bought">
          <q-item-side avatar="statics/boy-avatar.png"/>
          <q-item-main label="RajKumar Bogati Kirana Pasal" label-lines="1"/>
          <q-item-side right stamp="1 min"/>
        </q-item>
        <q-item>
          <q-item-side avatar="statics/guy-avatar.png"/>
          <q-item-main label="Pawan Kirana" label-lines="1"/>
          <q-item-side right stamp="3 min"/>
        </q-item>
        <q-item>
          <q-item-side avatar="statics/linux-avatar.png"/>
          <q-item-main label="Vaiya ko Furniture Pasal" label-lines="1"/>
          <q-item-side right stamp="1 hr"/>
        </q-item>
        <q-item>
          <q-item-side avatar="statics/mountains.jpg"/>
          <q-item-main label="RajKumar Bogati Kirana Pasal" label-lines="1"/>
          <q-item-side right stamp="1 day"/>
        </q-item>
      </q-list>
    </q-page>
  </q-tab-pane>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
