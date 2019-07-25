 <template>
    <div>
      <q-toolbar class="navbar">
          <img src="\assets\logo\logo-sm.svg" alt="Shamagri Logo" class="shamagri-logo q-px-sm q-py-xs">
          <q-toolbar-title>Shamagri</q-toolbar-title>
         <q-btn outline color="secondary" class="q-mr-sm" to="/login">Login</q-btn>
      </q-toolbar>
    </div>
</template>
<script>
import { mapState, mapGetters } from "vuex";
export default {
  data() {
    return {

    };
  },
  computed: {
    header: {
      get() {
        return this.$store.state.layoutDemo.header;
      },
      set(val) {
        this.$store.commit("layoutDemo/setHeader", val);
      }
    },
    // ...mapGetters("layoutDemo", ["view"]),

    ...mapState("layoutDemo", [
      "headerReveal",
      "leftOverlay",
      "leftBehavior",
      "leftBreakpoint",
      //'rightOverlay', 'rightBehavior', 'rightBreakpoint',
      "scrolling"
    ])
  }
};
</script>
<style lang="stylus" scoped>
 
</style>

 

