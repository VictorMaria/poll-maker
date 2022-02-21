import { validationResult } from 'express-validator';
import { errorResponse } from '../helpers/responseHandler';

const validatorHandler = (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            const errorInfo = errors.array({ onlyFirstError: true });
            const errorMessage = errorInfo[0].msg;

            return errorResponse(res, 400, errorMessage);
        }

        next();
    } catch (error) {
        return errorResponse(res, 500, 'Something went wrong');
    }
};

export default validatorHandler;
