const mongoose = require("mongoose");

//Try to connect to MongoDB
const connectDB = async () => {
  try {
    mongoose.set("strictQuery", false);
    mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");
  } catch (err) {
    //If failed, log the error and shutdown the server
    console.log(err);
    process.exit();
  }
};

module.exports = connectDB;