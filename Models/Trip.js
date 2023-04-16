const mongoose = require("mongoose");

const tripSchema = mongoose.Schema({
  users: [
    {
        name: String,
        emailAddress: String,
        phoneNumber: String,
        nationality: String,
        distination: String,
        additionalDetails: String,
        guests:{
            numberOfAdults: { type: Number },
            numberOfChildren: { type: Number },
        },
        },
    ],
    package: { type: mongoose.Schema.Types.ObjectId, ref: "Package" },
    checkin: Date,
    checkout: Date,
});

module.exports = mongoose.model("Trip", tripSchema);
