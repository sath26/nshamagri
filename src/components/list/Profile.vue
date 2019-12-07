<template>
  <q-layout view="hHh LpR lFf">
    <q-page-container>
      <s-header></s-header>
<<<<<<< HEAD
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
            <!-- Profile card ~ #01 -->
                <div id="enterprise-profile_card" class="q-pa-xl">
                      <div class="card-banner">
                        <div class="avatar">
                          <img class="usr-img" src="statics/parallax2.jpg" /> 
                          <div class="img-edit">
                            <a href="#">Change</a>
                            <a href="#">Delete</a>
                          </div>
                          <div class="usr-name_responsive">
                            <h4>Saugat Thapa</h4>
                          </div>
                        </div>
                        <div class="card-quick_info">
                          <h3>Saugat enterprise</h3>
                          <ul class="info-content">
                            <li><div class="info-box"><div class="info-head">Quotation</div><div class="info-count text-h5">200</div></div></li>
                            <li><div class="info-box"><div class="info-head">Invoice</div><div class="info-count text-h5">120</div></div></li>
                            <li><div class="info-box"><div class="info-head">Customer</div><div class="info-count text-h5">35</div></div></li>
                          </ul>
                        </div>
                    </div>
                    <!-- profile-detail card -->
                    <q-card class="shadow-2 q-mt-lg details-card_container">
                      <q-card-section class="details-card_title row">
                        <div class=" text-teal-5 q-ml-xl col">Profile details</div>
                        <a href="/" target="_blank" class="col"><img src="statics\icons\edit-btn_icon.png" alt="edit button icon"></a>
                      </q-card-section>
                    <div class="card-body">
                      <ul class="info-list">
                        <li><q-icon name="email"></q-icon> Email  &nbsp; saugathapa@gmail.com </li> 
                        <li class="col"><q-icon name="phone"></q-icon> Phone  &nbsp; +1 123-456-7890 </li>
                        <li class="col"><q-icon name="place"></q-icon> Address &nbsp; Kathmandu, Nepal </li>
                        <li class="col"><q-icon name="note"></q-icon> Vat number &nbsp;223 049 023 </li>
                      </ul>
                        <div class="social_media-icons">
                          <a href="/" target="_blank"><img src="statics\icons\facebook.svg" alt="Facebook icon"> Saugat Fb</a>
                          <a href="/" target="_blank"><img src="statics\icons\linkedin.svg" alt="Linkedin icon"> Linkden Saugat</a>
                          <a href="/" target="_blank"><img src="statics\icons\twitter.svg" alt="Twitter icon"> @saugatTwit</i></a>
                      </div>
                    </div>
                    </q-card>
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
=======

      <div class="profile-background_img_container">
        <img src="../../assets/img/Profile-bg_graphics.png" alt="profile background image" />
      </div>
      <!-- Profile card ~ #01 -->
      <div id="enterprise-profile_card" class="q-pa-xl">
        <div class="card-banner">
          <div class="avatar">
            <img class="usr-img" src="statics/parallax2.jpg" />
            <div class="img-edit">
              <a href="#">Change</a>
              <a href="#">Delete</a>
            </div>
          </div>
          <div class="card-quick_info">
            <h3>Saugat enterprise</h3>
            <ul class="info-content">
              <li>
                <div class="info-box">
                  <div class="info-head">Quotation</div>
                  <div class="info-count text-h5">200</div>
                </div>
              </li>
              <li>
                <div class="info-box">
                  <div class="info-head">Invoice</div>
                  <div class="info-count text-h5">120</div>
                </div>
              </li>
              <li>
                <div class="info-box">
                  <div class="info-head">Customer</div>
                  <div class="info-count text-h5">35</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <!-- profile-detail card -->
        <q-card class="shadow-1 q-mt-lg">
          <q-card-section>
            <div class="text-h4 text-teal-5 q-ml-xl">Profile details</div>
          </q-card-section>
          <div class="card-body">
            <ul class="info-list">
              <li class="col">
                <q-icon name="email"></q-icon>nexus.saugat26@gmail.com
              </li>
              <li class="col">
                <q-icon name="phone"></q-icon>+1 123-456-7890
              </li>
              <li class="col">
                <q-icon name="place"></q-icon>Kathmandu, Nepal
              </li>
              <li class="col">
                <q-icon name="note"></q-icon>223 049 023
              </li>
            </ul>
>>>>>>> 586d852484ef1d5f67ab8e0b9bca74b0d779d159
          </div>
        </q-card>
        <!-- <div class="card-footer">
          <div class="social_media-icons">
            <a href="/" target="_blank">
              <img src="statics\icons\facebook.svg" alt="Facebook icon" />
            </a>
            <a href="/" target="_blank">
              <img src="statics\icons\linkedin.svg" alt="Linkedin icon" />
            </a>
            <a href="/" target="_blank">
              <img src="statics\icons\twitter.svg" alt="Twitter icon" />
            </a>
          </div>
        </div> -->
      </div>
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
      subTab: "profileInfo",
      email: "nexus.saugat26@gmail.com"
    };
  },
  computed: {
    // ...mapGetters("layoutDemo", ["view"])
  }
};
</script>

<style lang="stylus" scoped>
<<<<<<< HEAD
.footer-btn 
  border-radius 0
  color #41aaa8
  background #fafafa
