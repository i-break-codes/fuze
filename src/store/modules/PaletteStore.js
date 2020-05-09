// todo refactor later

const state = {
  palettes: [],
  codeBox: false,
};

const actions = {
  addPalette({ commit }, palette) {
    commit('SET_PALETTE', palette.toHEXA().toString());
  },
  clearAll({ commit }) {
    commit('REMOVE_ALL_PALETTES');
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
  REMOVE_PALETTE: (state, palette) => {
    state.palettes = state.palettes.filter((e) => e !== palette);
  },
  SET_PRESET: (state, preset) => {
    state.palettes = preset;
  },
};

const getters = {
  allPalettes: (state) => state.palettes,
};

export default {
  state,
  actions,
  mutations,
  getters,
};
