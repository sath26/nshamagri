 <template>
    <div class="container">
      <q-toolbar class="navbar">
          <div class="logo-container">
            <img src="\assets\logo\logo-sm.svg" alt="Shamagri Logo" class="shamagri-logo vertical-middle q-pa-xs">
          </div>
          <q-toolbar-title class="text-title">Shamagri</q-toolbar-title>
         <q-btn outline color="white" class="q-mr-sm" to="/login">Login</q-btn>
      </q-toolbar>
      <div class="intro-section">
        <div class="intro-text q-px-lg">
          <h5>your <span>business</span> our assist</h5>
          <p>Welcome to Shamagri, a simple resource management app <br class="p-breaker"> 
developed to help grow and maintain all businesses <br class="p-breaker"> and fulfil all customer needs. </p>
            <div class="get-started">
              <div class="text-caption sub-header">Try Shamagri for free!</div>
              <div class="email-submit row q-my-lg">
                <q-input filled v-model="text" dark color="white" class="col q-mr-sm email-input" label="E-mail Address"></q-input><q-btn class="col-4 shadow-1" label="Get Started" color="teal-5"></q-btn>
              </div>
            </div>
        </div>
        <img src="\assets\img\Landing-page-bg.png" class="web-bg_img" alt="Background-img-1">
        <img src="\assets\img\devices-graphics@2x.png" class="devices_img" alt="Background-img-1">
        <img src="\assets\img\landing-page-mobile-bg.png" class="mobile-bg_img" alt="Background-img-1">
      </div>
      <div class="footer-nav">
            <div class="contact-info">
                   <div class="chip"><q-icon name="place"></q-icon> Address</div>
                   <div class="chip"><q-icon name="phone"></q-icon> Phone number</div>
                   <div class="chip"><q-icon name="email"></q-icon> E-mail</div>
            </div>
            <ul class="footer-nav-items_list">
              <li>Terms and Condition</li>
              <li>Privacy</li>
              <li>FAQ</li>
              <li>Support</li>
            </ul>
      </div>
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
  .web-bg_img
    width 100%
  .mobile-bg_img
    width 100%
  .devices_img
    width 30%
    position absolute 
    top 23vw
    right 5%
  .intro-text
    position absolute
    top 150px
    left 200px
    color #fafafa
    .get-started
      position relative
      top 10px
      .sub-header
        position absolute
        top -35%
    h5
      font-size 3vw
      padding 0
      text-transform uppercase
      font-weight 500
      line-height 0
      span 
        color #FFE45C
    p
      font-size 2vw
      line-height 1.2
      margin-top -5%
  .intro-section 
    min-height 100%
  .footer-nav
    width 100%
    background #35947A
    position relative
    bottom 0
    .contact-info
      width 60%
      padding 20px
      background #29705d
      margin 0 auto 
      text-align center
      .chip
        color #fafafa
        display inline
        padding 20px
    .footer-nav-items_list
      margin 0 
      padding 20px
      list-style none
      text-decoration none
      li 
        color #fafafa
@media screen and (max-width: 1140px) {
  .intro-text {
    top: 100px;
    left: 60px;
  }
}
@media screen and (max-width: 850px)
  .web-bg_img
    height 40vh
  .devices_img
    width 60%
    top 40%
    right 22%
  .intro-text
    width 80%
@media screen and (min-width: 565px)
  .mobile-bg_img
    display none
@media screen and (max-width: 564px)
  .web-bg_img
    display none
  .devices_img
    width 80%
    margin 0 auto
    text-align center
    top 30%
    right 10%
  .intro-text
    .email-input
      width 70%
    .get-started
      position absolute
      top 500%
      left 18%
      .sub-header
        font-size 1.5em
        top 0
    p
      font-size 3vw
@media screen and (max-width: 650px)
  .intro-text
    top 10%
    left 3%
    h5
      font-size 4.5vw
    p
      font-size 3.5vw
    .p-breaker
      display none

</style>  

 
