
const router= require('express').Router();

const{getAllLocation,
    getLocation,
    createLocation,
    updateLocation,
    deleteLocation
}=require('../Services/locationService');
// get all locations 
router.get('/',getAllLocation);
// get location by id
router.get('/:id',getLocation);
// create location
router.post('/create',createLocation);
// update location
router.put('/:id',updateLocation);
// delete location
router.delete('/:id',deleteLocation)






module.exports= router;



