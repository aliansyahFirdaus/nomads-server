if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const routes = require("./routes");
const err = require("./errors");
const cors = require("cors");
const port = process.env.PORT || 3000;

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/", routes);
app.use(err);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
