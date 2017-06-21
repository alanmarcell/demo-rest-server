'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Constants = function Constants() {
    _classCallCheck(this, Constants);
};

Constants.DB_CONNECTION_STRING = process.env.NODE_ENV === 'production' ? process.env.dbURI : 'mongodb://localhost:27017/h4test';
Constants.secret = 'fcamarateste';
Object.seal(Constants);
exports.default = Constants;
//# sourceMappingURL=constants.js.map
//# sourceMappingURL=constants.js.map