const router= require('express').Router();
const {
    createReview,
} =require('../Services/reviewServes')


router.post('/',createReview);


module.exports= router;