    const Package = require("../Models/Package");
    const ApiError = require("../Utilites/ApiError");
    const { uploadImage } = require("../configuration/configCloudinary");

    exports.createPackage = async (req, res, next) => {
      try {
        let imageUrl = [];
        const files = req.files;
        for (let file of files) {
          let img = await uploadImage(file.path);
          imageUrl.push(img);
        }
        // console.log(imageUrl);
        const package = await Package.create({ ...req.body, images: imageUrl });
        res.json({
          statusCode: 200,
          message: "you create a Package",
          data: package,
        });
      } catch (err) {
        next(new ApiError(500, "err"));
      }
    };

    exports.getPackage = async (req, res, next) => {
      try {
        const id = req.params.id;
        const package = await Package.findById(id)
        // .populate("reviewes")
          .populate("location")
          .populate("category")
        if (!package) return next(new ApiError(404, "THE Package IS NOT FOUND"));
        res.json({
          statusCode: 200,
          message: "you get a Package by id",
          data: package,
        });
      } catch (err) {
        next(new ApiError(500, "the server returned an error"));
      }
    };

    exports.getAllPackages = async (req, res, next) => {
      try {
        const pageNumber = req.query.pageNumber || 1;
        const limit = 15;
        const skip = (pageNumber - 1) * limit;
        const packages = await Package.find()
          // .populate("location")
          // .populate("category")
          .populate('reviewes')
          // populate({ path: 'fans', select: 'name' })
          .skip(skip)
          .limit(limit);
        const numOfPage = Math.ceil((await Package.find().count()) / limit);

        if (packages.length <= 0)
          return next(new ApiError(404, "not found any trips"));
        res.json({
          statusCode: 200,
          numOfPage: numOfPage,
          message: "you have all packages successfully",
          data: packages,
        });
      } catch (err) {
        next(new ApiError(500, err));
      }
    };
    exports.getPackagesSerach = async (req, res, next) => {
      try {
        console.log(req.params.text)
       
        const packages = await Package.find({ $text: { $search:req.params.text }})
          .populate("location")
          .populate("category")
        // const packages = await Package.find({'category.name':req.params.text})
        //   .populate("location")
        //   .populate("category").exec()
          // .populate('reviewes')
        const numOfPage = Math.ceil((await Package.find().count()) / 15);

        if (packages.length <= 0)
          return next(new ApiError(404, "not found any trips"));
        res.json({
          statusCode: 200,
          numOfPage: numOfPage,
          message: "you have all packages successfully",
          data: packages,
        });
      } catch (err) {
        next(new ApiError(500, err));
      }
    };


    exports.updatePackage = async (req, res, next) => {
      try {
        const package = await Package.findByIdAndUpdate(req.params.id, req.body);
        if (!package) return next(new ApiError(404, "the user not updated"));
        res.json({
          statusCode: 200,
          message: "the package updated",
          data: package,
        });
      } catch (e) {
        next(new ApiError(500, "the server occurred an error"));
      }
    };

    exports.deletePackage = async (req, res, next) => {
      try {
        var deletedItem = await Package.findByIdAndDelete(req.params.id);
        if (!deletedItem) return next(new ApiError(404, "THE TRIPE IS NOT FOUND"));
        res.json({
          statusCode: 200,
          message: "the package deleted",
          data: deletedItem,
        });
      } catch (e) {
        next(new ApiError(500, "the server occurred an error"));
      }
    };
