const express=require('express')
const router=express.Router();
const { getALLTasks,createTask,updateTask,getTask,deleteTask} = require('../controllers/tasks')




router.route('/').get(getALLTasks).post(createTask);
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask);

module.exports=router;