import { generate } from 'shortid';
import firebase from 'firebase';
import { fireDB, storage, fauth, db } from '../service/firebase';
import router from '../../router'
const google = new firebase.auth.GoogleAuthProvider();

const state={
  user: {},
  pic: null,
  error_auth: null,
  loading_auth: false,
};
const getters={
  isAuthenticated(state) {
    return !!state.user;
  },
  loggedInuser(state) {
    return state.user
  }
};

const mutations={
  setUser(state, payload) {
    state.user = payload;
  },

  setPic(state, payload) {
    state.pic = payload;
  },

   setLoading(state, payload) {
    state.loading_auth = payload;
  },

    setError(state, payload) {
    state.error_auth = payload;
  }
};
const actions = {
  createUser({ commit }, payload) {
    commit('setLoading', true)
    fauth.createUserWithEmailAndPassword(payload.email, payload.password)
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


  userSignIn({ commit }, payload) {
    commit('setLoading', true);
    fauth
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

  userSignInWithGoogle({ commit }, payload) {
    commit('setLoading', true);

    fauth
      .signInWithPopup(google)
      .then(async result => {
        const accessToken = result.credential.accessToken;
        const { user } = result;
        console.log(user);
        commit('setUser', { email: user.email, fullName: user.displayName, accessToken });
        sessionStorage.setItem('email', user.email);
        sessionStorage.setItem('accessToken', accessToken);

        // await this.$store.dispatch('getPhoto');
        // if (!this.$store.state.pic) {
          commit('setPic', user.photoURL);
        // }
        commit('setError', null);
        this.$router.push({ path: '/' });
      })
      .catch(error => {
        commit('setError', error.message);
      })
      .finally(() => {
        commit('setLoading', false);
      });
  },

   SignIn({ commit }, payload) {
    commit('setUser', {
      id: payload.uid,
      name: payload.displayName,
      email: payload.email,
      photoUrl: payload.photoURL
       });
    // await store.dispatch('getPhoto');
    router.push('/');
  },

  userHello({ commit }, payload){
    commit('setUser', {
      id: payload.uid,
      name: payload.displayName,
      email: payload.email,
      photoUrl: payload.photoURL
    });
    // await store.dispatch('getPhoto');
    
  },

  userSignOut({ commit }) {
    fauth.signOut();
    sessionStorage.clear();
    commit('setUser', {});
    commit('setError', null);
    // commit('setTodo', null);
    router.push('/');
  },
  resetPassword({ commit }, payload) {
    commit('setLoading', true);
    fauth
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
        .then(async () => {
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
  /* getPhoto({ commit }, payload) {
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
  } */
};
export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
