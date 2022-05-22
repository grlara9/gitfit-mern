//middleware , functions executed during the req res
const errorHandler = (err, req, res, next) => {
    //500 internal server error
    const statusCode = res.statusCode ? res.statusCode : 500
  
    res.status(statusCode)
  
    res.json({
      message: err.message,
      //additional info only when in development mode
      stack: process.env.NODE_ENV === 'production' ? null : err.stack,
    })
  }
  
  module.exports = {
    errorHandler,
  }