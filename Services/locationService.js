const Location =require('../Models/Location');
const ApiError=require('../Utilites/ApiError');
exports.createLocation=async(req,res,next)=>{

  try{
    if(!req.body)
    {
      throw 'error body it is empty'
    }
 const location =await Location.create(req.body);
 res.json({
  statusCode: 200,
  message: "you create a location",
  data: location,
});
  }
  catch(err)
  {
    next(new ApiError(500,err))
  }
}
exports.getLocation=async(req,res,next)=>
{
  try {
    const id = req.params.id;
    const location = await Location.findById(id);
    if(!location) return next(new ApiError(404,"THE Package IS NOT FOUND"))
    res.json({
      statusCode: 200,
      message: "you get a location by id",
      data: location,
    });
  } catch (err) {
    next(new ApiError(500, "the server returned an error"));
  }
}
exports.getAllLocation=async(req,res,next)=>
{
  try{
    const pageNumber =req.query.pageNumber || 1;
    const limit = 15;
    const skip = (pageNumber - 1) * limit;
    const locations = await Location.find().skip(skip).limit(limit);
   
    if (locations.length <= 0)
      return next(new ApiError(404, "not found any trips"));
    res.json({
      statusCode: 200,
      message: "you have all locations successfully",
      data: locations,
    });
  }
  catch(err)
  {
    next(new ApiError(500,err))
  }
}

exports.updateLocation=async (req, res, next)=>
{
  try{
    const location = await Location.findByIdAndUpdate(req.params.id,req.body);
    if(!location) return next(new ApiError(404,'the user not updated'));
    res.json({statusCode:200,
    message:"the location updated",
    data:location})
  }catch(e){
    next(new ApiError(500,"the server occurred an error"))
  }  
}

exports.deleteLocation=async (req, res, next)=>
{
  try{
  var deletedItem=await Location.findByIdAndDelete(req.params.id)
  if(!deletedItem)
  return next(new ApiError(404,'THE TRIPE IS NOT FOUND'))
  res.json({statusCode:200,
    message:"the location deleted",
    data:deletedItem})
  }
  catch(e)
  {
    next(new ApiError(500,"the server occurred an error"))
  }
}