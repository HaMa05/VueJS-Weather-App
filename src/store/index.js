import Vue from 'vue';
import Vuex from 'vuex';
import * as current from './module/current';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    current,
  },
});

export default store;
