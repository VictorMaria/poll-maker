import { Poll, Question }  from '../../models';
import { createQuestion } from '../question/questionService';

export const create = async (details) => {
    const { userId, pollName, questions } = details;
    const newPoll = await Poll.create({
        name: pollName,
        userId,
    });

    const result = await createQuestion(questions, userId, newPoll._id);

    return {
        status: 'success',
        message: 'Poll created successfully',
        data: {
            newPoll,
            questions: result,
        }
    };
};

export const getOne = async (pollId, userId) => {
    const poll = await Poll.findOne({ _id: pollId, userId });

    if (!poll) {
        return {
            status: 'failed',
            message: 'Poll not found',
        }
    }

    return {
        status: 'success',
        message: 'Poll fetched successfully',
        data: poll,
    }
}

export const getMany = async (userId) => {
    const polls = await Poll.find({ userId });

    return {
        status: 'success',
        message: `${polls.length > 0 ? 'Polls fetched successfully' : 'No polls available'}`,
        data: polls,
    }
}

export const getOneWithQuestions = async (userId, pollId) => {
    const questions = await Question.find({ userId, pollId });

    return {
        status: 'success',
        message: `${questions.length > 0 ? 'Questions fetched successfully' : 'No questions available'}`,
        data: {
            pollId,
            questions,
        },
    }
}

