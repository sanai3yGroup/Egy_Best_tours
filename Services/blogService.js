const Blog = require("../Models/Blogs");
const ApiError = require("../Utilites/ApiError");
const { uploadImage } = require("../configuration/configCloudinary");
exports.createBlog = async (req, res, next) => {
  try {
    // const files = req.files;
    // let img;
    // let arrImages = [];
    // let index = 0;
    // for (let file of files) {
    //   index++;
    //   img = await uploadImage(file.path, index);
    //   arrImages.push(img);
    // }
    const content = req.body.pragraph.map((i) =>i.header );
    const blog = await Blog.create({
      ...req.body,
      content,
      // images: arrImages,
    });
    res.json({
      statusCode: 200,
      message: "you create a blog",
      data: blog,
    });
  } catch (err) {
    next(new ApiError(500, err.message));
    
  }
};

exports.getBlog = async (req, res, next) => {
  try {
    const id = req.params.id;
    const blog = await Blog.findById(id);
    if (!blog) return next(new ApiError(404, "THE blog IS NOT FOUND"));
    res.json({
      statusCode: 200,
      message: "you get a blog by id",
      data: blog,
    });
  } catch (err) {
    next(new ApiError(500, "the server returned an error"));
  }
};

exports.getAllBlog = async (req, res, next) => {
  try {
    const pageNumber = req.query.pageNumber || 1;
    const limit = 15;
    const skip = (pageNumber - 1) * limit;
    const blogs = await Blog.find().skip(skip).limit(limit);
    const numOfPage = Math.ceil((await Blog.find().count()) / limit);

    if (blogs.length <= 0)
      return next(new ApiError(404, "not found any blogs"));
    res.json({
      statusCode: 200,
      numOfPage: numOfPage,
      message: "you have all blogs successfully",
      data: blogs,
    });
  } catch (err) {
    next(new ApiError(500, err));
  }
};

exports.updateBlog = async (req, res, next) => {
  try {
    const blog = await Blog.findByIdAndUpdate(req.params.id, req.body);
    if (!blog) return next(new ApiError(404, "the blog not updated"));
    res.json({ statusCode: 200, message: "the blog updated", data: blog });
  } catch (e) {
    next(new ApiError(500, "the server occurred an error"));
  }
};

exports.deleteBlog = async (req, res, next) => {
  try {
    var deletedItem = await Blog.findByIdAndDelete(req.params.id);
    if (!deletedItem) return next(new ApiError(404, "THE blog IS NOT FOUND"));
    res.json({
      statusCode: 200,
      message: "the blog deleted",
      data: deletedItem,
    });
  } catch (e) {
    next(new ApiError(500, "the server occurred an error"));
  }
};

exports.searchBlog = async (req, res, next) => {
  try {
    const title = req.params.title;
    const data = await Blog.find({
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
