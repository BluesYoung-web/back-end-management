/**
 * 左边导航栏
 */

const state = {
  leftArr: []
};
const mutations = {
  setLeftArr: (state, arr) => {
    state.leftArr = arr;
  }
};

const actions = {
  setLeftArrAsync: ({ commit, state }, arr) => {
    return new Promise((resolve) => {
      commit('setLeftArr', arr);
      resolve(state.leftArr);
    });
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
