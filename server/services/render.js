const axios=require('axios');
const { response } = require('express');


//these will allow me to render to different files.
exports.homeRoutes=(req,res) => {
    //making a GET request from MongoDB users
    axios.get('http://localhost:5033/api/users')
        .then(function(response){
            res.render("users",{users:response.data});
        })
        .catch(err =>{
            res.send(err);
        })    
}

exports.add_user=(req,res) => {
    res.render("add_user");
}

exports.update_user=(req,res) => {
    axios.get('http://localhost:5033/api/users',{params:{id:req.query.id}})
    .then(function(userdata){
        res.render("update_user",{user:userdata.data})
    })
    .catch(err =>{
        res.send(err);
    })    
}