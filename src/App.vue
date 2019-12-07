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
body {
  background: #fafafa;
}
</style>
