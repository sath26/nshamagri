<template>
  <q-layout view="hHh LpR lFf">
    <q-page-container>
      <s-header></s-header>
      <q-tabs v-model="tab" animated  active-color="secondary"
            indicator-color="secondary" align="justify">
        <!-- <q-tab default name="me" slot="section" icon="mail" label="me" /> -->
        <q-tab class="q-pa-sm" name="enterprise" label="enterprise" />
        <q-tab class="q-pa-sm" name="member" label="members" />
      </q-tabs>
      <q-separator />
      <q-tab-panels  v-model="tab" animated class="bg-grey-1">
         <q-tab-panel name="enterprise">
              <div class="profile-background_img_container">
                <img src="../../assets/img/Profile-bg_graphics.png" alt="profile background image">
              </div>
             <div class="profile-content">
            <!-- Contact Card ~ #01 -->
                <div id="enterprise-profile_card">
                    <div class="card-banner">
                        <div class="avatar"><img src="statics/parallax2.jpg" /></div>
                    </div>
                    <div class="card-quick_info">
                        <h3>Saugat enterprise</h3>
                        <ul class="info-content">
                          <li>Quotation <span>200</span></li>
                          <li>Invoice <span>120</span></li>
                          <li>Customer <span>30</span></li>
                        </ul>
                    </div>
                    <q-separator></q-separator>
                    <div class="edit-btn_container">
                      <q-btn class="edit-btn ">Edit info</q-btn>
                    </div>
                    <div class="card-body">
                      <a href="/"><q-icon name="email"></q-icon> cabrown96@live.com</a>
                      <a href="/"><q-icon name="phone"></q-icon> +1 123-456-7890</a>
                      <div class="address-info row">
                        <a class="col" href="/"><q-icon name="place"></q-icon> Kathmandu, Nepal</a>
                        <q-btn flat class="col text-red-6" >Locate on map</q-btn>
                      </div>
                      <a href="/"><q-icon name="note"></q-icon> 223 049 023</a>
                    </div>
                    
                    <div class="card-footer">
                      <div class="social_media-icons">
                          <a href="/" target="_blank"><img src="statics\icons\facebook.svg" alt="Facebook icon"></a>
                          <a href="/" target="_blank"><img src="statics\icons\linkedin.svg" alt="Linkedin icon"></a>
                          <a href="/" target="_blank"><img src="statics\icons\twitter.svg" alt="Twitter icon"></i></a>
                      </div>
                    </div>
                </div>
                
          </div>
        </q-tab-panel>
  <!-- Member profile panel -->
          <q-tab-panel name="member">
          <div style="width: 500px; max-width: 90vw;" class="q-mx-auto">
            <q-card inline class="bigger q-ma-sm">
              <img src="statics/parallax2.jpg" />

              <q-card-section class="relative-position">
                <div class="ellipsis">Saugat Thapa</div>
              </q-card-section>
              <q-card-section>
                <q-btn flat>
                  <q-icon name="phone" />9860181513
                </q-btn>
              </q-card-section>
            </q-card>
          </div>
        </q-tab-panel>
      </q-tab-panels>
    </q-page-container>
  </q-layout>
</template>
<script>
//consists of me and enterprise
import SHeader from "../../layouts/Header";
import SFooter from "../../layouts/Footer";
import GINVOICE from "./Invoice_good";
import { mapState, mapGetters } from "vuex";
export default {
  components: {
    SHeader,
    SFooter,
    GINVOICE
  },
  data() {
    return {
      tab: "enterprise",
      subTab: "profileInfo"
    };
  },
  computed: {
    // ...mapGetters("layoutDemo", ["view"])
  }
};
</script>

<style lang="stylus" scoped>
.footer-btn 
  border-radius 0
  color #41aaa8
  background #fafafa
#me-card, #enterprise-profile_card 
  background $primary-white
  margin 0 auto

.tab-me, .tab-enterprise 
  background $tab-color
.profile-content
  margin 5% auto
  width 800px
  background transparent
  position relative
  z-index 15
.profile-background_img_container
  width 100%
  position absolute
  z-index 10
  img
   width 98.5%
#enterprise-profile_card
  color #424242
  overflow hidden
	border-radius 15px
	text-align center
  display block
.avatar
  width 100%
  text-align center
 img
  width 400px
  height 400px
.card-banner
	height 100%
	width 100%
  background-size cover
	background-position center
.avatar
  img
   border-radius 3px
   border 5px solid #fafafa
.edit-btn_container
  text-align center
  margin-top 10px
.card-body
  width 50%
  margin 0 auto
  padding 20px
  .address-info
    width 350px
  a
    display block
    padding 5px 0px
    font-size 14px
    color #9E9E9E
    text-decoration none
    webkit-transition .1s ease-in-out
    transition .1s ease-in-out
    &:hover
      color inherit
    // a 
    //  padding 20px
     
.card-footer 
  width 100%
  height 80px
 .social_media-icons
   text-align center
   position relative
   top 25%
   a 
    margin auto 35px
.card-footer .social_media-icons img 
  width 40px
  height 40px 
  vertical-align -50%
  webkit-transition all .11s ease-in-out 
  transition all .11s ease-in-out 
  &:hover
   transform scale(1.5)
.card-quick_info
    text-align center
  h3
    font-size 2rem
    padding 0
    margin 0
  ul
    list-style none
    li
     font-size 1.2rem
     display inline
     margin-left 21px
.info-content
  padding 0
  
</style>


