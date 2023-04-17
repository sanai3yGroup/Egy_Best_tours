const mongoose=require('mongoose');
const blogsSchema=mongoose.Schema({
title:{
    type:String,
},
discription:{
    type:String,
},
content:{
    type:Array
},
 pragraph:[{
    header:{
        type:String
    },
    text:{
        type:Array,
    }
 }],
 images:{
    type:Array,
}

});

module.exports=mongoose.model('Blog',blogsSchema)