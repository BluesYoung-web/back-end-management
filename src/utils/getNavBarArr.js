/**
 * 获取导航栏数组
 */

import { getUserInfo } from '@/api/user';
import { setUserInfo, setRoleArr } from '@/store/sessionStorage/index';

let roleArr = [];

/**
 * 遍历导航列表
 * @param {Array} arr
 * @param {Number} num 是否需要初始化
 */
function forMenuBar(arr, num) {
  if (num === 1) {
    roleArr = [];
  }
  for (const i of arr) {
    if (i.node_path !== '') {
      roleArr.push(i.node_path);
    }
    if (i.part instanceof Array && i.part.length > 0) {
      forMenuBar(i.part);
    }
  }
  return roleArr;
}
/**
 * 获取导航栏数组
 */
async function getNavBarArr() {
  return await getUserInfo().then((res) => {
    if (res.status === 0) {
      // 获取成功，存入 sessionStorage
      setUserInfo(res.data);
      setRoleArr(forMenuBar(res.data.menuBar, 1));
    }
  });
}

export {
  getNavBarArr
};
