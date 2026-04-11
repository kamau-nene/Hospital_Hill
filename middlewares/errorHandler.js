const handleValidationError= (message, statusCode)=>{
        const error= new Error(message);
        error.statusCode= statusCode;
        return error;
}

const errorHandler= async(err, req, res, next)=>{
    const message= err.message || 'Internal server Error';
    const statusCode= err.statusCode || 500;
    return res.status(statusCode).json({success: false, message});
    next();
}

export{handleValidationError,
    errorHandler
};