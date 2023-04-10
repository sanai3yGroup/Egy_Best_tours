const  mongoose= require('mongoose');

const tripSchema=mongoose.Schema({
    users:Array,
    package:{type:mongoose.Schema.Types.ObjectId,ref: 'Package'},
    checkin:Date,
    checkout:Date,
})

module.exports=mongoose.model('Trip',tripSchema)



