const express = require('express');
const app = express();
const cookieParser = require("cookie-parser");
const {connectDatabase} = require("./config/database");

if(process.env.NODE_ENV !== "production")
{
    require("dotenv").config({"path":"config/config.env"});
}
require('dotenv').config();

//middleswares 
app.use(express.json());
app.use(express.urlencoded({extended:true}));
// app.use(cookieParser);


//importing routes 
//post 
const post = require("./routes/post");
// user
const user = require("./routes/user");

//using routes 
//post
app.use("",cookieParser(),post);
// user
app.use("",user);

app.get("/test",(req,res)=>{
    res.status(201).json({
        message:"Test is working!"
    })
});

connectDatabase();
app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT}`);
})