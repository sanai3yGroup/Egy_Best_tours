const router= require('express').Router();
const{
    getAlltrips,
    createTrips,
    getTrip,
    deleteTrip,
    searchTrips,
}=require('../Services/tripCustomServes')




router.get('/:pagNumber',getAlltrips);
router.get('/:id',getTrip);
router.delete('/:id',deleteTrip);
router.post('/',createTrips);
// router.get('/searchTrips/:title',searchTrips);


module.exports=router;