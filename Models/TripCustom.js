const mongoose = require("mongoose");

const tripSchema = mongoose.Schema({
  name: {
    type: String,
  },
  emailAddress: {
    type: String,
  },
  phoneNumber: {
    type: String,
  },
  nationality: {
    type: String,
    
  },
  guests: {
    numberOfAdults: { type: Number },
    numberOfChildren: { type: Number },
  },
  distination: {
    type: String,
  },
  accommodation: {
    type: String,
  },
  checkIn: {
    type: Date,
  },
  checkOut: {
    type: Date,
  },
  additionalDetails: {
    type: String,
  },
});
module.exports = mongoose.model("Trip", tripSchema);
