/**
 * 取值函数模块
 */
const getters = {
  sidebar: (state) => state.app.sidebar,
  size: (state) => state.app.size,
  device: (state) => state.app.device,

  visitedViews: (state) => state.tagsView.visitedViews,
  cachedViews: (state) => state.tagsView.cachedViews,

  leftArr: (state) => state.leftNav.leftArr,

  fixedHeader: (state) => state.settings.fixedHeader,
  tagsView: (state) => state.settings.tagsView,
  sidebarLogo: (state) => state.settings.sidebarLogo,

  routes: (state) => state.routes.routes

};

export default getters;
