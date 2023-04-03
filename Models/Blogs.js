const mongoose=require('mongoose');
const blogsSchema=mongoose.Schema({
title:{
    type:String,
},
text:{
    type:String,
},
images:{
    type:Array,
}
});

module.exports=mongoose.model('Blog',blogsSchema)