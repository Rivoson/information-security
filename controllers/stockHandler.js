const axios = require("axios");
require("dotenv").config();

const getStockPrice = async (stockName) => {
  //check for valid stockName
  if (stockName === "") throw "Stock symbol cannot be empty";
  const url = `https://stock-price-checker-proxy.freecodecamp.rocks/v1/stock/${stockName}/quote`;

  try {
    //call external api
    const response = await axios.get(url);
    //get data from api
    const stockData = await response.data;
    console.log(stockData);
    return parseFloat(stockData["latestPrice"]);
    //filter out today's recent time data
    const todaysStock = stockData["Time Series (5min)"];
    //check for valid response
    if (todaysStock === undefined)
      throw `Unable to fetch information for stock symbol: ${stockName}`;
    //filter out lastest closing stock
    const closingStock = todaysStock[Object.keys(todaysStock)[0]];
    //price of closing stock
    const stockPrice = closingStock["4. close"];
    return parseFloat(stockData["latestPrice"]);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getStockPrice,
};
