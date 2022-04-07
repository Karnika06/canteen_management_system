const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
var cors = require('cors');
app.use(cors())

const errorMiddleware = require("./middleware/error");

app.use(express.json());
app.use(cookieParser());

//route imports
const product = require("./routes/foodRoute");

const user = require("./routes/userRoute");

const order = require("./routes/orderRoute");

app.use("/api/v1", product);
app.use("/api/v1", user);
app.use("/api/v1", order);

//middleware for errors
app.use(errorMiddleware);




module.exports = app