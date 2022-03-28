const express = require('express');
// do not use const app = ('express') as this only allows the creation of new renders.
// const route allows use to route these back to the app.js
const route = express.Router()

// app.get now becomes route.get as this will route back.
route.get('/', (req,res)=>{
    res.render("home");
})

route.get('/add_user', (req,res)=>{
    res.render("add_user");
})

route.get('/update_user', (req,res)=>{
    res.render("update_user");
})

//allows the export of these renders to app.js
module.exports=route