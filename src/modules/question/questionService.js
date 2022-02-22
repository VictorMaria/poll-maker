import { Question } from '../../models';

export const createQuestion = async (questions, userId, pollId) => {
    const questionsDraft = [];
    for (let index = 0; index < questions.length; index++) {
        const { content, answers, answerType } = questions[index];
        questionsDraft.push({
            insertOne: {
                document: {
                    content,
                    answers,
                    answerType,
                    userId,
                    pollId,
                },
            },
        });
    }
    const result = await Question.bulkWrite(questionsDraft);

    return result;
}