const User =require('.././module/User');



exports.createUser=async(req,res,next)=>{
  res.json("createUser")
}

exports.login=async (req, res,next)=>
{
   res.json("login")
}


exports.getUser=async(req, res, next)=>{

   res.json("getUser")
}

exports.updateUser=(req, res, next)=>
{
    
  res.json("updateUser")
}

exports.changePassword=async(req, res, next )=>
{
    res.json("cangePassword")
}