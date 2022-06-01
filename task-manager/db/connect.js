const mongoose=require('mongoose')
const connectionstrin='mongodb+srv://nabil:01276316958@cluster0.upr4xq1.mongodb.net/task_manager_db?retryWrites=true&w=majority'



// mongoose.connect(connectionstrin).then(()=>{
//     console.log('connected to the db')
// }).catch((err)=>{
//     console.log(err)
// })
const connectDB=(url)=>{
    return mongoose.connect(connectionstrin)
}

module.exports=
    connectDB
