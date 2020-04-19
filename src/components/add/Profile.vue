<template>
  <q-layout view="hHh LpR lFf">
    <s-header></s-header>
    <q-page-container>
      <q-tabs
        v-model="tab"
        animated
        active-color="secondary"
        indicator-color="secondary"
        align="justify"
      >
        <!-- <q-tab default name="me" slot="section" icon="mail" label="me" /> -->
        <q-tab class="q-pa-sm" name="enterprise" label="enterprise" />
        <q-tab class="q-pa-sm" name="member" label="members" />
      </q-tabs>
      <q-separator />
      <!-- <q-tab-panels > -->
      <q-tab-panels v-model="tab" animated class="bg-grey-1">
        <q-tab-panel name="enterprise">
          <div class="profile-background_img_container">
            <img
              src="../../assets/img/Profile-bg_graphics.png"
              alt="profile background image"
            />
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
                      <div class="info-head">Customers</div>
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
                  <li>
                    <q-input
                      color="grey-10"
                      filled
                      label="Name"
                      v-model="enterprise[0].title"
                      @focus="focusOnEmail()"
                      @blur="focusOffEmail()"
                    >
                      <template v-slot:prepend>
                        <q-icon name="store" />
                      </template>
                      <template v-slot:append>
                        <q-btn
                          flat
                          v-if="done_email"
                          @click="renameEmail(enterprise[0].title)"
                        >
                          <q-icon name="done" />
                        </q-btn>
                      </template>
                    </q-input>
                  </li>
                  <li class="col">
                    <q-input
                      color="grey-10"
                      filled
                      label="Contact Number"
                      v-model="enterprise[0].contact_no"
                      @focus="focusOnContact()"
                      @blur="focusOffContact()"
                    >
                      <template v-slot:prepend>
                        <q-icon name="phone" />
                      </template>
                      <template v-slot:append>
                        <q-btn
                          flat
                          v-if="done_contact"
                          @click="renameContact()"
                        >
                          <q-icon name="done" />
                        </q-btn>
                      </template>
                    </q-input>
                  </li>
                  <li class="col">
                    <q-input
                      color="grey-10"
                      filled
                      label="PAN Number"
                      v-model="pan_no"
                      @focus="focusOnPanNo()"
                      @blur="focusOffPanNo()"
                    >
                      <template v-slot:prepend>
                        <q-icon name="subject" />
                      </template>
                      <template v-slot:append>
                        <q-btn flat v-if="done_pan_no" @click="renamePanNo()">
                          <q-icon name="done" />
                        </q-btn>
                      </template>
                    </q-input>
                  </li>
                  <!-- <li class="col">
                    <q-icon name="place"></q-icon>Kathmandu, Nepal
                    <span class="edit-btn">Edit</span>
                  </li>
                  <li class="col">
                    <q-icon name="note"></q-icon>223 049 023
                    <span class="edit-btn">Edit</span>
                  </li> -->
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
        </q-tab-panel>
        <q-tab-panel name="member" padding class="row justify-center">
          <div style="width: 500px; max-width: 90vw;" class="q-mx-auto">
            <!-- <q-card inline class="bigger q-ma-sm">
              <img src="statics/parallax2.jpg" />

              <q-card-section class="relative-position">
                <div class="ellipsis">Saugat Thapa</div>
              </q-card-section>
              <q-card-section>
                <q-btn flat>
                  <q-icon name="phone" />9860181513
                </q-btn>
              </q-card-section>
              </q-card>-->
            <q-list bordered separator class="q-mb-sm">
              <q-item multiline>
                <q-item-section label>Add Members</q-item-section>
                <q-item-section avatar>
                  <div class="group" style="text-align: center;">
                    <q-btn flat color="secondary">
                      <q-icon name="add" @click="medium = true"></q-icon>
                    </q-btn>
                  </div>
                </q-item-section>
              </q-item>
            </q-list>
            <q-list bordered hightlight>
              <q-item
                multiline
                v-for="member in members"
                v-bind:key="member.user_id"
              >
                <q-item-section avatar>
                  <q-avatar>
                    <img :src="user.photoUrl" alt="user" />
                  </q-avatar>
                </q-item-section>
                <q-item-section>{{ member.user_name }}</q-item-section>
              </q-item>
            </q-list>
            <q-dialog v-model="medium">
              <q-card style="width: 700px; max-width: 80vw;">
                <q-card-section>
                  <div class="text-h6">Add Member</div>
                </q-card-section>

                <q-card-section class="q-pt-none">
                  <q-input
                    color="grey-10"
                    filled
                    label="Enter Member Email"
                    v-model="member"
                    hint="One email address can only have one enterprise and it applies for members also!"
                  >
                  </q-input>
                </q-card-section>

                <q-card-actions align="right" class="bg-white text-teal">
                  <q-btn
                    flat
                    label="Add as Member"
                    @click="findMember(this.member)"
                  />
                  <!-- v-close-popup -->
                </q-card-actions>
              </q-card>
            </q-dialog>
          </div>
        </q-tab-panel>
      </q-tab-panels>
      <!-- Member profile panel -->
      <!-- </q-tab-panels> -->
    </q-page-container>
  </q-layout>
