const express = require("express");
const userRoutes = require("./routes/user.route");
const cookieParser = require("cookie-parser");

const dotenv = require("dotenv");
const connect = require("./db/db");


dotenv.config();
const app = express();

connect();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/", userRoutes);

module.exports = app;
