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
        let text=req.params.text.toLowerCase();
       //{ $text: { $search:req.params.text }}
        const packages = await Package.find()
          .populate("location")
          .populate("category");
          let answer=[];
          for(let item of packages)
          {
            if(item.title.toLowerCase().includes(text)||item.category.name.toLowerCase().includes(text))
            {
              console.log("first")
              answer.push(item);
            }
            else
            {
              for(let data of item.location)
              {
                if(data.name.toLowerCase().includes(text))
                {
                  answer.push(item);
                }
              }
            }
          }
    
        const numOfPage = Math.ceil((await Package.find().count()) / 15);

        if (answer.length <= 0)
          return next(new ApiError(404, "not found any trips"));
        res.json({
          statusCode: 200,
          numOfPage: numOfPage,
          message: "you have all packages successfully",
          data: answer,
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


    exports.topPackags=async(req,res,next)=>{
      try{
        const top=await Package.find().limit(4)
        if(!top){
          new ApiError(404,'the top package not found')
        }else{
          res.json({
            statusCode: 200,
            message: "you have successfully package top",
            data: top,
          });
        }
      }catch(err){
      new ApiError(500, err.message)
      }
    }

    exports.getFilterPackages = async (req, res, next) => {
      try {
        const {pageNumber=1,...query}=req.query
       // console.log(query);
        const limit = 10;
        const skip = (pageNumber - 1) * limit;
        const packages = await Package.find(query)
          .populate("location")
          .populate("category")
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