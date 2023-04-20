// const { update } = require("../../AlmotakasesAcademy/Almota5asesProject/Controllers/UserCountroller");

    const cloudinary = require("cloudinary").v2;
    let index=0
    conectStorage = async function () {
      await cloudinary.config({
        cloud_name: process.env.cloud_name,
        api_key: process.env.api_key,
        api_secret: process.env.api_secret,
      });
      console.log("connected to cloudinary");
    };

    exports.uploadImage = async (file,index) => {
      conectStorage();
      return new Promise((resolve) => {
        cloudinary.uploader.upload(file, (err, res) => {
          if (err) return res.status(500).send("upload image error");
          resolve({
            img: res.secure_url,
            id: res.public_id,
            index:index 
          });
        });
      });
    };
