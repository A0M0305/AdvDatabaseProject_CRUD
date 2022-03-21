const express=require('express');
const app=express();

app.get("/", (req,res)=>{
    res.send("Crud Application");
})

app.listen(5033,()=>{console.log('Server is running on http://localhost:5033')});
