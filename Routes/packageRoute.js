
const router= require('express').Router();
const upload= require('../Utilites/Multer');
const{getPackage,
    getAllPackages,
    deletePackage,
    updatePackage,
    createPackage,
    getPackagesSerach,
    topPackags
}=require('../Services/packageService');
// get all packages 
router.get('/',getAllPackages);
// get user by id
router.get('/:id',getPackage);
// createPackage
router.post('/create',upload.array('image'),createPackage);
// updatePackage
router.put('/:id',updatePackage);
router.get('/serach/:text',getPackagesSerach);
// delete pacakge 
router.delete('/:id',deletePackage)

router.get('/Api/topPackags',topPackags)





module.exports= router;



