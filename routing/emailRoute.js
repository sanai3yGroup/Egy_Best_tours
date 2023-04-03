const router=require('express').Router();
const {
getMails,
creatMail,  
}=require('../serves/emailServes')




router.get('/',getMails);
router.post('/',creatMail);



module.exports=router;