<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "App"
};
</script>

<style>
  /* @import './css/app.styl'; */
  body {
    background: #fafafa;
  }
</style>
