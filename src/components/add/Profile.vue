<template>
  <div>
    <q-layout view="hHh LpR lFf">
    <q-page-container>
      <s-header></s-header>
      <!-- Profile card ~ #01 -->
      <div id="enterprise-profile_card" class="q-pa-xl">
        <div class="card-banner">
          <div class="avatar">
            <img class="usr-img" src="statics/parallax2.jpg" />
            <div class="img-edit">
              <q-btn flat color="info">change</q-btn>
              <q-btn flat color="negative">delete</q-btn>
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
        <div class="card__container">
          <q-card class="shadow-1">
            <q-card-section class="float-left on-left card__content">
                  <q-card-section class="row">
                    <div class="text-h4 text-teal-5 q-ml-xl col">Profile details</div>
                  </q-card-section>
              <div class="card-body">
                <ul class="info-list">
                  <li class="col">
                    <q-icon name="email" class="profile-detail_icon"></q-icon>&nbsp;nexus.saugat26@gmail.com
                  </li>
                  <li class="col">
                    <q-icon name="phone" class="profile-detail_icon"></q-icon>&nbsp;+1 123-456-7890
                  </li>
                  <li class="col">
                    <q-icon name="place" class="profile-detail_icon"></q-icon>&nbsp;Kathmandu, Nepal
                  </li>
                  <li class="col">
                    <q-icon name="note" class="profile-detail_icon"></q-icon>&nbsp;223 049 023
                  </li>
                </ul>
              </div>
            </q-card-section>
              <!-- right content -->
            <q-card-section class="float-right on-right card__content">
                  <q-card-section class="row">
                <div class="col edit-btn_container">
                  <q-btn flat color="teal" class="float-right" icon="edit">Edit</q-btn>
                </div>
              </q-card-section>
              <div class="card-body">
                <ul class="info-list">
                  <li class="col">
                    Pan number : 12312
                  </li>
                  <li class="col">
                    Vat number : #231241
                  </li>
                  <li class="col">
                    <q-icon name="note" class="profile-detail_icon"></q-icon>223 049 023
                  </li>
                </ul>
              </div>
<<<<<<< HEAD
            </q-card-section>
          </q-card>
        </div>
          
        <!-- right contents -->
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
=======
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
            <q-dialog v-model="medium" @hide="resetEligible()">
              <q-card style="width: 700px; max-width: 80vw;">
                <q-card-section>
                  <div class="text-h6">Add Member</div>
                </q-card-section>

                <q-card-section class="q-pt-none">
                  <q-input
                    ref="inputMemberEmail"
                    debounce="1000"
                    :loading="loading_finding_member"
                    color="grey-10"
                    filled
                    label="Enter Member Email"
                    v-model="member"
                    :hint="hintOrNot()"
                    :error="notEligible()"
                    @clear="clearEligible()"
                    clearable
                    lazy-rules
                    :rules="[
                      val =>
                        val.includes('@gmail.com') ||
                        'Field must contain @gmail.com'
                    ]"
                  >
                    <template v-slot:error>
                      "This email either has already created an enterprise or is
                      not registered!"
                    </template>
                    <template v-slot:append>
                      <q-btn
                        round
                        flat
                        :disable="disableSearchMemberButton()"
                        icon="arrow_right_alt"
                        @click="findMember()"
                      />
                    </template>
                  </q-input>
                </q-card-section>

                <q-card-actions align="right" class="bg-white text-teal">
                  <q-btn
                    flat
                    readonly
                    :disable="enableAddAsMember()"
                    @click="addAsMember()"
                    label="Add as Member"
                  />
                  <!-- v-close-popup -->
                </q-card-actions>
              </q-card>
            </q-dialog>
>>>>>>> d6c51c924e82c91b3ce5274bf470a6dc7b49b60d
          </div>
        </div> -->
      </div>
    </q-page-container>
  </q-layout>
  </div>
</template>
<script>
// use sign in to insert empty values and filled values so that those values
// cAN BE USED HERE like in category
// it might not work coz im saving individual fields separately
//i have to make separate variable for each and save separately
//because im saving on same document
//consists of me and current_enterprise
import SHeader from "../../layouts/Header";
import SFooter from "../../layouts/Footer";
import { fireDB, storage, auth, db } from "../../store/service/firebase";
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
      member: "",
      eligible1: false
    };
  },
  created() {
    this.fetchProfile(this.user);
  },
  mounted() {
    this.fetchRole(this.admin_enterprise_id);
  },
  computed: {
    ...mapGetters("profile", ["admin_enterprise_id", "eligible"]),
    ...mapGetters("layoutDemo", ["view"]),
    ...mapState("auth", ["user", "pic", "isAuthenticated"]),
    ...mapState("profile", [
      "current_enterprise",
      "members",
      "loading_finding_member",
      "eligibleOrNot"
    ])
  },
  methods: {
    ...mapActions("profile", [
      "fetchProfile",

      "updateTitle",
      "deleteCategory",
      "fetchRole",
      "checkAndFindMember",
      "createRole"
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
    findMember() {
      console.log(this.member);
      this.checkAndFindMember(this.member);
      /* db.collection("enterprise")
        .where("email", "==", this.member)
        .get()
        .then(querySnapshot => {
          if (querySnapshot.empty) {
            console.log("nothing returned from database");
          } else {
            var doc = querySnapshot.docs[0];
            console.log("Document data:", doc.data());
          }
        })
        .catch(err => {
          console.log("Error getting document", err);
        }); */
      // console.log(this.eligible);
    },
    createMember() {
      // ? member msut not exit in email array
      // ? member must not have enterprise already
      // ? one member at a time
    },
    resetEligible() {
      this.member = "";

      this.$store.commit("profile/setEligibleOrNot", {});
    },
    clearEligible() {
      this.member = "";

      this.$store.commit("profile/setEligibleOrNot", {});
      this.$refs.inputMemberEmail.resetValidation();
    },
    notEligible() {
      if (this.eligible == "ineligible") {
        return true;
      }
    },

    hintOrNot() {
      if (this.eligible == "eligible") {
        return "Now you are eligible! Add As Member is enabled!";
      } else if (this.eligible == "noHint") {
        return "";
      }
    },
    disableSearchMemberButton() {
      if (this.eligible == "eligible") {
        return true;
      } else if (this.eligible == "noHint" || this.eligible == "ineligible") {
        return false;
      }
    },
    enableAddAsMember() {
      if (this.eligible == "eligible") {
        return false;
      } else if (this.eligible == "noHint" || this.eligible == "ineligible") {
        return true;
      }
    },
    addAsMember() {
      this.createRole(this.member);
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '..\css\app.styl';

.card__container{
  width:100%;
  background:red;
  overflow: hidden;
  z-index: 13;
  
  .card__content{
      width:49%;
      height:100%;
      margin:0;
      padding:0;
      border-radius: 0;
      background: yellow;
    }
}

#me-card, #enterprise-profile_card {
  background: $primary-white;
  margin: 0 auto;
}

.tab-me, .tab-enterprise {
  background: $tab-color;
}

#enterprise-profile_card {
  width: 100%;
  height: 100%;
  position: relative;
  background: blue;
  z-index: 12;

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
