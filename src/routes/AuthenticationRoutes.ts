import express from 'express';
import { authenticateUserPtz } from '../users/AuthenticationControllerPtz';

const router = express.Router();
class AuthenticationRoutes {

  get routes() {

    router.post('/authenticateUser', authenticateUserPtz);

    return router;
  }
}

Object.seal(AuthenticationRoutes);

export default AuthenticationRoutes;
