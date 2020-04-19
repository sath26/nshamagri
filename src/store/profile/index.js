import firebase from "firebase";
import { generate } from "shortid";
import { fireDB, storage, auth, db } from "../service/firebase";
import { firestoreAction } from "vuexfire";
import { Notify } from "quasar";
const state = {
  category_quotation: [],
  unit_quotation: [],
  enterprise: [],
  current_enterprise: {},
  members: [],
  checkPossibleMember: [],
  error: null,
  loading_profile: false,
  loading_finding_member: false
};
const mutations = {
  setError(state, payload) {
    state.error = payload;
  },

  setLoading(state, payload) {
    state.loading_profile = payload;
  },

  setCurrentEnterprise(state, payload) {
    state.current_enteprise = Object.assign({}, payload);
  },
  setLoadingFindingMember(state, payload) {
    state.loading_finding_member = payload;
  }
};
// ! fetching profile that doesnt even exist will cost like it did
const actions = {
  fetchProfile: firestoreAction(({ bindFirestoreRef, commit }, user) => {
    commit("setLoading", true);
    return bindFirestoreRef(
      "enterprise", //naming different due to refactoring issue that might arise
      db.collection("enterprise").where("member_id", "array-contains", user.id)
    ).then(res => {
      console.log(res);

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
        "checkPossibleMember", // *[TODO] email id instead of member_id should have been used
        //enterpriseRef.where("title", "==", "").where("email"==)
        enterpriseRef.where("email", "==", inputEmail)
      )
        .then(data => {
          console.log("find member");
        })
        .finally(data => {
          commit("setLoadingFindingMember", false);
        });
    }
  ),

  fetchRole: firestoreAction(
    ({ bindFirestoreRef, commit, state }, enterprise) => {
      commit("setLoading", true);
      console.log("wtf");
      // console.log(state.enterprise);
      /*   var parsedobj = JSON.parse(JSON.stringify(enterprise));
    console.log(parsedobj); */

      //add the admin's id to admin_enterprise_id of current user who will be member
      //if he is admin above steps is not necessary
      //the following code will work for both admin and member
      return bindFirestoreRef(
        "members",
        db
          .collection("enterprise")
          .doc(this.enterprise[0].admin_enterprise_id)
          .collection("role")
      )
        .then(data => {
          console.log(data);
        })
        .finally(data => {
          commit("setLoading", false);
        })
        .error(data => console.log(data));
    }
  ),
  async createRole({ getters }, user) {
    // const result = posts.doc();
    // post.id = result.id;
    // quotations.created_at = firebase.firestore.FieldValue.serverTimestamp();
    // quotations.updated_at = firebase.firestore.FieldValue.serverTimestamp();
    // quotations.user_id = firebase.auth().currentUser.uid;

    try {
      await db
        .collection("enterprise")
        .doc(user.id)
        .collection("role");
      Notify.create({
        color: "green-4",
        textColor: "white",
        icon: "fas fa-check-circle",
        message: "Submitted"
      });
      //Add a new document with a generated id.
    } catch (error) {
      console.error(error);
    }
  },
  async updateRole({ getters }, enterprise) {
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
  },
  async deleteRole({ getters }, categories) {
    // const result = posts.doc();
    // post.id = result.id;

    const id = categories.id;
    // categories.user_id = firebase.auth().currentUser.uid;

    try {
      await db
        .collection("enterprise")
        .doc(id)
        .delete();
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
    return state.current_enterprise;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
