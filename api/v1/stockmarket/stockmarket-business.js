'use strict';
const request = require('request');
const fs = require('fs');
const csv = require('csvtojson');
const messageToBot = 'Bot says: {0} quote is ${1} per share.';

const getExternalFile = async(stockCode) => {
  return new Promise((resolve, reject) => {

    const url = 'https://stooq.com/q/l/?s={0}&f=sd2t2ohlcv&h&e=csv'.replace('{0}', stockCode.toLowerCase());
    const file = fs.createWriteStream("file.csv");

    let stream = request({
        uri: url,
        headers: {
          'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
          'Accept-Encoding': 'gzip, deflate, br',
          'Accept-Language': 'en-US,en;q=0.9,fr;q=0.8,ro;q=0.7,ru;q=0.6,la;q=0.5,pt;q=0.4,de;q=0.3',
          'Cache-Control': 'max-age=0',
          'Connection': 'keep-alive',
          'Upgrade-Insecure-Requests': '1',
          'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.106 Safari/537.36'
        },
        gzip: true
      })
      .pipe(file)
      .on('finish', () => {
        const converter = csv()
          .fromFile('file.csv')
          .then((json) => {
            console.log(json);
            if (json)
              return resolve(json[0].Close);
            else
              return resolve('Stock not found')
          })
      })
      .on('error', (error) => {
        reject(error);
      })
  });
}

const getStockInformation = async(stockCode) => {
  try {
    let responsePromise = {
      stockCode: stockCode,
      shareQuote: 0
    };
    responsePromise.shareQuote = await getExternalFile(stockCode);
    const msgDate = new Date();
    const composeMessage = msgDate.toISOString().replace(/T/, ' ').replace(/\..+/, '') + ' ' + messageToBot.replace('{0}', responsePromise.stockCode).replace('{1}', responsePromise.shareQuote);
    responsePromise.message = composeMessage;
    return responsePromise;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getStockInformation
};