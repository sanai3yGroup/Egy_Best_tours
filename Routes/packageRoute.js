
const router= require('express').Router();

const{getPackage,
    getAllPackages,
    deletePackage,
    updatePackage,
    createPackage
}=require('../Services/packageService');
// get all packages 
router.get('/',getAllPackages);
// get user by id
router.get('/:id',getPackage);
// createPackage
router.post('/create',createPackage);
// updatePackage
router.put('/:id',updatePackage);
// delete pacakge 
router.delete('/:id',deletePackage)






module.exports= router;



