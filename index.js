const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;
const morgan = require("morgan");
const mongoose = require("mongoose");
const controller = require("./controller");

app.use(cors());
app.use(express.json());
app.use(morgan("common"));

app.use("/memo", controller.memo());

mongoose.connect("mongodb://localhost:27017/memoApp", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
