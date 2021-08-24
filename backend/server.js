require('dotenv').config();
const express=require('express')
const port=process.env.PORT || 8000
const app=express();
const db=require('./database');
const router=require('./routes')
const cors=require('cors')

// const corsOptions = {
//     origin: 'http://localhost:3000',
//     optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
//   }
  

app.use(cors());
app.use(express.urlencoded({extended:true}))
app.use(express.json());
app.use(router);
const server=app.listen(port,(err)=>{
    if(err){console.log("error in creating server",err)};
    console.log(`server is running or port::${port}`);

})