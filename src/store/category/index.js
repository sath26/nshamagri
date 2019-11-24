
import firebase from 'firebase';
import { generate } from 'shortid';
import { fireDB, storage, auth, db } from '../service/firebase';
import { firestoreAction } from 'vuexfire';

const state={
  category:[],
  error: null,
  loading_category: false,
};
const mutations={
   setError(state, payload) {
    state.error = payload;
  },

    setLoading(state, payload) {
    state.loading_category = payload;
  },

   setCategory(state, payload) {
    state.category = payload;
  }
};
const actions= {
  fetchCategory:firestoreAction(({ bindFirestoreRef,commit }) => {
    commit('setLoading', true)
    return bindFirestoreRef('category', db.collection('category'))
      .then((data) => {
        console.log(data);
      })
           .finally((data)=>{
             commit('setLoading',false);
            });
  }),
  async createCategory({ getters }, categories) {
    // const result = posts.doc();
    // post.id = result.id;
    // categories.created_at = firebase.firestore.FieldValue.serverTimestamp();
    // categories.updated_at = firebase.firestore.FieldValue.serverTimestamp();
    // categories.user_id = firebase.auth().currentUser.uid;
     ;
    try {
      await db.collection('category').doc().set(categories);
      
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
      value: categories.value
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
    
    const id = categories.id;
    // categories.user_id = firebase.auth().currentUser.uid;

    try {
      await db.
        collection('category')
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
