
const router= require('express').Router();
const upload= require('../Utilites/Multer');
const{getPackage,
    getAllPackages,
    deletePackage,
    updatePackage,
    createPackage,
    getPackagesSerach,
    topPackags,getFilterPackages
}=require('../Services/packageService');
// get all packages 
router.get('/',getAllPackages);
// get user by id
router.get('/get/:id',getPackage);
// createPackage
router.post('/create',upload.array('image'),createPackage);
// updatePackage
router.put('/:id',updatePackage);

router.get('/serach/:text',getPackagesSerach);

router.get('/filter',getFilterPackages);
// delete pacakge 
router.delete('/:id',deletePackage)

router.get('/Api/topPackags',topPackags)





module.exports= router;



