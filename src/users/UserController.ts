import { createApp } from '@alanmarcell/ptz-user-app';
import {
  IAuthUserArgs, IAuthUserFormArgs, ICreatedBy, ISaveUserArgs,
  IUser, IUserForLog, IVerifyAuthTokenArgs
} from '@alanmarcell/ptz-user-domain';
import { createUserRepository } from '@alanmarcell/ptz-user-repository';
import express from 'express';
import R from 'ramda';
import { DB_CONNECTION_STRING } from '../config/constants';
import { log } from '../index';

const expiresIn = 1000; // seconds

const getAuthedBy = (ip: string, user?: IUserForLog): ICreatedBy => {
  return {
    ip,
    dtCreated: new Date(),
    user: user || {
      displayName: 'Unknown User',
      id: '0',
      email: 'Unknown User',
      userName: 'Unknown User'
    }
  };
};

const getUserApp = async () => {
  const userRepository = await createUserRepository(DB_CONNECTION_STRING, 'users');
  return createApp({ userRepository, log });
};

// tslint:disable-next-line:max-line-length
async function verifyToken(req: express.Request & { decoded: IUser }, res: express.Response, next: express.NextFunction) {
  const token = req.body.token || req.query.token || req.headers['x-access-token'];

  if (!token)
    return res.status(403).send({ success: false, message: 'No token provided.' });

  const authedUser = getAuthedBy(req.originalUrl);
  const userApp = await getUserApp();

  const verifyArgs: IVerifyAuthTokenArgs = { token, authedUser };

  const toAuth = await userApp.verifyAuthToken(verifyArgs);

  if (!toAuth) return res.json({ success: false, message: 'Failed to authenticate token.' });

  req.decoded = toAuth;
  next();
}

async function authenticateUser(req: express.Request, res: express.Response) {
  try {
    const userApp = await getUserApp();
    const authedUser = getAuthedBy(req.originalUrl);

    const form: IAuthUserFormArgs = {
      userNameOrEmail: req.body.userNameOrEmail,
      password: req.body.password.toString()
    };

    const userArgs: IAuthUserArgs = {
      form,
      authedUser
    };

    const token = await userApp.getAuthToken(userArgs);
    if (!token.user) return res.json({ success: false, message: 'Authentication failed. User not found.' });

    res.json({
      success: true,
      message: 'Enjoy your token!',
      token: token.authToken,
      expiresIn
    });
  } catch (e) { res.send({ message: e }); }
}

const createUser = R.curry(async (req: express.Request, res: express.Response) => {
  try {
    const user = req.body;

    const userApp = await getUserApp();
    const authedUser = getAuthedBy(req.originalUrl);
    const userArgs: ISaveUserArgs = {
      userArgs: user,
      authedUser
    };
    const result = await userApp.saveUser(userArgs);

    res.json({ success: true, message: result });
  } catch (e) { res.send({ message: e }); }
});

export { createUser, authenticateUser, verifyToken, getUserApp };
