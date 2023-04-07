const cloudinary = require("cloudinary").v2;

conectStorage = async function () {
  await cloudinary.config({
    cloud_name: process.env.cloud_name,
    api_key: process.env.api_key,
    api_secret: process.env.api_secret,
  });
  console.log("connected to cloudinary");
};
// Configuration
exports.uploadImage = (files,item) => {
  console.log(files);
  cloudinary.uploader
    .upload(files.uplaod.path)
    .then((result) => {
      res.status(200).send({
        message: "success",
        result,
      });
    })
    .catch((error) => {
      res.status(500).send({
        message: "failure",
        error,
      });
    });
};
