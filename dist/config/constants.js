'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.tokenTimeout = exports.TOKEN_SECRET = exports.DB_CONNECTION_STRING = exports.PASSWORD_SALT = exports.PROD_URL = exports.DEV_URL = undefined;

var _dotenv = require('dotenv');

var _dotenv2 = _interopRequireDefault(_dotenv);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv2.default.config({ silent: true });
var _process$env = process.env;
var DEV_URL = _process$env.DEV_URL,
    PROD_URL = _process$env.PROD_URL,
    PASSWORD_SALT = _process$env.PASSWORD_SALT;
exports.DEV_URL = DEV_URL;
exports.PROD_URL = PROD_URL;
exports.PASSWORD_SALT = PASSWORD_SALT;
var DB_CONNECTION_STRING = exports.DB_CONNECTION_STRING = process.env.NODE_ENV === 'production' ? process.env.PROD_URL : process.env.DEV_URL;
var TOKEN_SECRET = exports.TOKEN_SECRET = PASSWORD_SALT;
var tokenTimeout = exports.tokenTimeout = 10;
//# sourceMappingURL=constants.js.map
//# sourceMappingURL=constants.js.map