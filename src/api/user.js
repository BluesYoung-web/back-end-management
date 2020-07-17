import { removeToken } from '@/utils/auth';
import { requestWithoutToken, basicRequest, arrayRequest, longRequest } from '@/utils/polyRequest';

/**
 * 请求配置
 */
const req = {
  login: {
    com: 10000,
    task: 1
  },
  loginOut: {
    com: 10000,
    task: 2
  },
  getUserInfo: {
    com: 10000,
    task: 3
  },
  modifyPwd: {
    com: 10000,
    task: 24
  }
};
/**
 * 用户登录
 * @param {Object} params 请求参数
 */
function login(params) {
  params = {
    ...req.login,
    ...params
  };
  return requestWithoutToken(params);
}
/**
 * 退出登录，重定向到登录页
 */
function loginOut() {
  basicRequest(req.loginOut).then((res) => {
    if (res.status === 0) {
      removeToken();
      location.reload();
    }
  });
}
/**
 * 获取用户详细详细，包含可操作的导航列表
 */
function getUserInfo() {
  return basicRequest(req.getUserInfo);
}
/**
 * 用户修改密码
 * @param {Object} params 请求参数
 */
function modifyPwd(params) {
  params = {
    ...params,
    ...req.modifyPwd
  };
  return basicRequest(params);
}

export {
  login,
  loginOut,
  getUserInfo,
  modifyPwd
};
