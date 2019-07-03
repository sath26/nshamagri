import Vue from 'vue'
import Vuex from 'vuex'

import layoutDemo from './layoutDemo'

Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      layoutDemo
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

