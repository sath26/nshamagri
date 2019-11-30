import Vue from 'vue'
import Vuex from 'vuex'
import { vuexfireMutations } from 'vuexfire'
import layoutDemo from './layoutDemo'
import category from './category'
import auth from './auth'
import quotation from './quotation'
import {fauth} from './service/firebase'

Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    mutations: {
      // other mutations
      ...vuexfireMutations,
    },
    modules: {
      layoutDemo,
      category,
      auth,
      quotation
    }
  })

  
  if (process.env.DEV && module.hot) {
    module.hot.accept(['./layoutDemo'], () => {
      const newLayoutDemo = require('./layoutDemo').default
      Store.hotUpdate({ modules: { layoutDemo: newLayoutDemo } })
    })
  }
  return Store
}


