const Review = require("../Models/Reviews");
const ApiError = require("../Utilites/ApiError");
const Package = require("../Models/Package");

exports.createReview = async (req, res, next) => {
  try {
    const review = await new Review(req.body);
    if (!review) return next(new ApiError(403, "the review is not created "));
    const packageId = await Package.findByIdAndUpdate(
      { _id: review.packageId },
      {
        $push: { reviewes: review},
        // $set: {totalrate: data[0].rate}
      }
    );
    const data=await Package.aggregate([{$match:{_id:review.packageId}},
    {
     $unwind:'$reviewes' 
    },{$group:{_id:null,rate:{$avg:'$reviewes.rate'}}}])
    packageId.totalrate=data[0].rate;
    console.log(data[0].rate);
    packageId.save();
   
    res.json({
      statusCode: 200,
      message: "the review is created successfully",
      dat: review,
    });
  } catch (err) {
    console.log(err);
    next(new ApiError(500, "the server returned an error"));
  }
};
