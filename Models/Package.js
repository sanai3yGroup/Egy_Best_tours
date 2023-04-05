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
        highlights:Array,
        inclusions:Array,
        exclusions:Array,
        hotelActivities:Array,
        location:[{ type: mongoose.Schema.Types.ObjectId, ref: 'Location' }],
        price:Number,
        category:{ type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
        pick_drop:String,
        availablitiy:String,
        reviewes:[{type:mongoose.Schema.Types.ObjectId,ref: 'Review'}]
})

module.exports=mongoose.model('Package',packageSechema)



