import defaultSettings from '@/settings';

const title = defaultSettings.title || '来游戏';
/**
 * @param {string} pageTitle
 * @returns
 */
function getPageTitle(pageTitle) {
  return pageTitle ? `${pageTitle} - ${title}` : `${title}`;
}

export {
  getPageTitle
};
