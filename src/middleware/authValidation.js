const { check } = require('express-validator');

const authValidator = {
    signUp: [
        check('firstName')
            .not()
            .isEmpty({ ignore_whitespace: true })
            .withMessage('First name is required')
            .trim()
            .isLength({ min: 2 })
            .withMessage('First name must contain atleast 2 characters')
            .matches(/[a-z]+[-']{0,1}[a-z]+$/)
            .withMessage('First name can only contain letters'),
        check('lastName')
            .not()
            .isEmpty({ ignore_whitespace: true })
            .withMessage('Last name is required')
            .trim()
            .isLength({ min: 2 })
            .withMessage('Last name must contain atleast 2 characters')
            .matches(/[a-z]+[-']{0,1}[a-z]+$/)
            .withMessage('Last name can only contain letters'),
        check('email')
            .not()
            .isEmpty({ ignore_whitespace: true })
            .withMessage('Email is required')
            .isEmail()
            .trim()
            .withMessage('Please use a valid email address'),
        check('password')
            .not()
            .isEmpty({ ignore_whitespace: true })
            .withMessage('Password is required')
            .trim()
            .isLength({ min: 8 })
            .withMessage('Password must have atleast 8 characters'),
    ],
    signIn: [
        check('email')
            .not()
            .isEmpty({ ignore_whitespace: true })
            .withMessage('Email is required')
            .isEmail()
            .trim()
            .withMessage('Please use a valid email address'),
        check('password')
            .not()
            .isEmpty({ ignore_whitespace: true })
            .withMessage('Password is required'),
    ],
};

module.exports = authValidator;