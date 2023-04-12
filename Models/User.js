const  mongoose= require('mongoose');
const {hashPassword} = require('./../Utilites/hashPassword');

    const UserSchema= mongoose.Schema({
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

    });
    // UserSchema.pre('save',function(next) {

    //     // check if password is present and is modified.
    //     if ( this.password && this.isModified('password') ) {
    
    //     // call your hashPassword method here which will return the hashed password.
    //     this.password = hashPassword(this.password);
    
    //     }
    
    //     // everything is done, so let's call the next callback.
    //     next();
    
    // });
module.exports=mongoose.model('User',UserSchema)



