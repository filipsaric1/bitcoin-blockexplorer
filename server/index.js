require("dotenv").config();

const express = require("express");
const app = express();
const port = 4000;
const client = require("./client");
var cors = require("cors");

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

app.get("/convert", async (req, res) => {
  try {
    if (!req.query) {
      return res.status(404).send("Not found");
    }
    const { value } = req.query;
    // convert to dollar
    return res.json();
  } catch {
    return res.status(404).send("Not found");
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
