const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config({ path: "../.env" });
const router = require("./routes/message");
const path = require("path");

const app = express();
app.use(express.json());
app.use(cors());
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI)
  .then((response) => {
    app.listen(PORT, console.log(`listening on port ${PORT}`));
    console.log("connected to mongo-db");
  })
  .catch((err) => console.log(err));

app.use(router);
