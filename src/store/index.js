import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import Palette from './modules/PaletteStore';
import Notification from './modules/NotificationStore';
import Settings from './modules/SettingsStore';

Vue.use(Vuex);

const persistedStore = createPersistedState({
  paths: [...Settings.cache, ...Palette.cache],
});

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    Palette,
    Notification,
    Settings,
  },
  plugins: [persistedStore],
});
