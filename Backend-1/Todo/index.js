const express = require("express");
const app = express();

// loaf confif from env file
require("dotenv").config();
const PORT = process.env.PORT || 4000 ;

// middleware to parse json request body
app.use(express.json());

//  import routes for todo APi
const todoRoutes  = require("./routes/todos");
// mount the todo APi Routes 
app.use("/api/v1",todoRoutes);

//start server
app.listen(PORT,()=>{
    console.log(`Server Started at ${PORT}`);
    
})

// connect to db
const dbConnect = require("./config/database");
dbConnect();

// default route
app.get("/",(req,res)=>{
    res.send('<h1>This is homePage </h1>');
})