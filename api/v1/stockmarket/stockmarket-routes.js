'use strict';

const Controller = require('./stockmarket-controller');
const Validator = require('./stockmarket-schema');
const basePath = '/v1/stockmarket';

module.exports = function(app) {
  app.get(`${basePath}/:stockCode`, function(req, res) {
    return Controller.getStockMarketShare(req, res);
  });
}