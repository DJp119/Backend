
// const mongoose = require("mongoose");

// require("dotenv").config();

// exports.connect = () => {
//     mongoose.connect(process.env.MONGODB_URL, {
//         // useNewUrlParser:true,
//         // useUnifiedTopology:true
//     })
//     .then(() => {console.log("DB connected successfully")})
//     .catch( (err) => {
//         console.log("DB CONNECTION ISSUES");
//         console.error(err);
//         process.exit(1);
//     } );
// }
const mongoose = require("mongoose");
require("dotenv").config();

exports.connect = () => {
    const dbUrl = process.env.MONGODB_URL;

    if (!dbUrl) {
        console.error("MONGODB_URL is not defined in the .env file.");
        process.exit(1);
    }

    mongoose.connect(dbUrl)
        .then(() => {
            console.log("DB connected successfully");
        })
        .catch((err) => {
            console.error("DB CONNECTION ISSUES");
            console.error(err);
            process.exit(1);
        });
};
