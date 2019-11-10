 <template>
  <div class="notification-container">
    <div v-show="newNotification" class="notification-dot" height="20" width="20"></div>
    <q-btn @click="notificationBox = !notificationBox" flat round dense class="icon-notification" icon="notifications_none" count="5">
      <q-tooltip color="secondary" anchor="bottom middle" self="top middle" :offset="[10, 10]">
        <strong>Notification</strong>
      </q-tooltip>
    </q-btn>
    <div :class="{notiBoxActive:notificationBox}" class="notification-box">
      <q-card class="container-card" label="Notification">
        <q-card-section class="text-black">
          <div class="usr-info"><img src="../statics/boy-avatar.png" alt="usr-img"> <p>Riwat Rai</p></div>
          <div class="notifi-title"></div>
          <div class="notifi-info_txt"></div>
          <div class="notifi-info_footer"></div>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>
<script>
import { mapState, mapGetters } from "vuex";
export default {
  name: "SNotification",
  data() {
    return {
      newNotification: true,
      notificationBox: false
    };
  },
  computed: {}
};
</script>
<style lang="stylus" scoped>
@import "..\css\layouts-style\header.styl";
  .notification-box
    width 80vw
    height 100%
    position absolute
    right -90px
    top 54px
    display none
    .container-card
      border-radius 0
      .usr-info
        img
          width 60px
          height 60px
  .notiBoxActive
    display block
    animation notiInAnimation 500ms ease forwards

@keyframes notiInAnimation{
    0%{
      display: block;
      top:0;
      opacity:0;
    }
    100%{
      opacity:1;
      top:70px;
    }
  }
</style>