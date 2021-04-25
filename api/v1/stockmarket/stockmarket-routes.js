'use strict';

const Controller = require('./stockmarket-controller');
const Validator = require('./stockmarket-schema');
const basePath = '/v1/stockmarket';

module.exports = function(app) {
  app.get(`${basePath}/:stockCode`, function(req, res) {
    return Controller.getStockMarketShare(req, res);
  });
}

// exports.register = (server, options, next) => {
//   server.route([{
//     method: 'GET',
//     path: `${basePath}/{stockCode}`,
//     config: {
//       description: 'v1 - Get stockmarket share value',
//       tags: ['api'],
//       handler: Controller.getStockMarketShare,
//       validate: Validator.queryParamStockMarketShare,
//       notes: 'v1_get_stockmarket'
//     }
//   }]);
//   next();
// };

// exports.register.attributes = {
//   name: 'v1-stock-market-share',
//   version: '1.0.0'
// };