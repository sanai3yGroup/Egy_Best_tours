const Mail = require("../module/Mailes");
const ApiError = require("../Utilites/ApiError");
exports.creatMail = async (req, res, next) => {
  try {
    const mail= await Mail.create(req.body);
    if(!mail) return next(new ApiError(404,"error creating mail"));
    res.json({
        statusCode:200,
        message:'the mail successfully created'
    })
  } catch (err) {
    next( new ApiEorr(500,'the server occurred an error creating'))
  }
};

exports.getMails = async (rea, res, next) => {
    try{
        const mails= await Mail.find();
        if(!mails) return next(ApiError(400,'error getting data'));
           res.json({
            statusCode:200,
            data:mails
            
           })
    }catch(err){
        next( new ApiEorr(500,'the server occurred an error'))
    }
};
