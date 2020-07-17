/**
 * 封装多种不同类型的请求
 */
import request from '@/utils/request';
import { getToken } from '@/utils/auth';

/**
 * 对象传参
 * @param {Object} args
 */
function paramsGenerate(args) {
  let url = '?';
  for (const i in args) {
    url = url + i + '=' + args[i] + '&';
  }
  url = url.split('');
  url.pop();
  url = url.join('');
  return url;
}
/**
 * 对象传参，参数可以为数组
 * @param {Object} args
 */
function arrParamsGenerate(args) {
  let url = '?';
  for (const i in args) {
    const item = args[i];
    if (item instanceof Array) {
      url = url + i + '=' + JSON.stringify(item) + '&';
    } else {
      url = url + i + '=' + args[i] + '&';
    }
  }
  url = url.split('');
  url.pop();
  url = url.join('');
  return url;
}
/**
 * 不需要 token 的请求，默认 post 请求
 * @param {Object} param 请求参数
 * @param {string} method 请求方法
 */
function requestWithoutToken(param, method = 'post') {
  return request({
    url: paramsGenerate(param),
    method
  });
}
/**
 * 需要 token 的普通请求，默认 post 请求
 * @param {Object} param 请求参数
 * @param {string} method 请求方法
 */
function basicRequest(param, method = 'post') {
  const token = JSON.parse(getToken()).token;
  const autoid = JSON.parse(getToken()).autoid;
  param['token'] = token;
  param['aid'] = autoid;
  return request({
    url: paramsGenerate(param),
    method
  });
}
/**
 * 需要 token 的请求，参数中含有数组，默认 post 请求
 * @param {Object} param 请求参数
 * @param {string} method 请求方法
 */
function arrayRequest(param, method = 'post') {
  const token = JSON.parse(getToken()).token;
  const autoid = JSON.parse(getToken()).autoid;
  param['token'] = token;
  param['aid'] = autoid;
  return request({
    url: arrParamsGenerate(param),
    method
  });
}
/**
 * 需要 token 的请求，有些字段需要放到 body 里面，默认 post 请求
 * @param {Object} param 请求参数
 * @param {Object} data 需要放到 body 里面的参数
 * @param {string} method 请求方法
 */
function longRequest(param, data, method = 'post') {
  const token = JSON.parse(getToken()).token;
  const autoid = JSON.parse(getToken()).autoid;
  param['token'] = token;
  param['aid'] = autoid;
  return request({
    url: paramsGenerate(param),
    method,
    data
  });
}

export {
  requestWithoutToken,
  basicRequest,
  arrayRequest,
  longRequest
};
