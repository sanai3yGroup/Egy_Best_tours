const bcrypt =require('bcrypt');
const saltRounds=process.env.SALT_ROUNDS;
const ApiError = require('./ApiError')

exports.hashPassword=async function(password)
{
    
  return res=  await bcrypt.hash(password,10,(err,hash)=>{
        if(err) return next(new ApiError(500, err))
       return hash
    })

}