 <template>
  <div class="notification-container">
    <div v-show="newNotification" class="notification-dot" height="20" width="20"></div>
    <q-btn flat round dense class="icon-notification" icon="notifications_none" count="5">
      <q-tooltip color="secondary" anchor="bottom middle" self="top middle" :offset="[10, 10]">
        <strong>Notification</strong>
      </q-tooltip>
    </q-btn>
  </div>
</template>
<script>
import { mapState, mapGetters } from "vuex";
export default {
  name: "SNotification",
  data() {
    return {
      newNotification: true
    };
  },
  computed: {}
};
</script>
<style lang="stylus" scoped>
@import "..\css\layouts-style\header.styl";
</style>