import { createStore } from 'vuex'
import { menuStore } from './menuStore'
export default createStore({
  modules: {
    menuStore
  }
})
