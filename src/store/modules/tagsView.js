/**
 * 标签选项卡的状态
 */
const state = {
  visitedViews: [],
  cachedViews: []
};
const mutations = {
  addVisitedView: (state, view) => {
    if (state.visitedViews.some((v) => v.path === view.path)) {
      return;
    }
    state.visitedViews.push(Object.assign({}, view, {
      title: view.meta.title || 'no-name'
    }));
  },
  addCachedView: (state, view) => {
    if (state.cachedViews.includes(view.name)) {
      return;
    }
    if (!view.meta.noCache) {
      state.cachedViews.push(view.name);
    }
  },
  delVisitedView: (state, view) => {
    for (const [i, v] of state.visitedViews.entries()) {
      if (v.path === view.path) {
        state.visitedViews.splice(i, 1);
        return;
      }
    }
  },
  delCachedView: (state, view) => {
    const index = state.cachedViews.indexOf(view.name);
    index > -1 && state.cachedViews.splice(index, 1);
  },
  delOthersVisitedView: (state, view) => {
    state.visitedViews = state.visitedViews.filter((v) => {
      return v.meta.affix || v.path === view.path;
    });
  },
  delOthersCachedView: (state, view) => {
    state.cachedViews = state.cachedViews.filter((v) => {
      return v.name === view.name;
    });
  },
  delAllVisitedViews: (state) => {
    const affixTags = state.visitedViews.filter((tag) => tag.meta.affix);
    state.visitedViews = affixTags;
  },
  delAllCachedViews: (state) => {
    state.cachedViews = [];
  },
  updateVisitedView: (state, view) => {
    for (let v of state.visitedViews) {
      if (v.path === view.path) {
        v = Object.assign(v, view);
        return;
      }
    }
  }
};
const actions = {
  addViewAsync({ dispatch }, view) {
    dispatch('addVisitedViewAsync', view);
    dispatch('addCachedViewAsync', view);
  },
  addVisitedViewAsync({ commit }, view) {
    commit('addVisitedView', view);
  },
  addCachedViewAsync({ commit }, view) {
    commit('addCachedView', view);
  },
  delViewAsync({ dispatch, state }, view) {
    return new Promise((resolve) => {
      dispatch('delVisitedViewAsync', view);
      dispatch('delCachedViewAsync', view);
      resolve({
        visitedViews: [...state.visitedViews],
        cachedViews: [...state.cachedViews]
      });
    });
  },
  delVisitedViewAsync({ commit, state }, view) {
    return new Promise((resolve) => {
      commit('delVisitedView', view);
      resolve([...state.visitedViews]);
    });
  },
  delCachedViewAsync({ commit, state }, view) {
    return new Promise((resolve) => {
      commit('delCachedView', view);
      resolve([...state.cachedViews]);
    });
  },
  delOthersViewsAsync({ dispatch, state }, view) {
    return new Promise((resolve) => {
      dispatch('delOthersVisitedViewsAsync', view);
      dispatch('delOthersCachedViewsAsync', view);
      resolve({
        visitedViews: [...state.visitedViews],
        cachedViews: [...state.cachedViews]
      });
    });
  },
  delOthersVisitedViewsAsync({ commit, state }, view) {
    return new Promise((resolve) => {
      commit('delOthersVisitedViews', view);
      resolve([...state.visitedViews]);
    });
  },
  delOthersCachedViewsAsync({ commit, state }, view) {
    return new Promise((resolve) => {
      commit('delOthersCachedViews', view);
      resolve([...state.cachedViews]);
    });
  },
  delAllViewsAsync({ dispatch, state }) {
    return new Promise((resolve) => {
      dispatch('delAllVisitedViewsAsync');
      dispatch('delAllCachedViewsAsync');
      resolve({
        visitedViews: [...state.visitedViews],
        cachedViews: [...state.cachedViews]
      });
    });
  },
  delAllVisitedViewsAsync({ commit, state }) {
    return new Promise((resolve) => {
      commit('delAllVisitedViews');
      resolve([...state.visitedViews]);
    });
  },
  delAllCachedViewsAsync({ commit, state }) {
    return new Promise((resolve) => {
      commit('delAllCachedViews');
      resolve([...state.cachedViews]);
    });
  },
  updateVisitedView({ commit }, view) {
    commit('updateVisitedView', view);
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
