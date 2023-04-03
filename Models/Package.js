const  mongoose= require('mongoose');

const packageSechema=mongoose.Schema({
        title:{
        type:String,
        },
        descrption:String,
        days:{
            type:Number,
        },
        images:{
            type:Array,
        },
        date:Date,
        highlights:Array,
        inclusions:Array,
        exclusions:Array,
        hotelActivities:Array,
        location:{ type: Schema.Types.ObjectId, ref: 'Location' },
        price:Number,
        category:{ type: Schema.Types.ObjectId, ref: 'Category' },
        pick_drop:String,
        availablitiy:String
})

module.exports=mongoose.model('Package',packageSechema)