#me-card, #enterprise-profile_card 
  background $primary-white
  margin 0 auto
.tab-me, .tab-enterprise 
  background $tab-color 
.profile-background_img_container
  width 100%
  position absolute
  z-index 10
  overflow hidden
  img
   width 98.5%
   height 350px
   border-radius 5px   
#enterprise-profile_card
  width 100%
  height 100%
  margin-top 3%
  position relative
  z-index 15
  .card-banner
    display flex
    flex-direction row
    flex-wrap wrap
.usr-name_responsive
  text-align center
  display none
  h4
    padding 0
    margin 0
.usr-img
  width 300px
  height 300px
  box-shadow 0px 0px 7px rgba(0,0,0, .3)
.details-card_container
  width 60%
.details-card_title
  font-size 2.5vw
  padding 20px 0 0 0
  a
    img
      margin-right 20px
      float right
      width 40px
      height 40px
.card-quick_info
    text-align center
    margin-left 20px
    align-self flex-end

  h3
    font-size 2rem
    padding 0
    margin 0
    float left
.info-content
  width 100%
  padding 0
  display inline
  list-style none   
  li
    font-size 1.2rem
    display inline
    padding-left 210px
    .info-box
      display inline-block
.card-banner
	height 100%
	width 100%
  background-size cover
	background-position center
.img-edit
  text-align center
  a
   text-decoration none
   margin 0 20px 
.card-body
  width 100%
  margin 0 auto
  padding 0 0 20px 0 
  .info-list
    width 90%
    display inline-block
    li
     font-size 1.5vw
     padding 18px 0px
     list-style none
     position relative
     .edit-btn
      color #40bfc1
      cursor pointer
      opacity .5
      position absolute
      top 22%
      right 0%
      &:hover
       opacity 1
  .address-info
    width 350px
  a
    display block
    padding 5px 0px
    font-size 1.8em
    color #9E9E9E
    text-decoration none
    webkit-transition .1s ease-in-out
    transition .1s ease-in-out
    &:hover
      color inherit
 
  .social_media-icons
    text-align left
    position relative
    top 25%
    a 
      width 40%
      padding-bottom 25px
      margin auto 38px 
      font-size 1.5vw
    img
      width 40px
      height 40px
      transform translateY(10px)  

@media screen and (max-width: 1473px)
  .card-banner
    justify-content center
    flex-direction column
    .card-quick_info
      display none
  .details-card_container
    width 100%
  .usr-name_responsive
    display block
=======
.footer-btn {
  border-radius: 0;
  color: #41aaa8;
  background: #fafafa;
}

#me-card, #enterprise-profile_card {
  background: $primary-white;
  margin: 0 auto;
}

.tab-me, .tab-enterprise {
  background: $tab-color;
}

.profile-background_img_container {
  width: 100%;
  position: absolute;
  z-index: 10;
  overflow: hidden;

  img {
    width: 98.5%;
    height: 350px;
    border-radius: 5px;
  }
}

#enterprise-profile_card {
  width: 100%;
  height: 100%;
  margin-top: 3%;
  position: relative;
  z-index: 15;

  .card-banner {
    display: flex;
    flex-wrap: nowrap;
  }
}

.usr-img {
  width: 300px;
  height: 300px;
  box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.3);
}

.card-quick_info {
  text-align: center;
  align-self: flex-end;
  margin-left: 20px;
}

h3 {
  font-size: 2rem;
  padding: 0;
  margin: 0;
  float: left;
}

.info-content {
  width: 100%;
  padding: 0;
  display: inline;
  list-style: none;

  li {
    font-size: 1.2rem;
    display: inline;
    padding-left: 210px;

    .info-box {
      display: inline-block;
    }
  }
}

.card-banner {
  height: 100%;

  width 100% {
    background-size: cover;
  }

  background-position: center;
}

.img-edit {
  text-align: center;

  a {
    text-decoration: none;
    margin: 0 20px;
  }
}

.card-body {
  width: 100%;
  margin: 0 auto;
  padding: 20px;

  .info-list {
    width: 90%;
    display: inline-block;

    li {
      font-size: 2em;
      padding: 18px 0px;
      list-style: none;
      position: relative;

      .edit-btn {
        color: #40bfc1;
        cursor: pointer;
        opacity: 0.5;
        position: absolute;
        top: 22%;
        right: 0%;

        &:hover {
          opacity: 1;
        }
      }
    }
  }

  .address-info {
    width: 350px;
  }

  a {
    display: block;
    padding: 5px 0px;
    font-size: 1.8em;
    color: #9E9E9E;
    text-decoration: none;
    webkit-transition: 0.1s ease-in-out;
    transition: 0.1s ease-in-out;

    &:hover {
      color: inherit;
    }
  }
}

.card-footer {
  width: 100%;
  height: 80px;
}

.social_media-icons {
  text-align: center;
  position: relative;
  top: 25%;

  a {
    margin: auto 35px;
  }
}

.card-footer .social_media-icons img {
  width: 40px;
  height: 40px;
  vertical-align: -50%;
  webkit-transition: all 0.11s ease-in-out;
  transition: all 0.11s ease-in-out;

  &:hover {
    transform: scale(1.5);
  }
}
>>>>>>> 586d852484ef1d5f67ab8e0b9bca74b0d779d159
</style>


