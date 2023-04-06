const Contact = require("../Models/ContactUs");
const ApiError = require("../Utilites/ApiError");

exports.searchContact = async (req, res, next) => {
  try {
  } catch (err) {
    next(new ApiError(500, "the server returned an error"));
  }
};

exports.getAllContact = async (req, res, next) => {
  try {
    const pagNumber = +req.params.pagNumber || 1;
    const limit = 10;
    const skip = (pagNumber - 1) * limit;
    const contacts = await Contact.find().skip(skip).limit(limit);
    const numOfPage = Math.ceil((await Contact.find().count()) / limit);
    if (contacts.length <= 0)return next(new ApiError(404, "not found any Contact"));
    res.json({
      statusCode: 200,
      numOfPage: numOfPage,
      message: "you have all Contact successfully",
      data: contacts,
    });
  } catch (err) {
    next(new ApiError(500, "the server returned an error"));
  }
};

exports.deleteContact = async (req, res, next) => {
  try {
    const id = req.params.id;
    const contact = await Contact.findByIdAndDelete(id);
    if(!contact) return next(new ApiError(404,'THE ContactE IS NOT FOUND'))
    res.json({
      statusCode: 200,
      message: "the Contact has been deleted",
      data: contact,
    });
  } catch (err) {
    next(new ApiError(500, "the server returned an error"));
  }
};

exports.createContact = async (req, res, next) => {
  try {
    const contact = await Contact.create(req.body);
    res.json({
      statusCode: 200,
      message: "the Contact was created successfully",
      data: contact,
    });
  } catch (err) {
    next(new ApiError(500, "the server returned an error"));
  }
};

exports.getContact = async (req, res, next) => {
  try {
    const id = req.params.id;
    const contact = await Contact.findById(id);
    if(!contact) return next(new ApiError(404,"THE ContactE IS NOT FOUND"))
    res.json({
      statusCode: 200,
      message: "you get a Contact by id",
      data: contact,
    });
  } catch (err) {
    next(new ApiError(500, "the server returned an error"));
  }
};
