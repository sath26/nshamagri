/* 
sell will be fixed icon

 */
<template>
  <!-- footer content -->
  <!-- <q-layout-footer v-model="footer"> -->
  <!-- <q-layout-footer class="row justify-center"> -->
  <!-- <q-btn label="Buy" @click="clickHandler1"/> -->
  <!-- <q-btn size="lg" label="Buy" push class="col-6 footer-btn"/> -->
  <!-- <q-btn size="lg" label="Sell" push class="col-6 footer-btn"/> -->
  <!-- </q-layout-footer> -->
  <div>
    <q-page-sticky expand position="bottom-right" :offset="[18, 18]">
      <q-btn
        fab-mini
        color="secondary"
        icon="add"
        class="animate-pop"
        to="/invoice"
        @click="icon = true"
      />
    </q-page-sticky>
    <!-- <q-dialog v-model="icon">
      <q-card>
        <q-toolbar class="row items-center">
          <q-toolbar-title>Create invoice</q-toolbar-title>
          
          <q-btn icon="close" flat round dense v-close-popup />
        </q-toolbar>

        <q-card-section>
          <div class="q-pa-lg">
            <q-option-group v-model="group" :options="options" />
          </div>
        </q-card-section>
        <q-card-actions align="right">
          <q-btn flat :to="group">Next</q-btn>
        </q-card-actions>
      </q-card>
    </q-dialog> -->
  </div>
</template>
<script>
export default {
  name: "SFooter",
  data() {
    return {
      icon: false,
      group: "op1",
      options: [
        {
          label: "Goods",
          value: "/choose_good"
        },
        {
          label: "Services",
          value: "/choose_service"
        },
       
      ]
    };
  }
};
</script>

<style lang="stylus">
.footer-btn {
  border-radius: 0;
  color: #41aaa8;
  background: #fafafa;
}
</style>

