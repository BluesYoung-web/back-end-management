/**
 * 专门管理 sessionStorage 存储
 */

const keys = {
  userInfo: 'userInfo',
  roleArr: 'roleArr'
};
/**
 * 设置用户信息
 * @param {Object} userInfo
 */
function setUserInfo(userInfo) {
  let obj = {
    admin_name: '',
    real_name: '',
    phone_number: '',
    role_id: [],
    role_name: [],
    autoid: 0,
    is_enable: 1,
    menuBar: []
  };
  obj = { ...userInfo };
  sessionStorage.setItem(keys.userInfo, JSON.stringify(obj));
}
/**
 * 获取用户信息
 */
function getUserInfo() {
  return JSON.parse(sessionStorage.getItem(keys.userInfo));
}
/**
 * 设置用户独有的导航列表
 * @param {Array} roleArr
 */
function setRoleArr(roleArr) {
  sessionStorage.setItem(keys.roleArr, JSON.stringify(roleArr));
}
/**
 * 获取用户独有的导航列表
 */
function getRoleArr() {
  return JSON.parse(sessionStorage.getItem(keys.roleArr));
}

export {
  getUserInfo,
  setUserInfo,
  getRoleArr,
  setRoleArr
};
