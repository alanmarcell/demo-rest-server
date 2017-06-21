'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _AuthenticationRoutes = require('../routes/AuthenticationRoutes');

var _AuthenticationRoutes2 = _interopRequireDefault(_AuthenticationRoutes);

var _ProductRoutes = require('../routes/ProductRoutes');

var _ProductRoutes2 = _interopRequireDefault(_ProductRoutes);

var _UserRoutes = require('../routes/UserRoutes');

var _UserRoutes2 = _interopRequireDefault(_UserRoutes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var app = (0, _express2.default)();

var Routes = function () {
    function Routes() {
        _classCallCheck(this, Routes);
    }

    _createClass(Routes, [{
        key: 'routes',
        get: function get() {
            app.use('/', new _AuthenticationRoutes2.default().routes);
            app.use('/', new _UserRoutes2.default().routes);
            app.use('/', new _ProductRoutes2.default().routes);
            return app;
        }
    }]);

    return Routes;
}();

exports.default = Routes;
//# sourceMappingURL=Routes.js.map
//# sourceMappingURL=Routes.js.map