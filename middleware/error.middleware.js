const errorMiddleware = (err, req, res, next)=>{
    try {
        let error = {...err};
        error.message = err.message || 'Internal server error';
        error.statusCode = err.statusCode || 500;
        
        res.status(error.statusCode).json({
            success:false,
            message:error.message
        })

    } catch (error) {
        next(error)
    }
}


export default errorMiddleware