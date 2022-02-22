import authRouter from './auth';
import pollRouter from './poll'

const apiPrefix = '/api/v1';

const routes = [ authRouter, pollRouter ];

export default (app) => {
  routes.forEach((route) => app.use(apiPrefix, route));
  return app;
};
