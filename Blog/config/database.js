
const { default: mongoose } = require("mongoose");
require("dotenv").config();

const connectWithDb = ()=>{
    mongoose.connect(process.env.DATABASE_URL,).then(console.log("DB connected Succesfully"))
    .catch((error)=> {
        console.log("Db facingg error");
        console.log(error);
        process.exit(1);
    })
};


module.exports = connectWithDb;