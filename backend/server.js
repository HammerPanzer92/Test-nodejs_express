const express = require("express");

//Necessary to use dotenv variable
const dotenv = require("dotenv").config();
const port = process.env.PORT;

//Connnect to MongoDB
const connectDB = require("./config/db");
connectDB();

const app = express();

//Middleware for treating request
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//Config Express to use the routes in the post.routes.js file
app.use("/post", require('./routes/post.routes'));

//Launch the server
app.listen(port, () => console.log("Server listening at port " + port));