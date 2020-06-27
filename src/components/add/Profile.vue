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
         
          <!-- Profile card ~ #01 -->
          <div id="enterprise-profile_card" class="q-pa-xl">
            <div class="card-banner">
              <div class="avatar">
                <q-img class="usr-img" basic src="statics/parallax2.jpg">
                  <div class="img-edit absolute-bottom text-subtitle2 text-center">
                   <q-btn flat label="Update Image"></q-btn>
                  </div>
                </q-img>
              </div>
              <div class="card-quick_info">
                <ul class="info-content">
                  <li>
                    <div class="info-box">
                      <div class="info-head text-h5">Quotation</div>
                      <div class="info-count">200</div>
                    </div>
                  </li>
                  <li>
                    <div class="info-box">
                      <div class="info-head text-h5">Invoice</div>
                      <div class="info-count">120</div>
                    </div>
                  </li>
                  <li>
                    <div class="info-box">
                      <div class="info-head text-h5">Customers</div>
                      <div class="info-count">35</div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <!-- profile-detail card -->
            <q-card class="shadow-1 q-mt-lg ">
              <q-card-section>
                <div class="text-h4 text-teal-5 q-ml-xl">Profile details</div>
              </q-card-section>
              <div class="row">
                <div class="card-body card-body_left col">
                  <ul class="info-list">
                    <li>
                      <q-input
                        color="grey-10"
                        filled
                        label="Name"
                        v-model="current_enterprise[0].title"
                        @focus="focusOnTitle()"
                        @blur="focusOffTitle()"
                      >
                        <template v-slot:prepend>
                          <q-icon name="store" />
                        </template>
                        <template v-slot:append>
                          <q-btn
                            flat
                            v-if="done_title"
                            @click="renameTitle(current_enterprise[0].title)"
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
                    <li class="col">
                      <q-input
                        color="grey-10"
                        filled
                        label="Contact Number"
                        v-model="current_enterprise[0].contact_no"
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
                  </ul>
                </div>
                <div class="card-body_right col">
                  <iframe 
                  class="q-mb-lg card-body-map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56516.31625948592!2d85.29111343800308!3d27.70895594445841!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198a307baabf%3A0xb5137c1bf18db1ea!2sKathmandu%2044600%2C%20Nepal!5e0!3m2!1sen!2suk!4v1588802629572!5m2!1sen!2suk"
                  width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0">
                  </iframe>
                </div>
              </div>
            </q-card>
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
      add_title: true,
      done_title: false,
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
    focusOnTitle() {
      this.add_title = false;
      this.done_title = true; //done is for change in icon here
      // this.$refs.focus.focus();
    },
    focusOffTitle() {
      this.add_title = true;
      this.done_title = false;
      // this.new_category = "";
    },
    renameTitle(title) {
      this.updateTitle({
        title: title,
        user_id: this.user.id
      });
      this.done_title = false;
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
  padding:12px;
  // background: blue;
  z-index: 12;
  .card-banner {
    display: flex;
    flex-wrap: nowrap;
    padding: 20px;
    background-image: url("../../assets/img/Profile-bg_graphics.png");
    background-size: cover;
    border-radius: .25em;
  }
}
.usr-img {
  width: 300px;
  height: 300px;
  border-radius: .25em;
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
      color: $primary-white;
      font-weight:700;
    }
  }
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
  // margin: 0 auto;
  padding: 20px;
  &_right{
    text-align:center;
    .card-body-map{
      padding:0;
      border-radius: .25em;
    }
  }
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