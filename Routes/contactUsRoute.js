const router= require('express').Router();
const{
    getAllContact,
    createContact,
    getContact,
    deleteContact,
    updateTrips,
}=require('../Services/contactUsServes')




router.get('/:pagNumber',getAllContact);
router.get('/getById/:id',getContact);
router.delete('/:id',deleteContact);
router.post('/',createContact);
router.put('/:id',updateTrips);


module.exports=router;