
import firebase from 'firebase';
import { generate } from 'shortid';
import { fireDB, storage, auth, db } from '../service/firebase';
import { firestoreAction } from 'vuexfire';
import { Notify } from 'quasar'
const state = {
  category_quotation: [],
  unit_quotation: [],
  quotation:[],
  error: null,
  loading_quotation: false,
};
const mutations = {
  setError(state, payload) {
    state.error = payload;
  },

  setLoading(state, payload) {
    state.loading_quotation = payload;
  },

  setQuotation(state, payload) {
    state.quotation = payload;
  }
};
const actions = {
  fetchCategory: firestoreAction(({ bindFirestoreRef, commit }) => {
    commit('setLoading', true)
    return bindFirestoreRef('category_quotation', db.collection('category'))
      .then((data) => {
        console.log(data);
      })
     
  }),
  fetchUnit: firestoreAction(({ bindFirestoreRef, commit }) => {
    commit('setLoading', true)
    return bindFirestoreRef('unit_quotation', db.collection('unit'))
      .then((data) => {
        console.log(data);
      })
      
  }),
  fetchQuotation: firestoreAction(({ bindFirestoreRef, commit }) => {
    commit('setLoading', true)
    return bindFirestoreRef('quotation', db.collection('quotation'))
      .then((data) => {
        console.log(data);
      })
      .finally((data) => {
        commit('setLoading', false);
      });
  }),
  async createQuotation({ getters }, quotations) {
    // const result = posts.doc();
    // post.id = result.id;
    // quotations.created_at = firebase.firestore.FieldValue.serverTimestamp();
    // quotations.updated_at = firebase.firestore.FieldValue.serverTimestamp();
    // quotations.user_id = firebase.auth().currentUser.uid;
    
    try {
      await db.collection('quotation').doc().set(quotations);
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
  async updateQuotation({ getters }, categories) {
    // const result = posts.doc();
    // post.id = result.id;
    console.log(categories);
    const hello = {
      title: categories.title
    };
    const id = categories.id;
    // categories.user_id = firebase.auth().currentUser.uid;
    // authentication required here, else everything works
    try {
      await db.collection('quotation')
        .doc(id)
        .update(hello);
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
      await db.
        collection('quotation')
        .doc(id)
        .delete();
    } catch (error) {
      console.error(error);
    }
  },
};
const getters = {

};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
