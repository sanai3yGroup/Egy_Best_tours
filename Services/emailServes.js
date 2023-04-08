const Mail = require("../Models/Mailes");
const ApiError = require("../Utilites/ApiError");

const sendMessageTouser= require("../Utilites/sendMail");


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

exports.getMails = async (req, res, next) => {
    try{
      const data= req.body;
        const mails= await Mail.find();
        if(!mails ) return next(ApiError(400,'error not found mails'));
        mails.map((mail) =>{
          sendMessageTouser(mail.email,data);
        })
           res.json({
            statusCode:200,
            message:"the message send successfully",
           })
    }catch(err){
        next( new ApiError(500,'the server occurred an error'))
    }
};
