const notfound=(req,res)=>{
    res.status(404).send('<h1 style="color:red">Route does not exists...</h1>')
}

module.exports=notfound;