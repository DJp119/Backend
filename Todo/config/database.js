const mongoose = require("mongoose");
require("dotenv").config();

const dbConnect = () => {
    mongoose.connect(process.env.DATABASE_URL,{
        // useNewUrlParser:true,
        // useUnifiedToplogy:true,
    }).then(()=>console.log("Db Connection Succesfully"))
    .catch((error)=>{console.log("Issue in DB");
        console.error(error.message);
        process.exit(1);
    });
}

module.exports = dbConnect;