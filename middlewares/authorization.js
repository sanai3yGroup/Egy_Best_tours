const jwt  =require('jsonwebtoken');
const SECRET_KEY=process.env.SECRET_KEY
const User= require('../Models/User');
const ApiError = require('../Utilites/ApiError');



exports.authorization=async(req,res,next)=>{
try{
    const token = req.cookies.get('token');
}catch(err){
    next(new ApiError(500,'the server returned an error'))
}


}
