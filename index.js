 const express= require('express');
 const dotenv=require('dotenv');
 dotenv.config({path:"config.env"});
const app = express();
var http = require('http');
const server=http.createServer(app);
const cors = require('cors');
var port = normalizePort(process.env.PORT || '7000');
const conect =require('./configuration/conctionDb');
const glopalError=require('./middlewares/errorMiddlare');

// conect to database
conect();
// middlewares 
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());
app.set('port', port);


function normalizePort(val) {
    var port = parseInt(val, 10);
  
    if (isNaN(port)) {
      // named pipe
      return val;
    }
  
    if (port >= 0) {
      // port number
      return port;
    }
  
    return false;
  }


const userRuote=require('./Routes/userRoute');
const mailRoute=require('./Routes/emailRoute');
const tripsRoute= require('./Routes/tripCustomRoute');
const packageRoute= require('./Routes/packageRoute');
const categoryRoute= require('./Routes/categoryRoute');
const locationRoute= require('./Routes/locationRoute');
const contactRoute= require('./Routes/contactUsRoute')
const tripRoute= require('./Routes/tripRoute')
const blogRoute= require('./Routes/blogRoute')
app.use('/user',userRuote);
app.use('/mail',mailRoute);
app.use('/trips',tripsRoute);
app.use('/package',packageRoute);
app.use('/category',categoryRoute);
app.use('/location',locationRoute);
app.use('/contact',contactRoute);
app.use('/trip',tripRoute);
app.use('/blog',blogRoute);

// hundel glopal error un project ////
app.all((req,res,next)=>{
    next(404,`can't finde this route${req.originalUrl} `)
});

app.use(glopalError);


// 



server.listen(port,()=>{
    console.log("the server is listening ON"+port)
});

app.get('/',(req, res,next)=>{
    res.send("the server listening")
});