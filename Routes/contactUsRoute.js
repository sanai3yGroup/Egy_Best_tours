const router= require('express').Router();
const{
    getAllContact,
    createContact,
    getContact,
    deleteContact,
    searchTrips,
}=require('../Services/contactUsServes')




router.get('/:pagNumber',getAllContact);
router.get('/getById/:id',getContact);
router.delete('/:id',deleteContact);
router.post('/',createContact);
// router.get('/searchTrips/:title',searchTrips);


module.exports=router;