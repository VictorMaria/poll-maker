export const successResponse = (res, statusCode, data, message) => {
        return res.status(statusCode).json({
            status: 'success',
            message,
            data,
        });
};
      
export const errorResponse = (res, statusCode, message, data = undefined) => {
        return res.status(statusCode).json({
            status: 'failed',  
            message,
            data
        });
};