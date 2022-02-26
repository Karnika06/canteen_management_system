const ErrorHandler = require("../utils/errorhandler");

module.exports = (err, req, res, next) => {
  err.statuscode = err.statuscode || 500;
  err.message = err.message || "Internal Server Error";

  //wrong mongodb id error
  if (err.name === "CastError") {
    const message = `Resource not found. Invalid: ${err.path}`;
    err = new ErrorHandler(message, 400);
  }

  //mongoose duplicate key error
  if (err.code === 11000) {
    const message = `Duplicate ${Object.keys(err.keyValue)} entered`;
    err = new ErrorHandler(message, 400);
  }

  //wrong jwt error
  if (err.code === "JsonWebTokenError") {
    const message = `JSON Web Token is Invaild`;
    err = new ErrorHandler(message, 400);
  }

  //jwt expire error

  if (err.code === "TokenExpiredError") {
    const message = `Json web Token is Expired, try again.`;
    err = new ErrorHandler(message, 400);
  }

  res.status(err.statuscode).json({
    success: false,
    message: err.message,
  });
};
