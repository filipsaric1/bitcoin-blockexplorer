const axios = require("axios");
const { COINMARKETCAP_API_KEY } = process.env;

const requestOptions = {
  headers: {
    "X-CMC_PRO_API_KEY": COINMARKETCAP_API_KEY,
  },
};

const convertToUsd = async (value = 10) => {
  const data = await axios
    .get(
      `https://pro-api.coinmarketcap.com/v1/tools/price-conversion?amount=${value}&symbol=BTC&convert=USD`,
      requestOptions
    )
    .then((res) => res.data);
  return data;
};

module.exports = { convertToUsd };
