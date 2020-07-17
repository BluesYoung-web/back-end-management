/**
 * 所有的路由状态
 */

import { asyncRoutes, constantRoutes } from '@/router';

const state = {
  routes: [],
  addRoutes: []
};

const mutations = {
  setRoutes: (state, routes) => {
    state.addRoutes = routes;
    state.routes = constantRoutes.concat(routes);
  }
};

const actions = {
  generateRoutesAsync({ commit }, roles) {
    return new Promise((resolve) => {
      let accessedRoutes = null;
      if (roles.includes('admin')) {
        accessedRoutes = asyncRoutes || [];
      } else {
        accessedRoutes = filterAsyncRoutes(asyncRoutes, roles);
      }
      commit('setRoutes', accessedRoutes);
      resolve(accessedRoutes);
    });
  }
};
/**
 * 权限过滤
 * @param {Array} routes
 * @param {Array} roles
 */
function filterAsyncRoutes(routes, roles) {
  const res = [];
  routes.forEach((route) => {
    const temp = { ...route };
    if (hasPermission(roles, temp)) {
      if (temp.children) {
        temp.children = filterAsyncRoutes(temp.children, roles);
      }
      res.push(temp);
    }
  });
}
/**
 * 权限判断
 * @param {Array} roles
 * @param {Object} route
 */
function hasPermission(roles, route) {
  if (route.meta && route.meta.roles) {
    return roles.some((role) => route.meta.roles.includes(role));
  } else {
    return true;
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
