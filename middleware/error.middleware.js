const errorMiddleware = (err, req, res, next)=>{
    try {
        let error = {...err};
        error.message = err.message || 'Internal server error';
        error.statusCode = err.statusCode || 500;
        

        if (err.code === 11000 || (err.data && err.data.errorResponse && err.data.errorResponse.code === 11000)) {
            error = new Error('Email already in use');
            error.statusCode = 400; // Set correct status code
          }
        res.status(error.statusCode).json({
            success:false,
            message:error.message
        })

        

    } catch (error) {
        next(error)
    }
}


export default errorMiddleware