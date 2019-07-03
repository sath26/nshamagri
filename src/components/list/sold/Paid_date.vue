 <template>
 <q-tab-pane name="sellers">
    <q-page padding class="docs-table">
      <!-- <q-btn flat to="/enterprise_stock">Stock</q-btn> -->
      total: 25000
      Paid:20000
      Unpaid:5000
      <q-table :data="tableData" :columns="paid" row-key="name">
        <template slot="top-right" slot-scope="props">
          <q-search hide-underline v-model="filter" color="secondary"/>
        </template>

        <q-tr
          slot="body"
          slot-scope="props"
          :props="props"
          @click.native="$router.push({ path: '/invoice_good', query: {  } })"
          class="cursor-pointer"
        >
          <!-- <q-tr slot="body" slot-scope="props" :props="props" @click.native="$router.push({ path: '/invoice', query: { tripId: props.row._id } })" class="cursor-pointer" > -->
          <q-td key="invoice_id" :props="props">{{ props.row.name }}</q-td>

          <q-td key="total" :props="props">{{ props.row.total }}</q-td>
          <q-td key="unpaid" :props="props">
            {{ props.row.unpaid }}
            <!-- <q-chip small square color="amber">{{ props.row.unpaid }}</q-chip> -->
          </q-td>
        </q-tr>
      </q-table>
    </q-page>
  </q-tab-pane>
<template>
<script>
import tableData from "../../assets/table-data";
export default {
  
}
</script>

