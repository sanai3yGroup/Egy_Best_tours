const Package =require('../Models/Package');
const ApiError=require('../Utilites/ApiError');
exports.createPackage=async(req,res,next)=>{

  try{
    if(!req.body)
    {
      throw 'error body it is empty'
    }
 const package =await Package.create(req.body);
  res.json(package)
  }
  catch(err)
  {
    next(new ApiError(500,err))
  }
}
exports.getAllPackages=async(req,res,next)=>
{
  try{
    const packages =await Package.find();
    res.json(packages)
  }
  catch(err)
  {
    next(new ApiError(500,err))
  }
}

exports.updatePackage=async (req, res, next)=>
{
  try{
    const package = await Package.findByIdAndUpdate(req.params.id,req.body);
    if(!package) return next(new ApiError(404,'the user not updated'));
    res.json({statusCode:200,
    message:"the package updated",
    data:package})
  }catch(e){
    next(new ApiError(500,"the server occurred an error"))
  }  
}

exports.deletePackage=async (req, res, next)=>
{
  try{
  var deletedItem=await Package.deleteOne({id:req.params.id})
  res.json({statusCode:200,
    message:"the package deleted",
    data:deletedItem})
  }
  catch(e)
  {
    next(new ApiError(500,"the server occurred an error"))
  }
}