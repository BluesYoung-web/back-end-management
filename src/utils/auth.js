/**
 * 用户认证(操作 Cookie)
 */

import Cookies from 'js-cookie';

const TokenKey = 'www.laiyouxi.com';

/**
 * 获取 token
 */
function getToken() {
  return Cookies.get(TokenKey);
}
/**
 * 设置 token
 * @param {string} key token
 */
function setToken(key) {
  const { token, admin_id: autoid } = key;
  return Cookies.set(TokenKey, { token, autoid });
  // return Cookies.set(TokenKey, token);
}
/**
 * 删除 token
 */
function removeToken() {
  return Cookies.remove(TokenKey);
}

export {
  getToken,
  setToken,
  removeToken
};
