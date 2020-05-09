// todo refactor later

const state = {
  palettes: [],
  advancedSettings: false,
  angle: 45,
  speed: 10,
  codeBox: false,
};

const actions = {
  addPalette({ commit }, palette) {
    commit('SET_PALETTE', palette.toHEXA().toString());
  },
  clearAll({ commit }) {
    commit('REMOVE_ALL_PALETTES');
  },
  toggleAdvancedSettings({ commit }) {
    commit('SET_ADVANCED_SETTINGS');
  },
  changeAngle({ commit }, angle) {
    commit('SET_ANGLE', angle);
  },
  changeSpeed({ commit }, speed) {
    commit('SET_SPEED', speed);
  },
  removePalette({ commit }, palette) {
    commit('REMOVE_PALETTE', palette);
  },
  applyPresets({ commit }, preset) {
    commit('SET_PRESET', preset);
  },
};

const mutations = {
  SET_PALETTE: (state, palette) => {
    state.palettes.push(palette);
  },
  REMOVE_ALL_PALETTES: (state) => {
    state.palettes = [];
  },
  SET_ADVANCED_SETTINGS: (state) => {
    state.advancedSettings = !state.advancedSettings;
  },
  SET_ANGLE: (state, angle) => {
    state.angle = angle;
  },
  SET_SPEED: (state, speed) => {
    state.speed = speed;
  },
  REMOVE_PALETTE: (state, palette) => {
    state.palettes = state.palettes.filter((e) => e !== palette);
  },
  SET_PRESET: (state, preset) => {
    state.palettes = preset;
  },
};

const getters = {
  allPalettes: (state) => state.palettes,
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
