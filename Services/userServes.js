const User =require('../Models/User');
const ApiError=require('../Utilites/ApiError');
const bcrypt =require('bcrypt');
const jwt =require('jsonwebtoken');
const sendMail= require('./../Utilites/sendMail');
const SECRET_KEY=process.env.SECRET_KEY
const {hashPassword} = require('./../Utilites/hashPassword');
exports.createUser=async(req,res,next)=>{
 const password=req.body.password;
  const hashPassword= await bcrypt.hash("password",10);
  const user =await User.create({password :hashPassword,
    name:"ahmed ali",
  email:"aboalhassanabdo769@gmail.com",});
  res.json(user)
}

exports.login=async (req, res,next)=>
{
const user = await User.findOne({email:req.body.email});
if(!user) return next(new ApiError(404, "User not registered"));
const valPassword= await bcrypt.compare(req.body.password, user.password);
if(!valPassword) return next( new ApiError(402,"invalid password"));
const token= await jwt.sign(user.email,SECRET_KEY)
res.json({
  statusCode:200,
  message:"the user is aouthrized",
  token:token,
  id:user._id
})
}

exports.getUser=async(req, res, next)=>{

   
  try{
  
     const user =await User.findById(req.params.id);
     res.json({
      statusCode:200,
      data:user
     })
  }catch(e){
next(new ApiError(500,'the error occurred server '))
  }
}

exports.updateUser=async (req, res, next)=>
{
  try{
    if(!req.body.password){
      const user = await User.findByIdAndUpdate(req.params.id,{
        email:req.body.email,
       name:req.body.name});
      if(!user) return next(new ApiError(404,'the user not updated'));
      res.json({statusCode:200,
      message:"the user updated",
      data:user})
    }else{
      let password= await bcrypt.hash(req.body.password,10);
      const user = await User.findByIdAndUpdate(req.params.id,{...req.body,password:password});
    if(!user) return next(new ApiError(404,'the user not updated'));
    user.save()
    res.json({statusCode:200,
    message:"the user updated",
    data:user})
    }
    
  }catch(e){
    next(new ApiError(500,"the server occurred an error"))
  }  


}

exports.forGetPassword=async(req, res, next )=>
{
     try{
      const email= req.params.email;
      const user= await User.findOne({email:email});
      if(!user) return next(new ApiError(401, "User not authenticated"));
      let verifyNumber= Math.floor(Math.random() * 100000) + 1;
      console.log(user);
      sendMail(user.email,verifyNumber);
      res.json({
        statusCode:200,
        message:"you get verification number ",
        data:verifyNumber
      })
     }catch(err){
      next(new ApiError(500,err))
     }
}