
require('dotenv').config();
const url='mongodb://0.0.0.0:27017/Car_Rental';
const express=require('express');
const cors=require('cors');
const monk=require('monk');
const server=express();
const db=monk(url)
db.then(()=>{console.log('database connected....')})
server.use(cors());
server.use(express.json());
const login=db.get('Logins');
const data=db.get('Data');
const images=db.get('images');
//--------------------------  To  GET LOGINS INFORMATION ---------------------------------------
server.get('/',(req,res)=>{login.find({}).then((result)=>res.send(result));   }  );
//---------------------------  To post the SIGNUP DATA into DATABASE ---------------------------
server.post('/signup',(req,res)=>{
login.insert({username:req.body.username,password:req.body.password,role:req.body.role}).then(()=>console.log('data inserted....'));   
data.insert({username:req.body.username,password:req.body.password,role:req.body.role,address:req.body.address,email:req.body.email}).then(()=>console.log('data inserted....')) })
//----------------------------To get Car Images from Database  ----------------------------------
server.get('/images',(req,res)=>{
   images.find({}).then((result)=>{res.send(result)}) });
server.listen(8009,()=>{
    console.log('server is listening on port 8009...');
})