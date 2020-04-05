import firebase from "firebase";
import { generate } from "shortid";
import { fireDB, storage, auth, db } from "../service/firebase";
import { firestoreAction } from "vuexfire";
import { Notify } from "quasar";
const state = {
  category_quotation: [],
  unit_quotation: [],
  enterprise: {},
  roles: [],
  error: null,
  loading_profile: false,
};
const mutations = {
  setError(state, payload) {
    state.error = payload;
  },

  setLoading(state, payload) {
    state.loading_profile = payload;
  },

  setEnterprise(state, payload) {
    state.enteprise = payload;
  },
};
const actions = {
  fetchProfile: firestoreAction(({ bindFirestoreRef, commit }, user) => {
    commit("setLoading", true);
    return bindFirestoreRef(
      "enterprise", //naming different due to refactoring issue that might arise
      db.collection("enterprise").where("member_id", "array-contains", user.id)
    ).then((data) => {
      console.log(data);
      console.log("from enterprise user_id");
    });
  }),

  fetchRole: firestoreAction(({ bindFirestoreRef, commit }, user) => {
    commit("setLoading", true);

    console.log("wtf");
    //here profile.user_id means "admin" which is used in "enterprise" record
    return bindFirestoreRef(
      "roles",
      db.collection("enterprise").doc(user.id).collection("role")
    )
      .then((data) => {
        console.log(data);
      })
      .finally((data) => {
        commit("setLoading", false);
      });
  }),
  async createQuotation({ getters }, quotations) {
    // const result = posts.doc();
    // post.id = result.id;
    // quotations.created_at = firebase.firestore.FieldValue.serverTimestamp();
    // quotations.updated_at = firebase.firestore.FieldValue.serverTimestamp();
    // quotations.user_id = firebase.auth().currentUser.uid;

    try {
      await db.collection("quotation").doc().set(quotations);
      Notify.create({
        color: "green-4",
        textColor: "white",
        icon: "fas fa-check-circle",
        message: "Submitted",
      });
      //Add a new document with a generated id.
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
      user_id: enterprise.user_id,
    };
    const id = enterprise.user_id;
    console.log(enterprise.user_id);
    // enterprise.user_id = firebase.auth().currentUser.uid;
    // authentication required here, else everything works
    try {
      await db.collection("enterprise").doc(id).set(hello);
    } catch (error) {
      console.error(error);
    }
  },
  async deleteQuotation({ getters }, categories) {
    // const result = posts.doc();
    // post.id = result.id;

    const id = categories.id;
    // categories.user_id = firebase.auth().currentUser.uid;

    try {
      await db.collection("enterprise").doc(id).delete();
    } catch (error) {
      console.error(error);
    }
  },
};
const getters = {};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
