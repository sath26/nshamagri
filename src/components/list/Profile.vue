<template>
  <q-layout view="hHh LpR lFf">
    <q-page-container>
      <s-header></s-header>

      <q-tabs v-model="tab" animated  active-color="secondary"
            indicator-color="secondary" align="justify">
        <!-- <q-tab default name="me" slot="section" icon="mail" label="me" /> -->
        <q-tab name="enterprise" label="enterprise" />
        <q-tab name="member" label="members" />
      </q-tabs>
      <q-separator />
      <q-tab-panels v-model="tab" animated class="bg-grey-1">
         <q-tab-panel name="enterprise">
          <div style="width: 500px; max-width: 90vw;" class="q-mx-auto">
            <!-- Contact Card ~ #01 -->
                <div id="enterprise-profile_card">
                    <div class="card-banner">
                        <div class="avatar" ><img src="statics/parallax2.jpg" /></div>
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
                    <div class="card-body">
                      <a href="/"><q-icon name="email"></q-icon> cabrown96@live.com</a>
                      <a href="/"><q-icon name="phone"></q-icon> +1 123-456-7890</a>
                      <a href="/"><q-icon name="place"></q-icon> Kathmandu, Nepal</a>
                    </div>
                    <div class="card-footer">
                      <div class="social_media-icons">
                          <a href="/" target="_blank">Facebook</a>
                          <a href="/" target="_blank">Linkden</a>
                          <a href="/" target="_blank">Twitter</i></a>
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
    <s-footer></s-footer>
  </q-layout>
</template>
<script>
//consists of me and enterprise
import SHeader from "../../layouts/Header";
import SFooter from "../../layouts/Footer";
import { mapState, mapGetters } from "vuex";
export default {
  components: {
    SHeader,
    SFooter
  },
  data() {
    return {
      tab: "enterprise"
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
	padding-top 30px
	background-size cover
	background-position center
.card-body
  width 50%
  margin 0 auto
  padding 20px
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
.card-footer
  text-align center
 .social_media-icons
    margin-top 10px
    padding 15px 0px
    background-color #FAFAFA
    ,a 
      padding 10px
      display inline
      transition .1s ease-in-out      
      &:hover
        font-size 20px
.card-quick_info
  h3
    font-size 2rem
    text-align center
    padding 0
    margin 0
  ul
    list-style none
    li
     font-size 1.2rem
     display inline
     padding 0 20px
</style>


