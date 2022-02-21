import authRouter from './auth';

const apiPrefix = '/api/v1';

const routes = [ authRouter ];

export default (app) => {
  routes.forEach((route) => app.use(apiPrefix, route));
  return app;
};
