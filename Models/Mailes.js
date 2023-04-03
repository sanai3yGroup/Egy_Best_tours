const mongoose=require('mongoose');
const mailSchema= mongoose.Schema({
    email:{
        type:String,
    }

})
module.exports=mongoose.model('Mail',mailSchema)