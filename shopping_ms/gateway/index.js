const express = require("express");
const cors = require("cors");
const proxy = require('express-http-proxy')

const app = express();
app.use(cors())
app.use(express.json());


app.use('/customer', proxy('http://localhost:8010'))
app.use('/shopping', proxy('http://localhost:8030'))
app.use('/', proxy('http://localhost:8020')) //products


app.listen(8040, () => {
  console.log("gateway running on port 8040");
});