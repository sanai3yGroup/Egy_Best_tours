const mongoose=require('mongoose');
const locationSchema= mongoose.Schema({
    name:{
        type:String,
    }

})
module.exports=mongoose.model('Location',locationSchema)