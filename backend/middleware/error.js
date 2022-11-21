const notFound=async(req,res,next)=>{
    const error= new Error(`not found ${req.OriginalUrl}`)
    res.status(404)
    next(error)
}
const errorHandler=async(err,req,res,next)=>{
    if(res.headersSent){
        next("error")
    }else{
    const statusCode=res.statusCode==200 ?500:res.statusCode
    res.status(statusCode)
    res.json({
        message:err.message,
        stack:process.env.NODE_ENV ==='production'? null :err.stack,
    })}
}
export {notFound,errorHandler}