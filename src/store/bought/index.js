import { db } from "../service/firebase";
import { firestoreAction } from "vuexfire";
const state = {
  error_bought: false,
  loading_bought: false,
  anchorDoc: [],
  boughts: [],
  furtherBoughtLoad: []
};
const mutations = {
  setErrorBought(state, payload) {
    state.error_bought = payload;
  },

  setLoadingBought(state, payload) {
    state.loading_bought = payload;
  },
  setBoughts(state, payload) {
    /* var arr1 = [1, 2, 3]
    var obj = 4
    var newData = [...arr1, obj] // [1,2,3,4]
    console.log(newData); */
    state.boughts = state.boughts.concat(payload);
  },
  setAnchorDoc(state, payload) {
    // console.log(payload);
    state.anchorDoc = payload;
    // state.anchorDoc.splice(1, 1, payload);
  }
};

const actions = {
  firstLoad: firestoreAction(({ bindFirestoreRef, commit, state }, user) => {
    commit("setLoadingBought", true);
    return bindFirestoreRef(
      "boughts",
      db
        .collection("bought")
        .where("buyer_enterprise_id", "==", "t98Blh8vyqerPbJJHLFPm1XzngR2")
        .orderBy("updated_at", "desc")
        .limit(20)
      // .get()
      // .then(querySnapshot => {
      //   commit(
      //     "setAnchorDoc",
      //     querySnapshot.docs[querySnapshot.docs.length - 1]
      //   );
      // })
    ).then(res => {
      console.log(res[res.length - 1]);
      commit("setAnchorDoc", res[res.length - 1]);
      console.log(state.anchorDoc);
    });
  }),
  furtherLoad: firestoreAction(
    ({ bindFirestoreRef, commit, state }, inputEmail) => {
      // ?
      // !
      // * use pyramid concept wehre less than next the given updated at date is used but ordered in descending order to
      console.log(JSON.parse(JSON.stringify(state.anchorDoc)));
      return bindFirestoreRef(
        "furtherBoughtLoad",
        db
          .collection("bought")
          .where("buyer_enterprise_id", "==", "t98Blh8vyqerPbJJHLFPm1XzngR2")
          .where("updated_at", "<", JSON.parse(JSON.stringify(state.anchorDoc)))
          //JSON.parse(JSON.stringify(state.anchorDoc.updated_at))
          .orderBy("updated_at", "desc")
          .limit(5)
      )
        .then(data => {
          // console.log(state.boughts);
          // console.log(data);
          // console.log(state.furtherBoughtLoad);
          /* if (!data) {
            console.log("no more data");
          } else {
            console.log(data[data.length - 1].updated_at.toDate());
          } */
          /*  console.log(
            state.furtherBoughtLoad[
              state.furtherBoughtLoad.length - 1
            ].updated_at.valueOf()
          ); */
          commit("setBoughts", state.furtherBoughtLoad);
          console.log(state.boughts);
          commit("setAnchorDoc", state.boughts[state.boughts.length - 1]);
          console.log(state.boughts);
        })
        .finally(data => {});
    }
  )
  /*   firstLoad({ commit, state }) {
    db.collection("bought")
      .where("buyer_enterprise_id", "==", "t98Blh8vyqerPbJJHLFPm1XzngR2")
      .orderBy("updated_at", "desc")
      .limit(20)
      .get()
      .then(res => {
        commit("setBoughts", res.data());
      })
      .catch(err => {
        console.error(err);
      });
  } */
};
const getters = {};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
