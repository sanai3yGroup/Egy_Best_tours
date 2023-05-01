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
        totalrate:Number,
        reviewes:[{type:Object}],
        maincategory:
        {
            type:String,
            enum:{
                values:["Egypt tour","Day tour",'Nile cruises','Shore excursions'],
                message:'{VALUE} is not supported',
            }
        }

})

packageSechema.index({'$**': 'text'});
module.exports=mongoose.model('Package',packageSechema)



