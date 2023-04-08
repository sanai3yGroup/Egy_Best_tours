 const express= require('express');
 const dotenv=require('dotenv');
 dotenv.config({path:"config.env"})
const app = express();
const cors = require('cors');
const port =process.env.PORT ;
const conect =require('./configuration/conctionDb');
const glopalError=require('./middlewares/errorMiddlare');
// conect to database
conect();

// middlewares 
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());
const userRuote=require('./Routes/userRoute');
const mailRoute=require('./Routes/emailRoute');
const tripsRoute= require('./Routes/tripCustomRoute');
const packageRoute= require('./Routes/packageRoute');
const categoryRoute= require('./Routes/categoryRoute');
const locationRoute= require('./Routes/locationRoute');
const contactRoute= require('./Routes/contactUsRoute')
const tripRoute= require('./Routes/tripRoute')

app.use('/user',userRuote);
app.use('/mail',mailRoute);
app.use('/trips',tripsRoute);
app.use('/package',packageRoute);
app.use('/category',categoryRoute);
app.use('/location',locationRoute);
app.use('/contact',contactRoute);
app.use('/trip',tripRoute);



// hundel glopal error un project ////
app.all((req,res,next)=>{
    next(404,`can't finde this route${req.originalUrl} `)
});

app.use(glopalError);


// 



app.listen(port,()=>{
    console.log("the server is listening")
});

app.get('/',(req, res,next)=>{
    res.send("the server listening")
});