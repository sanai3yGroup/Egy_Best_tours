
const router= require('express').Router();

const{getAllCategory,
    getCategory,
    createCategory,
    updateCategory,
    deleteCategory,
    searchCategory
}=require('../Services/categoryService');
// get all locations 
router.get('/',getAllCategory);
// get location by id
router.get('/:id',getCategory);
// create location
router.post('/create',createCategory);
// update location
router.put('/:id',updateCategory);
// delete location
router.delete('/:id',deleteCategory);

router.get('/search/:title',searchCategory);






module.exports= router;



