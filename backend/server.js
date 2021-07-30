const express=require('express')
const port=process.env.PORT || 8000

const app=express();





const server=app.listen(port,(err)=>{
    if(err){console.log("error in creating server",err)};
    console.log(`server is running or port::${port}`);

})