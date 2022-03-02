const mongoose=require('mongoose');
require('dotenv').config();

const connectDB=()=>{
    return mongoose.connect(process.env.MONGO_URI,{
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    });
    
};


module.exports=connectDB;
