import { ok } from 'ptz-assert';
import { spy } from 'sinon';

import * as UserController from './UserController';

const userController = UserController;
// tslint:disable-next-line:prefer-const
let req;
// tslint:disable-next-line:prefer-const
let res;

beforeEach(() => {
  res = { json: spy(), send: spy() };
});

describe('User Controller', () => {
  it('authenticateUser', async () => {
    const body = { userNameOrEmail: 'userNameOrEmail', password: 'password' };

    req = { body };
    await userController.authenticateUser(req, res);
    ok(res.json.calledOnce);
  });

  it('createUser', async () => {
    const body = {
      userName: 'angeloOcana',
      email: 'angeloocana@gmail.com',
      displayName: 'Angelo Ocana'
    };

    req = { body };
    await userController.createUser(req, res);

    ok(res.json.calledOnce);
  });

  it('verifyToken', async () => {
    // tslint:disable-next-line:max-line-length
    const body = { token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOiJyay14Mlh2U1ciLCJhZG1pbiI6ZmFsc2UsInVzZXJOYW1lIjoiYWxhbm1hcmNlbGwiLCJlbWFpbCI6ImFsYW5tYXJjZWxsQGxpdmUuY29tIiwiZGlzcGxheU5hbWUiOiJBbGFuIE1hcmNlbGwiLCJwYXNzd29yZCI6bnVsbCwicGFzc3dvcmRDb25maXJtIjoiMTIzNDU2Nzg5IiwiY3JlYXRlZEJ5Ijp7ImlwIjoiIiwiZHRDcmVhdGVkIjoiMjAxNy0wNy0xNVQwNTo0NToxMi44MjNaIiwidXNlciI6eyJkaXNwbGF5TmFtZSI6InRlc3RlIiwiaWQiOiJ0ZXN0ZSIsImVtYWlsIjoidGVzdGUiLCJ1c2VyTmFtZSI6InRlc3RlIn19LCJpZCI6InJrLXgyWHZTVyIsInBhc3N3b3JkSGFzaCI6IiQyYSQxMCRDaGhMdjNlQTcySTdUV2JxcC92ajEueVR6Z3pORWNMVHRxdjYvQkR3dmdzNFBTSHhod2lFcSJ9.yQknxJ81fMtRZjC53hLmwkqMECChKnZPigyQqzEqVuA' };
    req = { body };
    const next = spy();

    await userController.verifyToken(req, res, next);
    ok(next.calledOnce);
  });
});
