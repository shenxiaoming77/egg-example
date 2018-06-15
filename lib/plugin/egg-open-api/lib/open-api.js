'use strict';

module.exports = app => {
  const openApi = {
    async getIpLocation(ip) {
      const data = await app.aliyunApiGateway.get(
        `http://iploc.market.alicloudapi.com/v3/ip?ip=${ip}`
      );
      return data;
    },
    async getMobileLocation(mobile) {
      const data = await app.aliyunApiGateway.get(
        `http://jshmgsdmfb.market.alicloudapi.com/shouji/query?shouji=${mobile}`
      );
      return data.result;
    },
    async geo(queryString) {
      const data = await app.aliyunApiGateway.get(
        `http://geo.market.alicloudapi.com/v3/geocode/geo?${queryString}`
      );
      return data;
    },
    async regeo(queryString) {
      const data = await app.aliyunApiGateway.get(
        `http://regeo.market.alicloudapi.com/v3/geocode/regeo?${queryString}`
      );
      return data;
    },
  };

  app.coreLogger.info('[egg-egg-open-api] setup');
  app.openApi = openApi;
};
