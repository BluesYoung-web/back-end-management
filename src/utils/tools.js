/**
 * 一些工具函数
 */

/**
 * 解码转义后的 Unicode 字符串
 * @param {string} str 转义之后的 Unicode 字符串
 */
function decodeTransferredString(str) {
  str = JSON.stringify(str).split('\\');
  str = str.filter((item) => item.match(/u/));
  str = str.map((item) => item.replace('u', '0x'));
  str[str.length - 1] = str[str.length - 1].slice(0, str[str.length - 1].length - 1);
  str = str.map((item) => parseInt(item));
  return String.fromCharCode(...str);
}
/**
 * 将查询字符串解析为对象
 * @param {string} url 请求链接
 */
function param2Object(url) {
  const search = url.split('?')[1];
  if (!search) {
    return {};
  }
  return JSON.parse(
    '{"' +
    decodeURIComponent(search)
      .replace(/"/g, '\\"')
      .replace(/&/g, '","')
      .replace(/=/g, '":"')
      .replace(/\+/g, ' ') +
    '"}'
  );
}
/**
 * 时间格式化
 * @param {string | number} timestamp 要转换的时间戳
 * @param {string} format 转换后的格式
 */
function timeFormat(timestamp, format) {
  if (!Number(timestamp)) {
    return timestamp;
  } else {
    timestamp = Number(timestamp);
  }
  const formatArr = ['Y', 'M', 'D', 'h', 'm', 's'];
  const returnArr = [];
  const date = new Date(timestamp);
  returnArr.push(date.getFullYear());
  returnArr.push((date.getMonth() + 1).toString().padStart(2, '0'));
  returnArr.push((date.getDate()).toString().padStart(2, '0'));
  returnArr.push((date.getHours()).toString().padStart(2, '0'));
  returnArr.push((date.getMinutes()).toString().padStart(2, '0'));
  returnArr.push((date.getSeconds()).toString().padStart(2, '0'));
  for (const i in returnArr) {
    format = format.replace(formatArr[i], returnArr[i]);
  }
  return format;
}

export default {
  decodeTransferredString,
  param2Object,
  timeFormat
};
