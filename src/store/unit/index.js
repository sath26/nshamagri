
import firebase from 'firebase';
import { generate } from 'shortid';
import { fireDB, storage, auth, db } from '../service/firebase';
import { firestoreAction } from 'vuexfire';

const state={
  unit:[],
  error: null,
  loading_unit: false,
};
const mutations={
   setError(state, payload) {
    state.error = payload;
  },

    setLoading(state, payload) {
    state.loading_unit = payload;
  },

   setUnit(state, payload) {
    state.unit = payload;
  }
};
const actions= {
  fetchUnit:firestoreAction(({ bindFirestoreRef,commit }) => {
    commit('setLoading', true)
    return bindFirestoreRef('unit', db.collection('unit'))
      .then((data) => {
        console.log(data);
      })
           .finally((data)=>{
             commit('setLoading',false);
            });
  }),
  async createUnit({ getters }, units) {
    // const result = posts.doc();
    // post.id = result.id;
    // units.created_at = firebase.firestore.FieldValue.serverTimestamp();
    // units.updated_at = firebase.firestore.FieldValue.serverTimestamp();
    // units.user_id = firebase.auth().currentUser.uid;
     ;
    try {
      await db.collection('unit').doc().set(units);
      
      //Add a new document with a generated id.
    } catch (error) {
      console.error(error);
    }
  },
  async updateUnit({ getters }, units) {
    // const result = posts.doc();
    // post.id = result.id;
   console.log(units);
    const hello = {
      value: units.value
    };
    const id = units.id;
    // units.user_id = firebase.auth().currentUser.uid;
   // authentication required here, else everything works
    try {
      await db.collection('unit')
        .doc(id)
        .update(hello);
    } catch (error) {
      console.error(error);
    }
  },
  async deleteUnit({ getters }, units) {
    // const result = posts.doc();
    // post.id = result.id;
    
    const id = units.id;
    // units.user_id = firebase.auth().currentUser.uid;

    try {
      await db.
        collection('unit')
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
