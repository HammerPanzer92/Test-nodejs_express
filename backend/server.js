const express = require("express");

const dotenv = require("dotenv").config();
const port = process.env.PORT;

const app = express();

//Middleware for treating request
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use("/post", require('./routes/post.routes'));

//Launch the server
app.listen(port, () => console.log("Server listening at port " + port));