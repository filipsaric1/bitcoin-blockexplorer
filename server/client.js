const Client = require("bitcoin-core");
const { BLOCKCHAIN_HOST, BLOCKCHAIN_PORT, USERNAME, PASSWORD } = process.env;

const client = new Client({
  host: BLOCKCHAIN_HOST,
  port: BLOCKCHAIN_PORT,
  username: USERNAME,
  password: PASSWORD,
});

module.exports = client;
