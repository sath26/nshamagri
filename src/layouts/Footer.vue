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
  <q-page-sticky expand position="bottom-right" :offset="[18, 18]">
    <q-btn fab-mini color="secondary" icon="add" class="animate-pop" to="/choose"/>
  </q-page-sticky>
</template>
<script>
export default {
  name: "SFooter"
};
</script>

<style lang="stylus">
.footer-btn {
  border-radius: 0;
  color: #41aaa8;
  background: #fafafa;
}
</style>

