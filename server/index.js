require("dotenv").config();

const express = require("express");
const app = express();
const port = 4000;
const client = require("./client");
var cors = require("cors");

const { getTransaction, getBlock, getLastBlock } = require("./utils");
const { convertToUsd } = require("./coinmarketcap");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: false,
  })
);

app.get("/", async (req, res) => {
  try {
    if (!req.query) {
      return res.status(404).send("Not found");
    }
    const { method, parameters } = req.query;

    if (!method) {
      return res.status(404).send("Not found");
    }
    const batch = [
      { method, parameters: parameters ? parameters.split(",") : null },
    ];
    const data = await client.command(batch);
    return res.json(data);
  } catch {
    return res.status(404).send("Not found");
  }
});

app.get("/convert/:amount", async (req, res) => {
  try {
    const { amount } = req.params;

    if (!amount) {
      return res.status(404).send("Not found");
    }
    const convertData = await convertToUsd(amount);

    return res.json(convertData.data.quote.USD.price);
  } catch {
    return res.status(404).send("Not found");
  }
});

app.get("/transaction/:txid", async (req, res) => {
  try {
    const { txid } = req.params;
    if (!txid) {
      return res.status(404).send("Not found");
    }
    const transaction = await getTransaction(txid);
    return res.json(transaction);
  } catch {
    return res.status(404).send("Not found");
  }
});

app.get("/block/:blockIndex", async (req, res) => {
  try {
    const { blockIndex } = req.params;
    if (!blockIndex) {
      return res.status(404).send("Not found");
    }
    const block = await getBlock(parseInt(blockIndex));
    return res.json(block);
  } catch {
    return res.status(404).send("Not found");
  }
});

app.get("/lastBlock", async (req, res) => {
  try {
    const block = await getLastBlock();
    return res.json(block);
  } catch {
    return res.status(404).send("Not found");
  }
});

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});
