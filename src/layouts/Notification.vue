 <template>
  <div class="notification-container">
    <div v-show="newNotification" class="notification-dot" height="20" width="20"></div>
    <q-btn @click="notificationBox = !notificationBox" flat round dense class="icon-notification" icon="notifications_none" count="5">
      <q-tooltip color="secondary" anchor="bottom middle" self="top middle" :offset="[10, 10]">
        <strong>Notification</strong>
      </q-tooltip>
    </q-btn>
    <div :class="{notiBoxActive:notificationBox}" class="notification-box shadow-8" >
      <q-card v-for="n in 10" class="container-card " label="Notification">
        <q-card-section class="text-black row">
          <div class="usr-info_img col-1"><img src="../statics/boy-avatar.png" alt="usr-img"> <p>Riwat Rai</p></div>
          <div class="txt-content col q-ml-xl">
            <div class="notifi-title"><h6>New message from Riwat Rai</h6></div>
            <div class="notifi-info_txt"><p>Hello, I want to discuss about the recent order that I've made
on December 1st....</p></div>
            <div class="notifi-info_footer"><p>example@gmail.com</p><p>05:40 pm </p></div>
          </div>
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
    width 60vw
    height 90vh
    position absolute
    right 0
    top 0
    display none
    overflow scroll
    transform translateY(-1.6%) 
    &::-webkit-scrollbar 
      width 0px
    .container-card
      border-radius 0
      .usr-info_img
        width 60px
        height 85px
        p
          margin 0
        img
          width 60px
          height 60px
      .txt-content
        h6
          margin 0
        p
          margin 0
        .notifi-info_footer
          font-size .7em
          float right
          p
            display inline-block
            &:nth-child(1)
              margin-right 30px
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