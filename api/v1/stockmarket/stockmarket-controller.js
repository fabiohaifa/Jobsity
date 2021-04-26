'use strict';

const httpStatus = require('http-status');
const HTTPStatus = require('http-status');
const _ = require('lodash');
const bot = require('../../../config/bot.js');
const business = require('./stockmarket-business.js');

const getStockMarketShare = async(request, reply) => {
  const options = {
    stockCode: request.params.stockCode,
    version: 'v1'
  };
  try {
    reply.httpStatus = httpStatus.OK;
    const stockInfo = await business.getStockInformation(options.stockCode);
    bot.sendMessage(request, stockInfo.message);
    options.response = stockInfo;
    reply.send(options);
  } catch (error) {
    const httpStatus = error.httpStatus || HTTPStatus.INTERNAL_SERVER_ERROR;
    const responseError = 'Error Occured' + error;
    reply.send(responseError).code(httpStatus);
  }
};

module.exports = {
  getStockMarketShare
};