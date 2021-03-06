const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser = require('body-parser');
const path = require('path');

//looks for the database connection files...
const connectDB = require('./server/mongoDB/connection');

const app = express();

//use the confid file to change the port number, if the config number is in use it will use the default 8080
dotenv.config({path:"config.env"})
const PORT= process.env.PORT||8080

//to log/see the request in the terminal
app.use(morgan('tiny'));

//This imports the databse url to connect to mongo
connectDB();

//parse request to body-parser
app.use(bodyparser.urlencoded({extended:true}))

//view engine
app.set("view engine", "ejs")
//if you change the views folder, but views is the generic folder nodejs uses.
//app.set("views", path.resolve(__dirname,"public"))

//to load the assets folder with all the custom styling and images
app.use('/css',express.static(path.resolve(__dirname,"assets/css")))
app.use('/img',express.static(path.resolve(__dirname,"assets/img")))
app.use('/js',express.static(path.resolve(__dirname,"assets/js")))

//Moved the routes to render web pages to server -> routes folder.
app.use('/', require('./server/routes/router'))

app.listen(PORT,()=>{console.log(`Server is running on http://localhost:${PORT}`)});
