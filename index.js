 const express= require('express');

 const dotenv=require('dotenv');
 dotenv.config({path:"config.env"})
const app = express();
const cors = require('cors');
const port =process.env.PORT 
const conect =require('./configuration/conctionDb')

conect();

const userRuote=require('./routing/user-routing');

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

app.use('/user',userRuote)


app.listen(port,()=>{
    console.log("the server is listening")
});

app.get('/',(req, res,next)=>{
    res.send("the server listening")
})