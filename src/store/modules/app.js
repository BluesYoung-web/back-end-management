/**
 * app 的状态
 */

import Cookies from 'js-cookie';

const state = {
  // 侧边栏开启状态
  sidebar: {
    opened: Cookies.get('sidebarStatus') === '1' || Cookies.get('sidebarStatus') === 1,
    withoutAnimation: false
  },
  // 设备类型
  device: '',
  // 窗口大小
  size: Cookies.get('size') || 'medium'
};

const mutations = {
  toggleSideBar: (state) => {
    state.sidebar.opened = !state.sidebar.opened;
    state.sidebar.withoutAnimation = false;
    if (state.sidebar.opened) {
      Cookies.set('sidebarStatus', '1');
    } else {
      Cookies.set('sidebarStatus', '0');
    }
  },
  closeSideBar: (state, withoutAnimation) => {
    Cookies.set('sidebarStatus', '0');
    state.sidebar.opened = false;
    state.sidebar.withoutAnimation = withoutAnimation;
  },
  toggleDevice: (state, device) => {
    state.device = device;
  },
  setSize: (state, size) => {
    state.size = size;
    Cookies.set('size', size);
  }
};

const actions = {
  toggleSideBarAsync({ commit, state }) {
    return new Promise((resolve) => {
      commit('toggleSideBar');
      resolve(state.sidebar);
    });
  },
  closeSideBarAsync({ commit, state }, { withoutAnimation }) {
    return new Promise((resolve) => {
      commit('closeSideBar', withoutAnimation);
      resolve(state.sidebar);
    });
  },
  toggleDeviceAsync({ commit, state }, device) {
    return new Promise((resolve) => {
      commit('toggleDevice', device);
      resolve(state.device);
    });
  },
  setSizeAsync({ commit, state }, size) {
    return new Promise((resolve) => {
      commit('setSize', size);
      resolve(state.size);
    });
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
