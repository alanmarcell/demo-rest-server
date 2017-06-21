'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _constants = require('./../../config/constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DataAccess = function () {
    _createClass(DataAccess, null, [{
        key: 'connect',
        value: function connect() {
            if (this.mongooseInstance) return this.mongooseInstance;
            this.mongooseConnection = _mongoose2.default.connection;
            this.mongooseConnection.once('open', function () {
                console.log('Connected to mongodb url:', _constants.DB_CONNECTION_STRING);
            });
            this.mongooseInstance = _mongoose2.default.connect(_constants.DB_CONNECTION_STRING);
            return this.mongooseInstance;
        }
    }]);

    function DataAccess() {
        _classCallCheck(this, DataAccess);

        DataAccess.connect();
    }

    return DataAccess;
}();

DataAccess.connect();
exports.default = DataAccess;
//# sourceMappingURL=DataAccess.js.map
//# sourceMappingURL=DataAccess.js.map