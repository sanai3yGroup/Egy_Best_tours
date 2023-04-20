const router= require('express').Router();
const upload= require('../Utilites/Multer');
const {
    createBlog,
    getBlog,
    getAllBlog,
    updateBlog,
    deleteBlog,
    searchBlog
}=require('../Services/blogService');


router.get('/:pageNumber',getAllBlog);

router.get(':id',getBlog);

router.post('/create',upload.array('image'),createBlog);

router.put('/:id',updateBlog);

router.delete('/:id',deleteBlog);

// router.get('/:',searchBlog);

module.exports= router;