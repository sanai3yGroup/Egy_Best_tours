
const router= require('express').Router();

const{getTrip,
    getAllTrips,
    deleteTrip,
    updateTrip,
    createTrip
}=require('../Services/tripService');
// get all packages 
router.get('/:pageNumber',getAllTrips);
// get user by id
router.get('/:id',getTrip);
// createPackage
router.post('/create',createTrip);
// updatePackage
router.put('/:id',updateTrip);
// delete pacakge 
router.delete('/:id',deleteTrip)






module.exports= router;



