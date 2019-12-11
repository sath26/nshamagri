<template>
  <q-layout view="hHh LpR lFf">
    <q-page-container>
      <s-header></s-header>

      <q-card class="profile-background_img_container">
        <img src="../../assets/img/Profile-bg_graphics.png" alt="profile background image" />
      </q-card>
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
          <q-card-section class="row">
            <div class="text-h4 text-teal-5 q-ml-xl col">Profile details</div>
            <div class="col edit-btn_container">
              <q-btn flat color="teal" class="float-right" icon="edit">Edit</q-btn>
            </div>
          </q-card-section>
          <div class="card-body">
            <ul class="info-list">
              <li class="col">
                <q-icon name="email" class="profile-detail_icon"></q-icon>nexus.saugat26@gmail.com
              </li>
              <li class="col">
                <q-icon name="phone" class="profile-detail_icon"></q-icon>+1 123-456-7890
              </li>
              <li class="col">
                <q-icon name="place" class="profile-detail_icon"></q-icon>Kathmandu, Nepal
              </li>
              <li class="col">
                <q-icon name="note" class="profile-detail_icon"></q-icon>223 049 023
              </li>
            </ul>
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
calcFont = calc(1vw + 1vh + .5vmin)

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
  z-index: 10;
  position: absolute;
  overflow: hidden;
  img {
    width: 100vw;
    height: 350px;
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
  font-size: calcFont;
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
    display: inline;
    padding-left: 210px;
    .info-box {
      display: inline-block;
      .info-head{
        font-weight: 500;
        font-size: 'calc(%s - 15px)' % calcFont;
      }
      .info-count{
        font-size: 'calc(%s - 10px)' % calcFont;
      }
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
      font-size: 'calc(%s - 5px)' % calcFont;;
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
.profile-detail_icon
  color #5BBF92
  margin-right 20px

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
</style>


