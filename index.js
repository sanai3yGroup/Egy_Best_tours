var createError = require("http-errors");
// require("./Config");
var express = require("express");
var logger = require("morgan");
const path = require("path");
const cors = require("cors");
const connect = require("./configuration/conctionDb");
const { Router } = require("express");

const app = express();
// connect();

app.use(logger("dev"));
app.use(express.static(path.join(__dirname, "public")));
// Allow json data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())




app.use(function (req, res, next) {
    next(createError(404));
  });
  
  // error handler
  app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};
  
    // render the error message
    res.status(err.status || 500);
    res.json({
      message:" error  server",
  
    });
  });
  module.exports=Router()
  module.exports = app;