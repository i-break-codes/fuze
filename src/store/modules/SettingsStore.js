const state = {
  advancedSettings: false,
  angle: 45,
  speed: 10,
};

const actions = {
  toggleAdvancedSettings({ commit }) {
    commit('SET_ADVANCED_SETTINGS');
  },
  changeSetting({ commit }, { setting, value }) {
    commit('SET_SETTING', { setting, value });
  },
};

const mutations = {
  SET_ADVANCED_SETTINGS: (state) => {
    state.advancedSettings = !state.advancedSettings;
  },
  SET_SETTING: (state, { setting, value }) => {
    state[setting] = value;
  },
};

const getters = {
  advancedSettings: (state) => state.advancedSettings,
  getAngle: (state) => state.angle,
  getSpeed: (state) => state.speed,
};

const cache = ['Settings.angle', 'Settings.speed'];

export default {
  state,
  actions,
  mutations,
  getters,
  cache,
};
