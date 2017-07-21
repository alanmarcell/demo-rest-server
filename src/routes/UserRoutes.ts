import { authUser,
   cDecode, cEncode, getAuthToken, saveUser, tokenSecret, verifyAuthToken } from '@alanmarcell/ptz-user-app';
import {
    authUserForm
} from '@alanmarcell/ptz-user-domain';
import { createUserRepository } from '@alanmarcell/ptz-user-repository';
import express from 'express';
import { DB_CONNECTION_STRING } from '../config/constants';
// import { log } from '../index';
import * as UserController from '../users/UserController';

const router = express.Router();

const getUserRoutes = async () => {

  const userRepository = await createUserRepository(DB_CONNECTION_STRING, 'users');
  router.post('/users', UserController.createUser(await saveUser({userRepository})));
  router.post('/authenticateUser', UserController.authenticateUser(await getAuthToken({authUserForm,
                authUser: authUser( userRepository.getByUserNameOrEmail),
                encode: cEncode(tokenSecret)})));
  router.use(UserController.verifyToken(await verifyAuthToken(cDecode)));

  return router;
};

export { getUserRoutes };
