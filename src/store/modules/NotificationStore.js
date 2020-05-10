const state = {
  notification: {
    show: false,
    type: 'info',
    message: '',
  },
};

const actions = {
  showNotification({ commit }, meta) {
    commit('SET_NOTIFICATION', meta);
  },
};

const mutations = {
  SET_NOTIFICATION: (state, meta) => {
    state.notification = { ...state.notification, ...meta };
  },
};

const getters = {
  getNotification: (state) => state.notification,
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters,
};
