/**
 * 项目入口文件
 */

import Vue from 'vue';
import 'normalize.css/normalize.css';
import ElementUI from 'element-ui';
import VueClipboard from 'vue-clipboard2';
import echarts from 'echarts';

import 'element-ui/lib/theme-chalk/index.css';
import '@/styles/index.scss';
import '@/icons';

import '@/permission';
import App from '@/App';
import router from '@/router';
import store from '@/store';

import { getToken } from '@/utils/auth';
import { getNavBarArr } from '@/utils/getNavBarArr';
import { pagesPublicData } from '@/utils/pagesPublicData';

Vue.use(VueClipboard);
Vue.use(ElementUI);
Vue.prototype.$echarts = echarts;
Vue.prototype.pagesPublicData = pagesPublicData;

// 刷新页面的时候，如果存在 token 就直接获取导航栏列表
if (getToken()) {
  getNavBarArr();
}

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  store,
  render: (h) => h(App)
});
