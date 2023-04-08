const Package =require('../Models/Package');
const ApiError=require('../Utilites/ApiError');
exports.createPackage=async(req,res,next)=>{

  try{
    if(!req.body)
    {
      throw 'error body it is empty'
    }
 const package =await Package.create(req.body);
 res.json({
  statusCode: 200,
  message: "you create a Package",
  data: package,
});
  }
  catch(err)
  {
    next(new ApiError(500,err))
  }
}
exports.getPackage=async(req,res,next)=>
{
  try {
    const id = req.params.id;
    const package = await Package.findById(id)
    .populate('location')
    .populate('category')
    // .populate('reviewes')
    if(!package) return next(new ApiError(404,"THE Package IS NOT FOUND"))
    res.json({
      statusCode: 200,
      message: "you get a Package by id",
      data: package,
    });
  } catch (err) {
    next(new ApiError(500, "the server returned an error"));
  }
}
exports.getAllPackages=async(req,res,next)=>
{
  try{
    const pageNumber =req.query.pageNumber || 1;
    const limit = 15;
    const skip = (pageNumber - 1) * limit;
    const packages = await Package.find()
    .populate('location')
    .populate('category')
    // .populate('reviewes')
    .skip(skip).limit(limit);
    const numOfPage=   Math.ceil(( await Package.find().count()) / limit) ;
   
    if (packages.length <= 0)
      return next(new ApiError(404, "not found any trips"));
    res.json({
      statusCode: 200,
      numOfPage:numOfPage,
      message: "you have all packages successfully",
      data: packages,
      
    });
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
  var deletedItem=await Package.findByIdAndDelete(req.params.id)
  if(!deletedItem)
  return next(new ApiError(404,'THE TRIPE IS NOT FOUND'))
  res.json({statusCode:200,
    message:"the package deleted",
    data:deletedItem})
  }
  catch(e)
  {
    next(new ApiError(500,"the server occurred an error"))
  }
}