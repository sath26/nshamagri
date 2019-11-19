
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
      await db.collection(category).doc(categories);
      //Add a new document with a generated id.
    } catch (error) {
      console.error(error);
    }
  },
  async updateCategory({ getters }, categories) {
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
      await db.collection('category')
        .doc(id)
        .update(hello);
    } catch (error) {
      console.error(error);
    }
  },
  async deleteCategory({ getters }, categories) {
    // const result = posts.doc();
    // post.id = result.id;
    
    id = categories.id;
    // categories.user_id = firebase.auth().currentUser.uid;

    try {
      await db.
        collection(category)
        .doc(id)
        .delete();
    } catch (error) {
      console.error(error);
    }
  },
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
