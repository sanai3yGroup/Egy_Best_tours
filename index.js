 const express= require('express');
 const dotenv=require('dotenv');
 dotenv.config({path:"config.env"});
const app = express();
var http = require('http');
const server=http.createServer(app);
const cors = require('cors');
var port = normalizePort(process.env.PORT || '9000');
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
const reviewRouter= require('./Routes/reviewRoute')

app.use('/api/user',userRuote);
app.use('/api/mail',mailRoute);
app.use('/api/trips',tripsRoute);
app.use('/api/package',packageRoute);
app.use('/api/category',categoryRoute);
app.use('/api/location',locationRoute);
app.use('/api/contact',contactRoute);
app.use('/api/trip',tripRoute);
app.use('/api/blog',blogRoute);
app.use('/api/review',reviewRouter);

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