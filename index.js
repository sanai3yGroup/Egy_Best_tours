 const express= require('express');

 const dotenv=require('dotenv');
 dotenv.config({path:"config.env"})
const app = express();
const cors = require('cors');
const port =process.env.PORT 

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());




app.listen(port,()=>{
    console.log("the server is listening")
});

app.get('/',(req, res,next)=>{
    res.send("the server listening")
})