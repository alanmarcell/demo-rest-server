import {  createUserRepoFake,  saveUser as save } from '@alanmarcell/ptz-user-app';
import { IAuthUserArgs, IUser } from '@alanmarcell/ptz-user-domain';
import dotenv from 'dotenv';
import { equal, ok } from 'ptz-assert';
import { spy } from 'sinon';

import * as UserController from './UserController';

dotenv.config();
// tslint:disable-next-line:prefer-const
let req;
// tslint:disable-next-line:prefer-const
let res;
const userRepository = createUserRepoFake();

beforeEach(() => {
  res = { json: spy(), send: spy() };
});

const getAuthToken = (func: { authUserForm, authUser: any, encode }) => async (args: IAuthUserArgs) =>
  await {
    authToken: 'authToken',
    user: { userName: 'user', email: 'alanmarcell@live.com', displayName: 'Alan Marcell' },
    errors: []
  };

const decode = (u) => u;
describe('User Controller', () => {
  it('authenticateUser', async () => {
    const body = { userNameOrEmail: 'userNameOrEmail', password: 'password' };

    function authUser() { return { user: { username: 'testName' }, token: 'testToken' }; }

    req = { body };
    // tslint:disable-next-line:max-line-length
    await UserController.authenticateUser(
      getAuthToken({
        authUserForm: decode,
        authUser,
        encode: decode
      }), req, res);
    // console.log(response);
    ok(res.json.calledOnce);
    ok(res.json.lastCall.args[0].success);
  });

  it('createUser', async () => {
    const body = {
      userName: 'alanMarcell',
      email: 'angeloocana@gmail.com',
      displayName: 'Angelo Ocana'
    };

    req = { body };
    const hashPass: (u: IUser) => Promise<IUser> = (u) => Promise.resolve(u),
      createUser: (u: IUser) => IUser = (u) => u,
      isValid: (user) => boolean = (u) => true,
      updateUser: (dbUser: IUser, user: IUser) => IUser = (d, u) => u,
      otherUsersWithSameUserNameOrEmail: (user: IUser, otherUsers: IUser[]) => IUser = (d, u) => d;

    const saveUser = save({
      userRepository,
      hashPass,
      createUser,
      isValid,
      updateUser, otherUsersWithSameUserNameOrEmail
    });
    await UserController.createUser(saveUser, req, res);

    ok(res.json.calledOnce);
    equal(res.json.lastCall.args[0].message.userName, body.userName);
    equal(res.json.lastCall.args[0].message.email, body.email);
    equal(res.json.lastCall.args[0].message.displayName, body.displayName);
  });

  it('verifyToken', async () => {
    // tslint:disable-next-line:max-line-length
    const body = { token: 'faketoken' };
    req = { body };
    const next = spy();
    await UserController.verifyToken(decode, req, res, next);
    ok(next.calledOnce);
  });
});
