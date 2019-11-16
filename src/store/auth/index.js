import { generate } from 'shortid';
import firebase from 'firebase';
import { fireDB, storage, auth, db } from '../service/firebase';
const google = new firebase.auth.GoogleAuthProvider();

const state={
  user: null,
  pic: null,
  error: null,
  loading: false,
}
const getters={

}
const actions={
  createUser ({ commit }, payload) {
    commit('setLoading', true)
    auth.createUserWithEmailAndPassword(payload.email, payload.password)
    .then(user => {
      commit('setUser', { email: user.email });
      commit('setError', null);
      router.push('/home');
    })
    .catch(error => {
      commit('setError', error.message);
    })
    .finally(() => {
      commit('setLoading', false);
    });
  },


  userSignIn ({commit}, payload) {
    commit('setLoading', true);
    auth
      .signInWithEmailAndPassword(payload.email, payload.password)
      .then(user => {
        commit('setUser', { email: user.email });
        commit('setError', null);
        store.dispatch('getPhoto');
        // see this in main.js of vueTODO
        sessionStorage.setItem('email', user.email);
        router.push('/home');
      })
      .catch(error => {
        commit('setError', error.message);
      })
      .finally(() => {
        commit('setLoading', false);
      });
  },

  userSignInWithGoogle({commit}, payload) {
    commit('setLoading', true);
    
    auth
      .signInWithPopup(google)
      .then(async result => {
        const accessToken = result.credential.accessToken;
        const { user } = result;
        
        commit('setUser', { email: user.email, fullName: user.displayName, accessToken });
        sessionStorage.setItem('email', user.email);
        sessionStorage.setItem('accessToken', accessToken);

        await store.dispatch('getPhoto');
        if (!store.state.pic) {
          commit('setPic', user.photoURL);
        }
        commit('setError', null);
        router.push('/home');
      })
      .catch(error => {
        commit('setError', error.message);
      })
      .finally(() => {
        commit('setLoading', false);
      });
  },

    async autoSignIn ({commit}, payload) {
        commit('setUser', { email: payload.email });
        await store.dispatch('getPhoto');
        router.push('/home');
      },
 

 
  userSignOut ({commit}) {
    auth.signOut();
    sessionStorage.clear();
    commit('setUser', null);
    commit('setError', null);
    commit('setTodo', null);
    router.push('/');
  },
  resetPassword ({commit}, payload) {
    commit('setLoading', true);
    auth
    .sendPasswordResetEmail(payload.email)
    .then(() => {
      commit('setError', null);
      router.push('/');
    }).catch(err => {
      commit('setError', err);
    })
    .finally(() => {
      commit('setLoading', false);
    })
  },

  takePhoto({ commit }, payload) {
    commit('setLoading', true);

    const mediaStreamTrack = payload.stream.getVideoTracks()[0];
    const imageCapture = new window.ImageCapture(mediaStreamTrack);
    const { email } = store.state.user;
    const key = btoa(email);

    imageCapture.takePhoto().then(blob => {
      storage.ref()
        .child(`${key}/profile`)
        .put(blob)
          .then( async () => {
            const url = await storage.ref()
            .child(`${key}/profile`)
            .getDownloadURL();

            commit('setPic', url);
            router.go(-1);
          })
          .catch((err) => commit('setError', err))
          .finally(() => commit('setLoading', false))
    });
  },
  getPhoto({ commit }, payload) {
    const { email } = store.state.user;
    const key = btoa(email);

    if (store.state.pic === null) {
      storage.ref()
      .child(`${key}/profile`)
      .getDownloadURL()
      .then((url) => {
        commit('setPic', url);
      })
      .catch((err) => commit('setError', err))
      .finally(() => commit('setLoading', false));
    }
  }
}
const mutations={
  setUser(state, payload) {
    state.user = payload;
  },

  setPic(state, payload) {
    state.pic = payload;
  },

   setLoading(state, payload) {
    state.loading = payload;
  },

    setError(state, payload) {
    state.error = payload;
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
