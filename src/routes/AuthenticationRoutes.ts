import express from 'express';
import { authenticateUser } from '../users/AuthenticationController';

const router = express.Router();
class AuthenticationRoutes {

  get routes() {

    router.post('/authenticateUser', authenticateUser);

    return router;
  }
}

Object.seal(AuthenticationRoutes);

export default AuthenticationRoutes;
