const express = require("express");

const app = express();
app.listen(3000,()=>{
    console.log("App is runngin succesfully");

})

app.get("/",(req,res)=>{
    res.send(`<h1>Homepage</h1>`)
    // console.log("Homepage");
})
