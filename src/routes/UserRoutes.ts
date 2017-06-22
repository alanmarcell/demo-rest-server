import express from 'express';
import * as UserApp from '../users/UserApp';

const router = express.Router();

function getUserRoutes() {

  router.post('/authenticateUser', UserApp.authenticateUser);
  router.use(UserApp.verifyToken);
  router.post('/users', UserApp.createUser);

  // router.get('/users', UserApp.retrieveUsers);
  // router.put('/users/:_id', UserApp.updateUser);
  // router.get('/users/:param', UserApp.findUser);
  // router.delete('/users/:_id', UserApp.deleteUser);

  return router;
}

export { getUserRoutes };
