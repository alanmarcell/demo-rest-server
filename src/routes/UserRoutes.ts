import express from 'express';
import * as UserController from '../users/UserController';

const router = express.Router();

function getUserRoutes() {

  router.post('/users', UserController.createUser);
  router.post('/authenticateUser', UserController.authenticateUser);
  router.use(UserController.verifyToken);

  return router;
}

export { getUserRoutes };
