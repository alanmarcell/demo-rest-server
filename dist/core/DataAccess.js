'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.mongooseConnection = exports.mongooseInstance = undefined;

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _constants = require('../config/constants');

var _index = require('../index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mongooseInstance = void 0;
var mongooseConnection = void 0;
var connect = function connect() {
    if (mongooseInstance) return mongooseInstance;
    exports.mongooseConnection = mongooseConnection = _mongoose2.default.connection;
    mongooseConnection.once('open', function () {
        (0, _index.log)('Connected to mongodb url:', _constants.DB_CONNECTION_STRING);
    });
    exports.mongooseInstance = mongooseInstance = _mongoose2.default.connect(_constants.DB_CONNECTION_STRING);
    return mongooseInstance;
};
exports.default = connect();
exports.mongooseInstance = mongooseInstance;
exports.mongooseConnection = mongooseConnection;
//# sourceMappingURL=DataAccess.js.map
//# sourceMappingURL=DataAccess.js.map