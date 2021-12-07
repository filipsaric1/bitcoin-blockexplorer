const client = require("./client");

const getBlock = async (blockNum) => {
  const blockHash = await client.getBlockHash(blockNum);
  const blockInfo = await client.getBlock(blockHash);
  return blockInfo;
};

const getBlockByHash = async (blockHash) => {
  const blockInfo = await client.getBlock(blockHash);
  const blockStats = await client.getBlockStats(blockHash);
  return { ...blockInfo, ...blockStats };
};

const getTransactionFee = async (transaction) => {
  const outputSum = transaction.vout.reduce(
    (prev, { value }) => prev + value,
    0
  );

  let inputSum = 0;

  for (var i = 0; i < transaction.vin.length; i++) {
    const inputTransactionRaw = await client.getRawTransaction(
      transaction.vin[i].txid
    );
    const transactionDecoded = await client.decodeRawTransaction(
      inputTransactionRaw
    );
    const transactionInputSum = transactionDecoded.vout.reduce(
      (prev, { value }) => prev + value,
      0
    );
    inputSum += transactionInputSum;
  }

  return inputSum - outputSum;
};

const getTransaction = async (txid) => {
  const transactionRaw = await client.getRawTransaction(txid);
  const transactionInfo = await client.decodeRawTransaction(transactionRaw);
  const fee = await getTransactionFee(transactionInfo);
  const outputsSum = transactionInfo.vout.reduce(
    (prev, { value }) => prev + value,
    0
  );
  return {
    ...transactionInfo,
    fee,
    outputsSum,
    inputsSum: outputsSum + fee,
  };
};

const getLastBlock = async () => {
  const blockchain = await client.getBlockchainInfo();
  const lastBlock = blockchain.blocks;
  const block = await getBlock(lastBlock);
  return block;
};

module.exports = {
  getTransaction,
  getBlock,
  getLastBlock,
  getBlockByHash,
};
