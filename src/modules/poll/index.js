import express from 'express';
import * as pollController from './pollController';
import pollValidation from '../../middleware/pollValidation.js';
import validatorHandler from '../../middleware/validationHandler';
import verifyUserToken from '../../middleware/verifyUserToken';

const Router = express.Router();

Router.post(
    '/polls',
    verifyUserToken,
    pollValidation.create,
    validatorHandler,
    pollController.create,
);

Router.get(
    '/polls/:pollId',
    verifyUserToken,
    pollValidation.getOne,
    validatorHandler,
    pollController.getOne,
);

Router.get(
    '/polls',
    verifyUserToken,
    pollController.getMany,
);

Router.get(
    '/polls/:pollId/questions',
    verifyUserToken,
    pollValidation.getOne,
    validatorHandler,
    pollController.getOneWithQuestions,
)


export default Router;
