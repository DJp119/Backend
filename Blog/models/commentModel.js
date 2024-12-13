const mongoose = require("mongoose");

// router handler
const commestSchema = new mongoose.Schema({
    post:{
        type:mongoose.Schema.ObjectId,
        ref :"Post", // refernce to the post model
    },
    user:{
        type : String,
        required:true,
    },
    body:{
        type: String,
        required :true,
    }
});

module.exports = mongoose.model("Comment",commestSchema);


// export