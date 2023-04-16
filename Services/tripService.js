const Trip =require('../Models/Trip');
const ApiError=require('../Utilites/ApiError');
exports.createTrip=async(req,res,next)=>{

  try{
    if(!req.body)
    {
      return next(new ApiError(404,"body it is empty"))
    }
    let trip= await Trip.findOne({package:req.body.package,checkin:req.body.checkin,checkout:req.body.checkout});
    if(!trip)
    {
      trip =await Trip.create(req.body);
    }
    else
    {
      trip= await Trip.findByIdAndUpdate(trip.id,{ "$push": { "users": req.body.users} })
    }
    

 res.json({
  statusCode: 200,
  message: "you create a trip",
  data: trip,
});
  }
  catch(err)
  {
    next(new ApiError(500,err))
  }
}
exports.getTrip=async(req,res,next)=>
{
  try {
    const id = req.params.id;
    const trip = await Trip.findById(id).populate('Category')

    if(!trip) return next(new ApiError(404,"THE trip IS NOT FOUND"))
    res.json({
      statusCode: 200,
      message: "you get a trip by id",
      data: trip,
    });
  } catch (err) {
    next(new ApiError(500, "the server returned an error"));
  }
}
exports.getAllTrips=async(req,res,next)=>
{
// fixe isssue here @AliAbdo111
  try{
    const pageNumber =req.params.pageNumber || 1;
    const limit = 15;
    const skip = (pageNumber - 1) * limit;
    const trips = await Trip.find()
    .populate({ path: 'package', select: 'title' })
    .skip(skip).limit(limit);
    const numOfPage=   Math.ceil(( await Trip.find().count()) / limit) ;
   
    if (trips.length <= 0)
      return next(new ApiError(404, "not found any trips"));
    res.json({
      statusCode: 200,
      numOfPage:numOfPage,
      message: "you have all trips successfully",
      data: trips,
      
    });
  }
  catch(err)
  {
    next(new ApiError(500,err))
  }
}

exports.updateTrip=async (req, res, next)=>
{
  try{
    const trip = await Trip.findByIdAndUpdate(req.params.id,req.body);
    if(!trip) return next(new ApiError(404,'the user not updated'));
    res.json({statusCode:200,
    message:"the trip updated",
    data:trip})
  }catch(e){
    next(new ApiError(500,"the server occurred an error"))
  }  
}

exports.deleteTrip=async (req, res, next)=>
{
  try{
  var deletedItem=await Trip.findByIdAndDelete(req.params.id)
  if(!deletedItem)
  return next(new ApiError(404,'THE TRIPE IS NOT FOUND'))
  res.json({statusCode:200,
    message:"the trip deleted",
    data:deletedItem})
  }
  catch(e)
  {
    next(new ApiError(500,"the server occurred an error"))
  }
}