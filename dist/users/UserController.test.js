'use strict';

var _ptzAssert = require('ptz-assert');

var _sinon = require('sinon');

var _UserController = require('./UserController');

var UserController = _interopRequireWildcard(_UserController);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var userController = UserController;
// tslint:disable-next-line:prefer-const
var req = void 0;
// tslint:disable-next-line:prefer-const
var res = void 0;
beforeEach(function () {
    res = { json: (0, _sinon.spy)(), send: (0, _sinon.spy)() };
});
describe('User Controller', function () {
    it('authenticateUser', _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
        var body;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        body = { userNameOrEmail: 'userNameOrEmail', password: 'password' };

                        req = { body: body };
                        _context.next = 4;
                        return userController.authenticateUser(req, res);

                    case 4:
                        (0, _ptzAssert.ok)(res.json.calledOnce);

                    case 5:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, undefined);
    })));
    it('createUser', _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
        var body;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        body = {
                            userName: 'angeloOcana',
                            email: 'angeloocana@gmail.com',
                            displayName: 'Angelo Ocana'
                        };

                        req = { body: body };
                        _context2.next = 4;
                        return userController.createUser(req, res);

                    case 4:
                        (0, _ptzAssert.ok)(res.json.calledOnce);

                    case 5:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, undefined);
    })));
    it('verifyToken', _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
        var body, next;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
                switch (_context3.prev = _context3.next) {
                    case 0:
                        // tslint:disable-next-line:max-line-length
                        body = { token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOiJyay14Mlh2U1ciLCJhZG1pbiI6ZmFsc2UsInVzZXJOYW1lIjoiYWxhbm1hcmNlbGwiLCJlbWFpbCI6ImFsYW5tYXJjZWxsQGxpdmUuY29tIiwiZGlzcGxheU5hbWUiOiJBbGFuIE1hcmNlbGwiLCJwYXNzd29yZCI6bnVsbCwicGFzc3dvcmRDb25maXJtIjoiMTIzNDU2Nzg5IiwiY3JlYXRlZEJ5Ijp7ImlwIjoiIiwiZHRDcmVhdGVkIjoiMjAxNy0wNy0xNVQwNTo0NToxMi44MjNaIiwidXNlciI6eyJkaXNwbGF5TmFtZSI6InRlc3RlIiwiaWQiOiJ0ZXN0ZSIsImVtYWlsIjoidGVzdGUiLCJ1c2VyTmFtZSI6InRlc3RlIn19LCJpZCI6InJrLXgyWHZTVyIsInBhc3N3b3JkSGFzaCI6IiQyYSQxMCRDaGhMdjNlQTcySTdUV2JxcC92ajEueVR6Z3pORWNMVHRxdjYvQkR3dmdzNFBTSHhod2lFcSJ9.yQknxJ81fMtRZjC53hLmwkqMECChKnZPigyQqzEqVuA' };

                        req = { body: body };
                        next = (0, _sinon.spy)();
                        _context3.next = 5;
                        return userController.verifyToken(req, res, next);

                    case 5:
                        (0, _ptzAssert.ok)(next.calledOnce);

                    case 6:
                    case 'end':
                        return _context3.stop();
                }
            }
        }, _callee3, undefined);
    })));
});
//# sourceMappingURL=UserController.test.js.map
//# sourceMappingURL=UserController.test.js.map