const Task=require('../models/tasks')
module.exports={


 async getAllTasks(req,res){
  try {
    const tasks=await Task.find({})
    res.status(200).json({tasks})
      
  } catch (error) {
    res.status(500).json(error.message)
  }
            
 },

 async createTask(req,res){
           try {
            const task=await Task.create(req.body)
            res.json({task})
           } catch (error) {
            res.status(500).json(error.message)
           }
},

 async getTask(req,res){
    try {
        const task=await Task.findOne({_id:req.params.id})
        res.status(200).json({task})
          
      } catch (error) {
        res.status(500).json(error.message)
      }
       
},
 async deleteTask(req,res){
    try {
        const task=await Task.findOneAndDelete({_id:req.params.id})
        res.status(200).json({task})
          
      } catch (error) {
        res.status(500).json(error.message)
      }
},
async updateTask(req,res){
    try {
        const {id:taskId}=req.params
        const task=await Task.findOneAndUpdate({_id:taskId},req.body,{
            new:true,
            runValidators:true
        })
        res.status(200).json({task})
          
      } catch (error) {
        res.status(500).json(error.message)
      }
}





                

   
}