const globalError=(err,req,res,next)=>{
    res.status(err.statusCode).json({
        status:err.statusCode,
        message:err.message,
        stack:err.stack,
    })
}
module.exports= globalError;