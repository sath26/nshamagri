 <template>
    <div>
      <q-toolbar class="navbar">
          <div class="logo-container">
            <img src="\assets\logo\logo-sm.svg" alt="Shamagri Logo" class="shamagri-logo vertical-middle q-pa-xs">
          </div>
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

 
