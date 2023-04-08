const router=require('express').Router();
const {
getMails,
creatMail,  
}=require('../Services/emailServes')




router.post('/post',getMails);
router.post('/',creatMail);



module.exports=router;