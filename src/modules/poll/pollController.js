import * as pollService from './pollService';
import { successResponse, errorResponse } from '../../helpers/responseHandler';

export const create = async (req, res) => {
    try {
        const { questions, pollName } = req.body;
        const { status, data, message } = await pollService.create({
            questions,
            pollName,
            userId: req.user.id,
        });

    if (status === 'failed') {
        return errorResponse(res, 400, message)
    }

    return successResponse(res, 200, data, message)
    } catch (error) {
        return errorResponse(res, 500, 'Something went wrong')
    }
};

export const getOne = async (req, res) => {
    try {
        const { pollId } = req.params;
        const { status, data, message } = await pollService.getOne(pollId, req.user.id);

    if (status === 'failed') {
        return errorResponse(res, 400, message)
    }

    return successResponse(res, 200, data, message)
    } catch (error) {
        return errorResponse(res, 500, 'Something went wrong')
    }
}

export const getMany = async (req, res) => {
    try {
        const { data, message } = await pollService.getMany(req.user.id);

    return successResponse(res, 200, data, message)
    } catch (error) {
        return errorResponse(res, 500, 'Something went wrong')
    }
}

export const getOneWithQuestions = async (req, res) => {
    try {
        const { message, data, } = await pollService.getOneWithQuestions(req.user.id, req.params.pollId);
        return successResponse(res, 200, data, message)
    } catch (error) {
        return errorResponse(res, 500, 'Something went wrong')
    }
}
