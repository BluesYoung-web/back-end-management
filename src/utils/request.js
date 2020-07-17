/**
 * 基于 Axios 的网络请求模块
 */

import axios from 'axios';
import { MessageBox, Message, Loading } from 'element-ui';
import { removeToken } from '@/utils/auth';

let loading;

function startLoading() {
  loading = Loading.service({
    lock: true,
    text: '拼命加载中...',
    background: 'rgb(255, 255, 255, 0)'
  });
}

function endLoading() {
  loading.close();
}
/**
 * 创建 Axios 实例
 */
const net = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5 * 1000
});
/**
 * 请求拦截
 */
net.interceptors.request.use((config) => {
  startLoading();
  return config;
}, (error) => {
  console.log(error);
  return Promise.reject(error);
});
/**
 * 响应拦截
 */
net.interceptors.response.use((response) => {
  endLoading();
  const res = response.data;
  if (res.status !== 0) {
    // 出错了
    if (res.status !== -1) {
      Message({
        message: res.msg || 'Error',
        type: 'error',
        duration: 5 * 1000
      });
    }
    // -1 登录信息异常
    if (res.status === -1) {
      MessageBox.confirm('您已注销，您可以取消停留在此页，或重新登录，确认注销', {
        confirmButtonText: '重新登录',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        removeToken();
        location.reload();
      });
    }
    return res;
  } else {
    return res;
  }
}, (error) => {
  endLoading();
  console.log(error);
  Message({
    message: error,
    type: 'error',
    duration: 5 * 1000
  });
});

export default net;
