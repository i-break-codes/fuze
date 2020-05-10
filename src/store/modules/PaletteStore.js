// todo refactor later

const state = {
  palettes: [],
  codeBox: false,
  hideSidebar: false,
};

const actions = {
  addPalette({ commit }, palette) {
    commit('SET_PALETTE', palette.toHEXA().toString());
  },
  clearAll({ commit }) {
    commit('REMOVE_ALL_PALETTES');
  },
  removePalette({ commit }, paletteIndex) {
    commit('REMOVE_PALETTE', paletteIndex);
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
  REMOVE_PALETTE: (state, paletteIndex) => {
    state.palettes = [...state.palettes.filter((f, i) => i !== paletteIndex)];
  },
  SET_PRESET: (state, preset) => {
    state.palettes = preset;
  },
};

const getters = {
};

const cache = ['Palette.palettes'];

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters,
  cache,
};
