const Category = require("../Models/Category");
const ApiError = require("../Utilites/ApiError");
exports.createCategory = async (req, res, next) => {
  try {
    if (!req.body) {
      throw "error body it is empty";
    }
    const category = await Category.create(req.body);
    res.json({
      statusCode: 200,
      message: "you create a category",
      data: category,
    });
  } catch (err) {
    next(new ApiError(500, err));
  }
};
exports.getCategory = async (req, res, next) => {
  try {
    const id = req.params.id;
    const category = await Category.findById(id);
    if (!category) return next(new ApiError(404, "THE Package IS NOT FOUND"));
    res.json({
      statusCode: 200,
      message: "you get a category by id",
      data: category,
    });
  } catch (err) {
    next(new ApiError(500, "the server returned an error"));
  }
};
exports.getCategorybyMain = async (req, res, next) => {
  try {
    const main = req.params.main;
    const category = await Category.find({maincategory:main});
    if (!category) return next(new ApiError(404, "THE Packages IS NOT FOUND"));
    res.json({
      statusCode: 200,
      message: "you get a category by id",
      data: category,
    });
  } catch (err) {
    next(new ApiError(500, "the server returned an error"));
  }
};
exports.getAllCategory = async (req, res, next) => {
  try {
    const pageNumber = req.query.pageNumber ;
    if (pageNumber) {
      const limit = 10;
      const skip = (pageNumber - 1) * limit;
      const categories = await Category.find().skip(skip).limit(limit);
      const numOfPage = Math.ceil((await Category.find().count()) / limit);

      if (categories.length <= 0)
        return next(new ApiError(404, "not found any categorys"));
      res.json({
        statusCode: 200,
        numOfPage: numOfPage,
        message: "you have all categorys successfully",
        data: categories,
      });
    } else {
      const categories = await Category.find();
      if (categories.length <= 0)
        return next(new ApiError(404, "not found any categorys"));
      res.json({
        statusCode: 200,
        message: "you have all categorys successfully",
        data: categories,
      });
    }
  } catch (err) {
    next(new ApiError(500, err));
  }
};

exports.updateCategory = async (req, res, next) => {
  try {
    const category = await Category.findByIdAndUpdate(req.params.id, req.body);
    if (!category) return next(new ApiError(404, "the user not updated"));
    res.json({
      statusCode: 200,
      message: "the category updated",
      data: category,
    });
  } catch (e) {
    next(new ApiError(500, "the server occurred an error"));
  }
};

exports.deleteCategory = async (req, res, next) => {
  try {
    var deletedItem = await Category.findByIdAndDelete(req.params.id);
    if (!deletedItem) return next(new ApiError(404, "THE TRIPE IS NOT FOUND"));
    res.json({
      statusCode: 200,
      message: "the category deleted",
      data: deletedItem,
    });
  } catch (e) {
    next(new ApiError(500, "the server occurred an error"));
  }
};

exports.searchCategory = async (req, res, next) => {
  try {
    const title = req.params.title;
    const data = await Category.find({
      name: {
        $regex: title,
      },
    });
    if (data <= 0)
      return next(new ApiError(404, "no data matching this title "));
    res.json({
      statusCode: 200,
      message: "you get search results",
      data: data,
    });
  } catch (e) {
    next(new ApiError(500, "the server encountered an error"));
  }
};
