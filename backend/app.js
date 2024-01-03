const express = require('express');
const app = express();
const cookieParser = require("cookie-parser");

if(process.env.NODE_ENV !== "production")
{
    require("dotenv").config({"path":"config/config.env"});
}


//middleswares 
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser);

//importing routes 
//post 
const post = require("./routes/post");
// user
const user = require("./routes/user");

//using routes 
//post
app.use("/api",post);
// user
app.use("/api",user);

module.exports = app;