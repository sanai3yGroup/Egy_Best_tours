const Trip = require("../Models/TripCustom");
const ApiError = require("../Utilites/ApiError");

exports.searchTrips = async (req, res, next) => {
  try {
  } catch (err) {
    next(new ApiError(500, "the server returned an error"));
  }
};

exports.getAlltrips = async (req, res, next) => {
  try {
    const pagNumber = +req.params.pagNumber || 1;
    const limit = 10;
    const skip = (pagNumber - 1) * limit;
    const trips = await Trip.find().skip(skip).limit(limit);
    const numOfPage = Math.ceil((await Trip.find().count()) / limit);
    if (trips.length <= 0)
      return next(new ApiError(404, "not found any trips"));
    res.json({
      statusCode: 200,
      numOfPage: numOfPage,
      message: "you have all trips successfully",
      data: trips,
    });
  } catch (err) {
    next(new ApiError(500, "the server returned an error"));
  }
};

exports.deleteTrip = async (req, res, next) => {
  try {
    const id = req.params.id;
    const trip = await Trip.findByIdAndDelete(id);
    if(!trip) return next(new ApiError(404,'THE TRIPE IS NOT FOUND'))
    res.json({
      statusCode: 200,
      message: "the trip has been deleted",
      data: trip,
    });
  } catch (err) {
    next(new ApiError(500, "the server returned an error"));
  }
};

exports.createTrips = async (req, res, next) => {
  try {
    const trip = await Trip.create(req.body);
    res.json({
      statusCode: 200,
      message: "the trip was created successfully",
      data: trip,
    });
  } catch (err) {
    next(new ApiError(500, "the server returned an error"));
  }
};

exports.getTrip = async (req, res, next) => {
  try {
    const id = req.params.id;
    const trip = await Trip.findById(id);
    if(!trip) return next(new ApiError(404,"THE TRIPE IS NOT FOUND"))
    res.json({
      statusCode: 200,
      message: "you get a trip by id",
      data: trip,
    });
  } catch (err) {
    next(new ApiError(500, "the server returned an error"));
  }
};
