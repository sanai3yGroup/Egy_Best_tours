const  mongoose= require('mongoose');

const userSechema=mongoose.Schema({
        name:{
        type:String,
        },
        email:{
            type:String,
        },
        password:{
            type:String,
        },
        img:{
            type:String,
        }

})

module.exports=mongoose.model('User',userSechema)



