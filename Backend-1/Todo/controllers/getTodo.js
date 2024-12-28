const Todo = require("../models/todo");

exports.getTodo = async(req,res) =>{
    try{
        // fetch all todo from obj
        const todos = await Todo.find({});

        // response
        res.status(200).json({
            success:true,
            data:todos,
            message:"Entire database fetch",
        });
    }
    catch(err){
        console.error(err);
        console.log(err);
        res.status(500).json({
            success:false,
            error:err.message,
            message:'server error',
        })
        
    }
}


exports.getTodoById = async(req,res) =>{
    try{
        // extract basic on id
        const id = req.params.id;
        const todo = await Todo.findById({_id:id});

        // data for given id not found
        if(!todo){
            return res.status(404).json({
                succes:false,
                message:"No data found by given Id",
            })
        }
        // data for given id found
        res.status(200).json({
            succes:true,data:todo,message:`Todo ${id} data succesfully fetched`
        })
    }
    catch(err){
        console.error(err);
        console.log(err);
        res.status(500).json({
            success:false,
            error:err.message,
            message:'server error',
        })
        
    }
}