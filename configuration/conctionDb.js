const mongoose = require('mongoose');
const url =process.env.MONGODB_URL

mongoose.set({'strictQuery':true});

const conect=async function(){
    await mongoose.connect(url,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log("connected to database")
}

module.exports= conect;