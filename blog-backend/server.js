const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

// setup express
const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// setup routes
express.Router().get("/hello", (req, res) => {
  res.send("Hello world");
});
app.use("/posts", require("./routes/postRoutes"));

// setup mongoose

mongoose.connect(
  process.env.MONGODB_URI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) {
      console.log(err);
    }
    console.log("MongoDB connection success !!!");
  }
);

app.listen(PORT, () => console.log(`Server running on Port ${PORT}`));
