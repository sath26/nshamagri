import Vue from "vue";
import Vuex from "vuex";
import { vuexfireMutations } from "vuexfire";
import layoutDemo from "./layoutDemo";
import category from "./category";
import unit from "./unit";
import auth from "./auth";
import profile from "./profile";
import bought from "./bought";
import quotation from "./quotation";
import { fauth } from "./service/firebase";
import createPersistedState from "vuex-persistedstate";
import SecureLS from "secure-ls";
const ls = new SecureLS({ isCompression: false });
Vue.use(Vuex);

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export default function(/* { ssrContext } */) {
  const Store = new Vuex.Store({
    mutations: {
      // other mutations
      ...vuexfireMutations
    },
    /*  plugins: [
      createPersistedState({
        storage: {
          getItem: key => ls.get(key),
          setItem: (key, value) => ls.set(key, value),
          removeItem: key => ls.remove(key)
        }
      })
    ], */
    plugins: [createPersistedState()],
    modules: {
      layoutDemo,
      category,
      unit,
      auth,
      quotation,
      profile,
      bought
    }
  });

  if (process.env.DEV && module.hot) {
    module.hot.accept(["./layoutDemo"], () => {
      const newLayoutDemo = require("./layoutDemo").default;
      Store.hotUpdate({ modules: { layoutDemo: newLayoutDemo } });
    });
  }
  return Store;
}
