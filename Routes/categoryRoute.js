
const router= require('express').Router();

const{getAllCategory,
    getCategory,
    getCategorybyMain,
    createCategory,
    updateCategory,
    deleteCategory,
    searchCategory
}=require('../Services/categoryService');
// get all locations 
router.get('/',getAllCategory);
// get location by id
router.get('/:id',getCategory);
router.get('/getbymain/:main',getCategorybyMain);
// create location
router.post('/create',createCategory);
// update location
router.put('/:id',updateCategory);
// delete location
router.delete('/:id',deleteCategory);

router.get('/search/:title',searchCategory);






module.exports= router;



