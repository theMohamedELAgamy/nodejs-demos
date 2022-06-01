const connectDB=require('./db/connect')
const express=require('express')
const app=express()
const port=3000
const routes=require('./routes/tasks')
//routs
app.use(express.static('./public'))
app.use(express.json())

app.use('/api/v1/tasks',routes)

const start=async ()=>{
    try {
      await connectDB()
     app.listen(port,console.log(`server is up on port ${port}`))
    } catch (error) {
        console.log(error)
    }
}

start()