import Vue from 'vue'
import Vuex from 'vuex'
import testStore from './modules/test';

Vue.use(Vuex)

const store = new Vuex.Store({
    modules:{
        test: testStore
    }
})

export default store