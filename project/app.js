const express=require('express')
const app=express();
const tasks=require('./routes/tasks')
const connectDB=require('./db/connect');
require('dotenv').config();
const notfound=require('./middleware/not-found')
const path=require('path');

//middleware
app.use(express.json())
app.use(express.static('./public'))

//app.get('/api/v1/tasks')             -get all the tasks
//app.post('/api/v1/tasks')            -create a new task
//app.get('/api/v1/tasks/:id')         -get single task
//app.patch('/api/v1/tasks/:id')       -update task
//app.delete('/api/v1/tasks/:id')      -delete task

//routes

app.use('/api/v1/tasks',tasks);

//middleware executed if no route present
app.use(notfound)





const port=process.env.PORT||3000;
const start=async ()=>{
    try{
        await connectDB(process.env.MONGO_URI);
        app.listen(port,console.log(`Server is listening on port:${port}...`));
    }catch(error){
        console.log(error)
    }
}

start();

