const express= require('express');
const dotenv = require ('dotenv');
dotenv.config({path:'.env-local'});
const bodyParser = require('body-parser');
const cors = require('cors');
const app=express();
app.use(cors());
const PORT=process.env.PORT|| '5002';
const api= require('./api');
app.use(express.json()) ;
app.use(express.urlencoded({extended:false}));
app.use('/api',api);
app.get('/',function(req,res){
    res.status(200).send('/api');
});
app.listen(PORT,function(){
    console.log("server is running " + PORT);
});
