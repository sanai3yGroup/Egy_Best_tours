const router= require('express').Router();
const {
    createBlog,
    getBlog,
    getAllBlog,
    updateBlog,
    deleteBlog,
    searchBlog
}=require('../Services/blogService');
const upload= require('../Utilites/Multer');

router.get('/:pageNumber',getAllBlog);

router.get(':id',getBlog);

router.post('/',upload.array('image'),createBlog);

router.put('/:id',updateBlog);

router.delete('/:id',deleteBlog);

// router.get('/:',searchBlog);

module.exports= router;