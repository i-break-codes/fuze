import Vue from 'vue';
import Vuex from 'vuex';
import General from './modules/General';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    General,
  },
});
