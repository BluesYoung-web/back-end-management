/**
 * 页面公共配置
 */
const data = {
  'show_type': {
    0: '0-无',
    1: '1-新游',
    2: '2-限时',
    3: '3-热门',
    4: '4-推荐'
  }
};

export function pagesPublicData(a) {
  return data[a];
}
