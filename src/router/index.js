/**
 * 前端路由
 */

import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

import Layout from '@/layout';

/**
 * 所有用户都拥有权限的路由
 */
const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  }, {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  }, {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    name: 'DashBoard',
    children: [{
      path: 'dashboard',
      name: 'DashBoardPage',
      component: () => import('@/views/dashboard/index'),
      meta: {
        title: 'DashBoard',
        icon: 'dashboard'
      }
    }]
  }, {
    // 用户查询
    path: '/userQuery',
    component: Layout,
    redirect: '/userQuery',
    name: 'Query',
    children: [{
      path: '/userQuery/userQuery',
      name: 'userQuery',
      component: () => import('@/views/userQuery/userQuery'),
      meta: {
        title: '用户查询'
      }
    }, {
      path: '/userQuery/userGrowth',
      name: 'userGrowth',
      component: () => import('@/views/userQuery/userGrowth'),
      meta: {
        title: '新增用户记录'
      }
    }, {
      path: '/userQuery/chargeRecord',
      name: 'chargeRecord',
      component: () => import('@/views/userQuery/chargeRecord'),
      meta: {
        title: '充值记录'
      }
    }, {
      path: '/userQuery/propsChange',
      name: 'propsChange',
      component: () => import('@/views/userQuery/propsChange'),
      meta: {
        title: '玩家道具变化查询'
      }
    }]
  }, {
    // 活动数据统计
    path: '/activeStatistics',
    component: Layout,
    redirect: '/activeStatistics',
    name: 'activeStatistics',
    children: [{
      path: '/activeStatistics/draw',
      name: 'draw',
      component: () => import('@/views/activeStatistics/draw'),
      meta: {
        title: '抽奖活动统计'
      }
    }, {
      path: '/activeStatistics/drawRecord',
      name: 'drawRecord',
      component: () => import('@/views/activeStatistics/drawRecord'),
      meta: {
        title: '抽奖记录'
      }
    }, {
      path: '/activeStatistics/taskData',
      name: 'taskData',
      component: () => import('@/views/activeStatistics/taskData'),
      meta: {
        title: '活动任务数据统计'
      }
    }, {
      path: '/activeStatistics/giveActive',
      name: 'giveActive',
      component: () => import('@/views/activeStatistics/giveActive'),
      meta: {
        title: '充值兑换赠送统计'
      }
    }, {
      path: '/activeStatistics/hallTaskRecord',
      name: 'hallTaskRecord',
      component: () => import('@/views/activeStatistics/hallTaskRecord'),
      meta: {
        title: '大厅任务完成记录'
      }
    }, {
      path: '/activeStatistics/blueDiamond',
      name: 'blueDiamond',
      component: () => import('@/views/activeStatistics/blueDiamond'),
      meta: {
        title: '蓝钻充值统计'
      }
    }, {
      path: '/activeStatistics/goldExchange',
      name: 'goldExchange',
      component: () => import('@/views/activeStatistics/goldExchange'),
      meta: {
        title: '金币兑换统计'
      }
    }, {
      path: '/activeStatistics/contributionExchange',
      name: 'contributionExchange',
      component: () => import('@/views/activeStatistics/contributionExchange'),
      meta: {
        title: '贡献值兑换统计'
      }
    }, {
      path: '/activeStatistics/propsBuy',
      name: 'propsBuy',
      component: () => import('@/views/activeStatistics/propsBuy'),
      meta: {
        title: '道具购买数据统计'
      }
    }, {
      path: '/activeStatistics/propsBuyRecord',
      name: 'propsBuyRecord',
      component: () => import('@/views/activeStatistics/propsBuyRecord'),
      meta: {
        title: '道具购买数记录'
      }
    }]
  }, {
    // 数据统计
    path: '/dataStatistics',
    component: Layout,
    redirect: '/dataStatistics',
    name: 'dataStatistics',
    children: [{
      path: '/dataStatistics/active',
      name: 'active',
      component: () => import('@/views/dataStatistics/active'),
      meta: {
        title: '活跃统计'
      }
    }]
  }, {
    path: '*',
    redirect: '/404',
    hidden: true
  }];
/**
 * 路由实例化
 */
function createRouter() {
  return new Router({
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
  });
}

const router = createRouter();

/**
 * 路由重置
 */
function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher;
}

/**
 * 异步路由
 */
const asyncRoutes = [];

export default router;
export {
  constantRoutes,
  asyncRoutes,
  resetRouter
};
