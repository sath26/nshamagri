import firebase from "firebase";
import { generate } from "shortid";
import { fireDB, storage, auth, db } from "../service/firebase";
import { firestoreAction } from "vuexfire";
import { Notify } from "quasar";
const state = {
  category_quotation: [],
  unit_quotation: [],
  enterprise: [], //needed in vuex but not used in components
  current_enterprise: {},
  members: [],
  checkPossibleMember: [],
  error: null,
  loading_profile: false,
  loading_finding_member: false,
  beforeEligibleOrNot: {},
  eligibleOrNot: {}
};
const mutations = {
  setError(state, payload) {
    state.error = payload;
  },

  setLoading(state, payload) {
    state.loading_profile = payload;
  },

  setCurrentEnterprise(state, payload) {
    state.current_enterprise = Object.assign({}, payload);
  },
  setLoadingFindingMember(state, payload) {
    state.loading_finding_member = payload;
  },
  setEligibleOrNot(state, payload) {
    state.eligibleOrNot = payload;
    // console.log(state.eligibleOrNot);
  }
};
// ! fetching profile that doesnt even exist will cost like it did
const actions = {
  fetchProfile: firestoreAction(({ bindFirestoreRef, commit }, user) => {
    commit("setLoading", true);
    return bindFirestoreRef(
      "enterprise", //naming different due to refactoring issue that might arise
      // db.collection("enterprise").where("member_id", "array-contains", user.id)
      db
        .collection("enterprise")
        .where("member_email", "array-contains", user.email)
    ).then(res => {
      // console.log(res);

      commit("setCurrentEnterprise", res);
    });
  }),
  checkAndFindMember: firestoreAction(
    ({ bindFirestoreRef, commit }, inputEmail) => {
      commit("setLoadingFindingMember", true);
      // ? member msut not exit in email array
      // ? member must not have enterprise already
      // ? one member at a time
      // ! use in profile state to add member_email_id as soon as user opts in for enterprise
      // * [TODO] from ui perspective enterprise option has to add the one(user) who created the profile
      // * for member_email_id "after" he/she clicks for (create enterprise)
      var enterpriseRef = db.collection("enterprise");
      return bindFirestoreRef(
        "beforeEligibleOrNot", // *[TODO] email id instead of member_id should have been used
        //enterpriseRef.where("title", "==", "").where("email"==)
        enterpriseRef.where("email", "==", inputEmail)
      )
        .then(data => {
          console.log(data);
          commit("setEligibleOrNot", data);
        })
        .finally(data => {
          commit("setLoadingFindingMember", false);
        });
    }
  ),

  fetchRole: firestoreAction(
    ({ bindFirestoreRef, commit, state }, admin_enterprise_id) => {
      //commit("setLoading", true);

      //add the admin's id to admin_enterprise_id of current user who will be member
      //if he is admin above steps is not necessary
      //the following code will work for both admin and member
      return bindFirestoreRef(
        "members",
        db
          .collection("enterprise")
          .doc(admin_enterprise_id)
          .collection("role")
      );
    }
  ),

  async createRole({ state }, user) {
    // const result = posts.doc();
    // post.id = result.id;
    // quotations.created_at = firebase.firestore.FieldValue.serverTimestamp();
    // quotations.updated_at = firebase.firestore.FieldValue.serverTimestamp();
    // quotations.user_id = firebase.auth().currentUser.uid;

    try {
      await db
        .collection("enterprise")
        .doc(user.id)
        .collection("role")
        .doc(state.eligibleOrNot[0].uid)
        .set({
          admin_enterprise_id: firebase.auth().currentUser.uid,
          admin_email_Id: firebase.auth().currentUser.email,
          role: "Member",
          user_id: state.eligibleOrNot[0].uid,
          email: state.eligibleOrNot[0].email,
          user_name: state.eligibleOrNot[0].displayName,
          profile_pic: state.eligibleOrNot[0].photoURL
        });
      var updateCurrentAdminInfo = await db
        .collection("enterprise")
        .doc(firebase.auth().currentUser.uid);
      updateCurrentAdminInfo.update({
        member_email: firebase.firestore.FieldValue.arrayUnion(
          state.eligibleOrNot[0].email
        )
      });
      var updateMemberAdminInfo = await db
        .collection("enterprise")
        .doc(state.eligibleOrNot[0].uid);
      updateMemberAdminInfo.update({
        title: state.current_enterprise[0].title,
        pan_no: state.current_enterprise[0].pan_no,
        vat_no: state.current_enterprise[0].vat_no,
        contact_no: state.current_enterprise[0].contact_no,
        admin_enterprise_id: firebase.auth().currentUser.uid,
        admin_email_Id: firebase.auth().currentUser.email
      });
      await db
        .collection("enterprise")
        .doc(user.id)
        .collection("role")
        .doc(state.eligibleOrNot[0].uid)
        .set({
          admin_enterprise_id: firebase.auth().currentUser.uid,
          admin_email_Id: firebase.auth().currentUser.email,
          role: "Admin",
          user_id: state.eligibleOrNot[0].uid,
          email: state.eligibleOrNot[0].email,
          user_name: state.eligibleOrNot[0].displayName,
          profile_pic: state.eligibleOrNot[0].photoURL
        });
      Notify.create({
        color: "green-4",
        textColor: "white",
        icon: "fas fa-check-circle",
        message: "Submitted"
      });

      //add a new document with a generated id.
    } catch (error) {
      console.error(error);
    }
  },
  /*  async updateRole({ getters }, enterprise) {
    console.log(enterprise);
    const hello = {
      member_email_id: [user.email]
    };
    const id = enterprise.user_id;
    console.log(enterprise.user_id);
    try {
      //merge is for not to override the record
      await db
        .collection("enterprise")
        .doc(id)
        .set(hello, { merge: true });
    } catch (error) {
      console.error(error);
    }
  }, */
  async deleteRole({ state }, givenMemberAllInfo) {
    // givenMemberAllInfo is for individual info that can be provided in for loop to router
    try {
      await db
        .collection("enterprise")
        .doc(firebase.auth().currentUser.uid)
        .collection("row")
        .doc(givenMemberAllInfo.user_id)
        .delete();
      var removeCurrentAdminInfo = await db
        .collection("enterprise")
        .doc(givenMemberAllInfo.user_id);
      removeCurrentAdminInfo.update({
        member_email: firebase.firestore.FieldValue.arrayRemove(
          givenMemberAllInfo.email
        )
      });
      var updateMemberAdminInfo = await db
        .collection("enterprise")
        .doc(givenMemberAllInfo.user_id);
      updateMemberAdminInfo.update({
        admin_enterprise_id: givenMemberAllInfo.user_id,
        admin_email_Id: givenMemberAllInfo.email
      });
    } catch (error) {
      console.error(error);
    }
  },

  async updateTitle({ getters }, enterprise) {
    // const result = posts.doc();
    // post.id = result.id;
    console.log(enterprise);
    const hello = {
      title: enterprise.title,
      user_id: enterprise.user_id
    };
    const id = enterprise.user_id;
    console.log(enterprise.user_id);
    // enterprise.user_id = firebase.auth().currentUser.uid;
    // authentication required here, else everything works
    try {
      await db
        .collection("enterprise")
        .doc(id)
        .set(hello);
    } catch (error) {
      console.error(error);
    }
  }
};
const getters = {
  admin_enterprise_id: state => {
    return state.current_enterprise[0].admin_enterprise_id;
  },
  eligible: state => {
    // ! dont remove state.eligibleOrNot.length > 0
    if (
      state.eligibleOrNot.length > 0 &&
      state.eligibleOrNot[0].title == "" &&
      state.eligibleOrNot[0].email == state.eligibleOrNot[0].admin_email_Id
    ) {
      return "eligible";
    } else if (
      state.eligibleOrNot.length > 0 &&
      state.eligibleOrNot[0].title !== "" &&
      state.eligibleOrNot[0].email !== state.eligibleOrNot[0].admin_email_Id
    ) {
      return "ineligible";
    } else if (state.eligibleOrNot.length == 0) {
      return "noHint";
    } else {
      return "noHint";
    }
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};