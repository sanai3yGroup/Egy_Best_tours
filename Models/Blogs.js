const mongoose=require('mongoose');
const blogsSchema=mongoose.Schema({
title:{
    type:String,
},
cover:{
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
    },
    img:{
        type:String
    }
 }],
 images:{
    type:Array,
}

});

module.exports=mongoose.model('Blog',blogsSchema)