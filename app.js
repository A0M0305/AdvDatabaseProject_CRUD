const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');

const app = express();

//use the confid file to change the port number, if the config number is in use it will use the default 8080
dotenv.config({path:"config.env"})
const PORT= process.env.PORT||8080

//to log/see the request in the terminal
app.use(morgan('tiny'));



app.get("/", (req,res)=>{
    res.send("Crud Application");
})

app.listen(PORT,()=>{console.log(`Server is running on http://localhost:${PORT}`)});
