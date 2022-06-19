//middleware , functions executed during the req res
const errorHandler = (err, req, res, next) => {
    //500 internal server error
    const statusCode = res.statusCode ? res.statusCode : 500
  
    res.status(statusCode)
   
    res.json({
      msg: err.msg,
      //additional info only when in development mode
      
    })
  }
  
  module.exports = {
    errorHandler,
  }