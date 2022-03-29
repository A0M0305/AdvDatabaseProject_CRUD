const express = require('express');
// do not use const app = ('express') as this only allows the creation of new renders.
// const route allows use to route these back to the app.js
const route = express.Router()

//to pull render from ther services file
const services = require('../services/render');
const controller = require('../controller/controller');
const { create } = require('../model/model');

// app.get now becomes route.get as this will route back.
// route is now updated to call from services folder from render.
route.get('/', services.homeRoutes);

route.get('/add_user', services.add_user)

route.get('/update_user', services.update_user)

//Create my API connection.
route.post('/api/users',controller.create);
route.get('/api/users',controller.find);
route.put('/api/users/:id',controller.update);
route.delete('/api/users/:id',controller.delete);


//allows the export of these renders to app.js
module.exports=route