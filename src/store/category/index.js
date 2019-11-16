
import firebase from 'firebase';
import { generate } from 'shortid';
import { fireDB, storage, auth, db } from '../service/firebase';
import { firestoreAction } from 'vuexfire';
const state={
  category:[],
  error: null,
  loading: false,
};
const mutations={
   setError(state, payload) {
    state.error = payload;
  },

    setLoading(state, payload) {
    state.loading = payload;
  },

   setCategory(state, payload) {
    state.category = payload;
  }
};
const actions= {
  fetchCategory:firestoreAction(({ bindFirestoreRef }) => {
   return bindFirestoreRef('category', db.collection('category'));
  }),
  async createCategory({ getters }, categories) {
    // const result = posts.doc();
    // post.id = result.id;
    categories.title ;
    categories.user_id = firebase.auth().currentUser.uid;
    categories.created_at = firebase.firestore.FieldValue.serverTimestamp();
    categories.updated_at = firebase.firestore.FieldValue.serverTimestamp();
    try {
      await categories.collection(category).add(categories);
    } catch (error) {
      console.error(error);
    }
  }
  
};
const getters={
  
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
