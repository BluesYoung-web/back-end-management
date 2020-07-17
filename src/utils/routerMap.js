/**
 * 路由映射
 */

const routerMap = new Map();

// 系统
routerMap.set('10000/10', '/system/node');
routerMap.set('10000/14', '/system/role');
routerMap.set('10000/19', '/system/admin');
// 产品
routerMap.set('10000/40', '/product/channel');
routerMap.set('10000/44', '/product/apply');
routerMap.set('10000/51', '/product/package');
routerMap.set('10000/55', '/product/gamesList');
routerMap.set('10000/102', '/product/coonfigList');
routerMap.set('10000/102/1', '/product/packetConfig');
routerMap.set('10000/102/2', '/product/platformConfig');
routerMap.set('10000/102/3', '/product/applicationList');
routerMap.set('10000/202', '/product/province');
routerMap.set('10000/501', '/product/indulge');

// 信息
routerMap.set('10000/61', '/information/sensitiveList');
routerMap.set('10000/65', '/information/inforList');
routerMap.set('10000/70', '/information/downUrlList');
routerMap.set('10000/75', '/information/downLinkList');
routerMap.set('10000/110', '/information/errorPrompt');
routerMap.set('10000/310', '/information/shareLinkList');
routerMap.set('10000/314', '/information/shareTypeList');

// 金币
routerMap.set('10000/105', '/goldCoin/goldList');

// 服务器
routerMap.set('10000/190', '/server/serverManagement');
routerMap.set('10000/204', '/server/state');

// 节点
routerMap.set('10000/110/1', '/nodeSwitch/clientClick');
routerMap.set('10000/110/2', '/nodeSwitch/serverClick');
routerMap.set('10000/110/3', '/nodeSwitch/gameclientClick');
routerMap.set('10000/115', '/nodeSwitch/switchList');
routerMap.set('10000/116', '/nodeSwitch/apkSwitch');
routerMap.set('10000/116/2', '/nodeSwitch/appSwitch');
routerMap.set('10000/116/3', '/nodeSwitch/gameSwitch');

// 公告
routerMap.set('10000/205', '/messageMan/announcementList');
routerMap.set('10000/219', '/messageMan/announcementFlow');
routerMap.set('10000/223', '/messageMan/announcementAudit');

// 道具商城
routerMap.set('10000/120', '/propShopping/propList');
routerMap.set('10000/130', '/propShopping/shopConfig');
routerMap.set('10000/140', '/propShopping/effectList');
routerMap.set('100001/150', '/propShopping/OptTimeList');
routerMap.set('10000/150', '/propShopping/sysCondList');
routerMap.set('10000/156', '/propShopping/userCondList');
routerMap.set('10000/450', 'propShopping/goldExchange');
routerMap.set('10000/450/2', 'propShopping/devoteExchange');
routerMap.set('10000/455', 'propShopping/commodity');

// 邮件
routerMap.set('10000/209', '/mail/mailList');
routerMap.set('10000/220', '/mail/mailAudit');
routerMap.set('10000/221', '/mail/mailFlow');

// 产品
routerMap.set('10000/214', '/product/region');
routerMap.set('10000/260', '/product/apkConfig');
routerMap.set('10000/271', '/product/appConfig');
routerMap.set('10000/277', '/product/gameConfig');

// 礼包
routerMap.set('10000/160', '/giftPackage/giftList');

// 赠送
routerMap.set('10000/161', '/reward/rewardList');

// 掉落
routerMap.set('10000/162', '/dropProduce/dropList');

// 联合查询
routerMap.set('10000/251', '/utilityFunction/queryCache');

// 匹配
routerMap.set('10001/3', '/match/matchTag');
routerMap.set('10001/7', '/match/deductionFee');
routerMap.set('10001/11', '/match/matchFormat');
routerMap.set('10001/15', '/match/gameRules');
routerMap.set('10001/19', '/match/matchList');
routerMap.set('10001/21', '/match/matchAudit');
routerMap.set('10001/27', '/match/matchFlow');

// 任务
routerMap.set('10000/300', '/task/taskList');
routerMap.set('10000/304', '/task/taskVerify');
routerMap.set('10000/305', '/task/taskWater');

// 活动
routerMap.set('10000/400', '/activity/ranking');
routerMap.set('10000/400/1', '/activity/luck');
routerMap.set('10000/400/2', '/activity/img');
routerMap.set('10000/400/3', '/activity/notice');
routerMap.set('10000/400/4', '/activity/recharge');
routerMap.set('10000/408', '/activity/signin');
routerMap.set('10000/601', '/activity/whiteList');
routerMap.set('10000/611', '/activity/activityAudit');
routerMap.set('10000/613', '/activity/activityFlow');

// 排名
routerMap.set('10001/31', '/rank/rankList');
routerMap.set('10001/36', '/rank/userExpList');
routerMap.set('10001/41', '/rank/deskList');

// 充值
routerMap.set('10000/620', '/recharge/goods');
routerMap.set('10000/625', '/recharge/give');

// 客服
routerMap.set('10000/505', '/customer/player');
routerMap.set('10000/505/1', '/customer/circle');
routerMap.set('10000/506', '/customer/playerAdd');
routerMap.set('10000/506/1', '/customer/circleAdd');

// 运营
routerMap.set('10000/510', '/userQuery/userQuery');
routerMap.set('10002/13', '/partner/partnerList');
routerMap.set('10002/18', '/partner/partnerShare');
routerMap.set('10002/19', '/identityList/identityList');
routerMap.set('10003/1', '/appFunInit/unbindList');
routerMap.set('10000/617', '/jackpot/stage');

// 反馈
routerMap.set('10000/619', '/appFunInit/customerFeedback');
routerMap.set('10000/622', '/player/playerFeedbackList');

export function getRouteUrl(path) {
  if (path !== undefined && routerMap.has(path)) {
    return routerMap.get(path);
  } else {
    return path;
  }
}
