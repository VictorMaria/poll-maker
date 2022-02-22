const { check, param } = require('express-validator');

const PollValidation = {
    create: [
        check('pollName')
            .not()
            .isEmpty({ ignore_whitespace: true })
            .trim()
            .withMessage('Poll name is required'),
        check('questions')
            .isArray({ min: 1 })
            .withMessage('Questions has to be an array of at least one object'),
        check('questions.*.content')
            .not()
            .isEmpty({ ignore_whitespace: true })
            .trim()
            .withMessage('Question content is required'),
        check('questions.*.answerType')
            .not()
            .isEmpty({ ignore_whitespace: true })
            .trim()
            .withMessage('Answer Type is required'),
        check('questions')
            .custom((questions) => {
                for (let question of questions) {
                    if (question.answerType === 'option' && question.answers && question.answers.length < 1 ) {
                            throw new Error('Possible answers to the question are required');
                    }
                } 
                return true;
            }),
    ],
    getOne: [
        param('pollId')
            .not()
            .isEmpty({ ignore_whitespace: true })
            .withMessage('Poll ID is required')
            .trim()
            .isMongoId()
            .withMessage('Enter a valid Poll ID'),
        
    ],
};

export default PollValidation;