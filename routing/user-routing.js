
const router= require('express').Router();

const{
    createUser,
    login,
    getUser,
    updateUser,
    changePassword
}=require('.././serves/user-serves');


// get user by id
router.get('/:id',getUser);

// singInUser
router.post('/login',login);

// updateUser
router.put('/:id',updateUser);

// change password 
router.put('/cangePassword/:id',changePassword)






module.exports= router;