</template>
<script>
// use sign in to insert empty values and filled values so that those values
// cAN BE USED HERE like in category
// it might not work coz im saving individual fields separately
//i have to make separate variable for each and save separately
//because im saving on same document
//consists of me and enterprise
import SHeader from "../../layouts/Header";
import SFooter from "../../layouts/Footer";
/* import SEnterprise from "./profile/Enterprise";
import SMember from "./profile/Member"; */
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";

export default {
  components: {
    SHeader,
    SFooter
  },

  data() {
    return {
      tab: "enterprise",
      subTab: "profileInfo",
      user_id: "",
      contact: "",
      add_email: true,
      done_email: false,
      add_contact: true,
      done_contact: false,
      add_pan_no: true,
      done_pan_no: false,
      pan_no: "",
      medium: false, //for dialog to appear on clicking add button,
      member: ""
    };
  },
  created() {
    this.fetchProfile(this.user);
  },
  mounted() {
    // this.fetchRole(this.admin_enterprise_id);
    /*  var parsedyourElement = JSON.parse(
      JSON.stringify(this.admin_enterprise_id)
    ); */
    console.log(this.admin_enterprise_id[0].admin_enterprise_id);
    /*  let data = {};
    for (let d in this.admin_enterprise_id) {
      data[d] = this.admin_enterprise_id[d];
    }
    console.log(data); */
  },
  computed: {
    ...mapGetters("profile", ["admin_enterprise_id"]),
    ...mapGetters("layoutDemo", ["view"]),
    ...mapState("auth", ["user", "pic", "isAuthenticated"]),
    ...mapState("profile", ["enterprise", "members"])
  },
  methods: {
    ...mapActions("profile", [
      "fetchProfile",
      "createCategory",
      "updateTitle",
      "deleteCategory",
      "fetchRole"
    ]),
    focusOnEmail() {
      this.add_email = false;
      this.done_email = true; //done is for change in icon here
      // this.$refs.focus.focus();
    },
    focusOffEmail() {
      this.add_email = true;
      this.done_email = false;
      // this.new_category = "";
    },
    renameEmail(title) {
      this.updateTitle({
        title: title,
        user_id: this.user.id
      });
      this.done_email = false;
    },
    focusOnContact() {
      this.add_contact = false;
      this.done_contact = true; //done is for change in icon here
      // this.$refs.focus.focus();
    },
    focusOffContact() {
      this.add_contact = true;
      this.done_contact = false;
      // this.new_category = "";
    },
    renameContact() {},
    focusOnPanNo() {
      this.add_pan_no = false;
      this.done_pan_no = true; //done is for change in icon here
      // this.$refs.focus.focus();
    },
    focusOffPanNo() {
      this.add_pan_no = true;
      this.done_pan_no = false;
      // this.new_category = "";
    },
    renamePanNo() {},
    findMember(member) {
      console.log(member);
    },
    createMember() {
      // ? member msut not exit in email array
      // ? member must not have enterprise already
      // ? one member at a time
    }
  }
};
</script>

<style lang="stylus" scoped>
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
</style>
