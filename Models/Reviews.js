const mongoose = require('mongoose');
const reviewSchema= mongoose.Schema({
userName:{
    type:String,
},
comment:{
    type:String,
},
rate:{
    type:Number,
},
packageId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Package"
}

});
module.exports=mongoose.Model('Review',reviewSchema);