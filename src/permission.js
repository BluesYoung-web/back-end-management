/**
 * 权限控制
 * 登录之后才允许进行操作
 */
import router from '@/router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { getToken } from '@/utils/auth';
import { getPageTitle } from '@/utils/getPageTitle';
import { getUserInfo } from '@/store/sessionStorage/index';

NProgress.configure({
  showSpinner: false
});

/**
 * 前置导航守卫
 */
router.beforeEach((to, from, next) => {
  NProgress.start();
  document.title = getPageTitle(to.meta.title);
  if (to.path === '/login') {
    next();
  } else {
    const token = getToken();
    const userInfo = getUserInfo();
    if (token && userInfo) {
      next();
      NProgress.done();
    } else {
      next(`/login?redirect=${to.path}`);
    }
  }
});

/**
 * 后置导航守卫
 */
router.afterEach(() => {
  NProgress.done();
});
