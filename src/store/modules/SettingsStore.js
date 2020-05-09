const state = {
  advancedSettings: false,
  angle: 45,
  speed: 10,
};

const actions = {
  toggleAdvancedSettings({ commit }) {
    commit('SET_ADVANCED_SETTINGS');
  },
  changeAngle({ commit }, angle) {
    commit('SET_ANGLE', angle);
  },
  changeSpeed({ commit }, speed) {
    commit('SET_SPEED', speed);
  },
};

const mutations = {
  SET_ADVANCED_SETTINGS: (state) => {
    state.advancedSettings = !state.advancedSettings;
  },
  SET_ANGLE: (state, angle) => {
    state.angle = angle;
  },
  SET_SPEED: (state, speed) => {
    state.speed = speed;
  },
};

const getters = {
  advancedSettings: (state) => state.advancedSettings,
  getAngle: (state) => state.angle,
  getSpeed: (state) => state.speed,
};

export default {
  state,
  actions,
  mutations,
  getters,
};
