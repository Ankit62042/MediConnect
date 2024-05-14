const { MongoClient } = require("mongodb");
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
require("dotenv").config();
const MONGO_URI='mongodb+srv://ankitkr62042:0JuTDz7Fgi7OQ6AG@cluster0.ilsgxpf.mongodb.net/MediConnect'
const client = mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("DB connected");
  })
  .catch((error) => {
    console.log("Error: ", error);

    return error;
  });

module.exports = client;
