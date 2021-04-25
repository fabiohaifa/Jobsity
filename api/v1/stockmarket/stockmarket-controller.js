'use strict';

const httpStatus = require('http-status');
const HTTPStatus = require('http-status');
const _ = require('lodash');
const bot = require('./bot.js');

/**
 * 
 * @param {*} request 
 * @param {*} reply 
 */
const getStockMarketShare = async(request, reply) => {
  const options = {
    stockCode: request.params.stockCode,
    version: 'v1'
  };
  try {
    reply.httpStatus = httpStatus.OK;
    // socket.broadcast.emit('chat message', 'bot', 'this is a bot message - stock: ' + options.stockCode);
    bot.sendMessage(request, 'this is a bot message - stock: ' + options.stockCode);

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