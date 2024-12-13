const express = require("express");

const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 4000;
// middle ware
app.use(express.json());

const blog = require("./routes/blog");

// mount
app.use("/api/v1",blog);
const connectWithDb = require("./config/database");
connectWithDb();

// start server
app.listen(PORT,() => {
    console.log(`App is started port no ${PORT}`);
}) 

app.get("/",(req,res) =>{
    res.send(`<h1>This is my homepage</h1>`);
})