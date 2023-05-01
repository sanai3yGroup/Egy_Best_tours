const mongoose=require('mongoose');
const CategorySchema= mongoose.Schema({
    name:{
        type:String,
        upperCase:true,
        trim:true,
    },
    maincategory:
    {
        type:String,
        enum:{
            values:["Egypt tour","Day tour",'Nile cruises','Shore excursions'],
            message:'{VALUE} is not supported',
        }
    }

})
module.exports=mongoose.model('Category',CategorySchema)