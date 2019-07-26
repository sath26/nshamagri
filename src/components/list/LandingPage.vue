 <template>
    <div>
      <q-toolbar class="navbar">
          <img src="\assets\logo\logo-sm.svg" alt="Shamagri Logo" class="shamagri-logo q-px-sm q-py-xs">
          <q-toolbar-title class="text-title">Shamagri</q-toolbar-title>
         <q-btn outline color="white" class="q-mr-sm" to="/login">Login</q-btn>
      </q-toolbar>
    </div>
</template>
<script>
export default {
  data() {
    return {
    };
  }
};
</script>
<style lang="stylus" scoped>
  @import '..\..\css\components-style\landing-page.styl'
  // @import '..\src\css\layouts-style\header.styl'

</style>

 
