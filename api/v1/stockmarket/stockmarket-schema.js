'use strict';
const Joi = require('joi');

const queryParamStockMarketShare = {
  params: {
    stockCode: Joi.string().trim().required()
  }
};

module.exports = {
  queryParamStockMarketShare
};