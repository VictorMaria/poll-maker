import express from 'express';
import * as authController from './authController';
import authValidation from '../../middleware/authValidation';
import validatorHandler from '../../middleware/validationHandler';

const Router = express.Router();

Router.post(
    '/auth/signup',
    authValidation.signUp,
    validatorHandler,
    authController.signUp,
);

Router.post(
    '/auth/signin',
    authValidation.signIn,
    validatorHandler,
    authController.signIn,
);

export default Router;
