// const Todo = require("../models/todo");



// exports.updateTodo = async(req,res) =>{
//     try{
//         const {id}  = req.params;
//         const {title,description} = req.body;
//         const todo = await Todo.findByIdAndUpdate(
//             {_id:id},
//             {title,description,updateAt:Date.now()},
//         )
//         res.status(200).json({
//             success:true,
//             data:todos,
//             message:"updated succesfully",
//         })
//     }
//     catch(err){
//         console.error(err);
//         console.log(err);
//         res.status(500).json({
//             success:false,
//             error:err.message,
//             message:'server error',
//         })
        
//     }
// }
exports.updateTodo = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description } = req.body;
        
        const todo = await Todo.findByIdAndUpdate(
            { _id: id },
            { title, description, updatedAt: Date.now() },
            { new: true } // Ensures the updated document is returned
        );

        if (!todo) {
            return res.status(404).json({
                success: false,
                message: "Todo not found",
            });
        }

        res.status(200).json({
            success: true,
            data: todo,
            message: "Updated successfully",
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            error: err.message,
            message: 'Server error',
        });
    }
};
 