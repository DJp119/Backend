const Todo = require("../models/todo");
// define route handler

exports.createTodo = async(req,res) =>{
    try{
        // extract title and desc frorm request body
        const {title,description} = req.body;
        // create new todo obj and insert in db
        const response = await Todo.create({title,description});
        // send a json response with a success flag
        res.status(200).json(
            {
            success:true,
            data:response,
            message:'Entry Created Succesfully'
            }
    );
    }
    catch(err){
        console.error(err);
        console.log(err);
        res.status(500).json({
            success:false,
            data:"Internal Server Error",
            message:err.message,
        })
        
    }
}