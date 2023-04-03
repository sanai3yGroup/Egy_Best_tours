const router=require('express').Router();
const {
getMails,
creatMail,  
}=require('../Services/emailServes')




router.get('/',getMails);
router.post('/',creatMail);



module.exports=router;