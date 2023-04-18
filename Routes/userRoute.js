
const router= require('express').Router();

const{
    createUser,
    login,
    getUser,
    updateUser,
    forGetPassword
}=require('../Services/userServes');


// get user by id
router.get('/:id',getUser);

// singInUser
router.post('/login',login);

// updateUser
router.put('/:id',updateUser);

// for get  password   @TahaAhmedd look at here thankes for you 
router.get('/forGetPassword/:email',forGetPassword);
router.post('/',createUser)





module.exports= router;



