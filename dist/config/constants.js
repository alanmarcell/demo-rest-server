'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.tokenTimeout = exports.DB_CONNECTION_STRING = exports.PROD_URL = exports.DEV_URL = undefined;

var _dotenv = require('dotenv');

var _dotenv2 = _interopRequireDefault(_dotenv);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv2.default.config({ silent: true });
var _process$env = process.env;
var DEV_URL = _process$env.DEV_URL,
    PROD_URL = _process$env.PROD_URL;
exports.DEV_URL = DEV_URL;
exports.PROD_URL = PROD_URL;
var DB_CONNECTION_STRING = exports.DB_CONNECTION_STRING = process.env.NODE_ENV === 'production' ? process.env.PROD_URL : 'mongodb://localhost:27017/demo-server';
var tokenTimeout = exports.tokenTimeout = 10;
//# sourceMappingURL=constants.js.map
//# sourceMappingURL=constants.js.map