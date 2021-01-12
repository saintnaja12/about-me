import Vue from 'vue'
import Vuex from 'vuex'
import contact from './modules/contact'
import food from './modules/food'
import testApi from './modules/testApi'

Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        contact,
        food,
        testApi
    }
})