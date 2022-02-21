import * as authService from './authService';
import { successResponse, errorResponse } from '../../helpers/responseHandler';

export const signUp = async (req, res) => {
    try {
        const { status, data, message } = await authService.signUp(req.body);

    if (status === 'failed') {
        return errorResponse(res, 400, message)
    }

    return successResponse(res, 200, data, message)
    } catch (error) {
        return errorResponse(res, 500, 'Something went wrong')
    }
}

export const signIn = async (req, res) => {
    try {
        const { status, data, message } = await authService.signIn(req.body);

    if (status === 'failed') {
        return errorResponse(res, 400, message)
    }

    return successResponse(res, 200, data, message)
    } catch (error) {
        console.log(error)
        return errorResponse(res, 500, 'Something went wrong')
    }
}

