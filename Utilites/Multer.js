const multer  = require('multer');

const storage =  multer.diskStorage({})
const  fileFillter= (req, file, cd) => {
  if (file.mimetype === "image/jpeg") {
    cd(null, true);
  } else {
    cd(new Error("please uplaod jpg file"), false);
  }
};


  const upload = multer({ storage: storage,
                          fileFilter:fileFillter,
                          limits: {
                            fileSize: 5 * 1024 * 1024,
                          } });
  module.exports=upload ;