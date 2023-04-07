const mongoose=require('mongoose');
const CategorySchema= mongoose.Schema({
    name:{
        type:String,
        upperCase:true,
        trim:true,
    }

})
module.exports=mongoose.model('Category',CategorySchema)