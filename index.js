 const express= require('express');
 const bodyParser = require('body-parser')
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
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());
const userRuote=require('./Routes/userRoute');
const mailRoute=require('./Routes/emailRoute');



app.use('/user',userRuote);
app.use('/mail',mailRoute);

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