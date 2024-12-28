const express = require('express');
const app  = express();

const bodyparser = require('body-parser');
app.use(bodyparser.json());

app.listen(3000,()=> {
    console.log("server started at port 3000");
    
});

app.get('/',(request,response)=>{
    response.send("Hellfsde   o ");
})

app.post('/api/cars',(request,response)=>{
    const {name,brand} = request.body;
    console.log(name);
    console.log(brand);
    response.send("car submiited  succesfully ");
    
})

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/myDatabase'.{
    useNewurlParser:true,
    useUnifiedTopology:true
}).then (()=>{console.log("Connection Succesfully")})
.catch((error)=>{console.log("recieved an error")});