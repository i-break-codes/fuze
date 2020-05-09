import Vue from 'vue';
import Vuex from 'vuex';
import Palette from './modules/PaletteStore';
import Notification from './modules/NotificationStore';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Palette,
    Notification,
  },
});
