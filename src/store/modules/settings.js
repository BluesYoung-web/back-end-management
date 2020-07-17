/**
 * 默认设置的状态
 */

// 全局换肤
// import variables from '@/styles/element-variables.scss';

import { title, tagsView, fixedHeader, sidebarLogo } from '@/settings';

const state = {
  // them: variables.them,
  tagsView,
  fixedHeader,
  sidebarLogo,
  title
};

const mutations = {
  changeSettings: (state, { key, value }) => {
    if (state.hasOwnProperty(key)) {
      state[key] = value;
    }
  }
};

const actions = {
  changeSettingsAsync({ commit }, data) {
    commit('changeSettings', data);
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
