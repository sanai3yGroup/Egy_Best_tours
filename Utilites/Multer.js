const multer  = require('multer');

const storage =  multer.diskStorage({})
const  fileFillter= (req, file, cd) => {
// console.log(file.mimetype);
  if (file.mimetype === "image/png") {
    cd(new Error("please uplaod jpg or jpeg file"), false);
  } else {
    cd(null, true);
 
  }
};


  const upload = multer({ storage: storage,
                          fileFilter:fileFillter,
                          });
  module.exports=upload ;