'use strict';

var createGraphqlSchema = function () {
    var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(schema) {
        var json, file;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return (0, _graphql.graphql)(schema, _utilities.introspectionQuery);

                    case 2:
                        json = _context.sent;
                        file = '/public/schema.json';

                        fs.writeFile('.' + file, JSON.stringify(json, null, 2), function (err) {
                            if (err) throw err;
                            log('Json schema created!', getRunningUrl(file));
                        });
                        app.use('/public', _express2.default.static('public'));

                    case 6:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    return function createGraphqlSchema(_x) {
        return _ref.apply(this, arguments);
    };
}();

var _dotenv = require('dotenv');

var _dotenv2 = _interopRequireDefault(_dotenv);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _expressGraphql = require('express-graphql');

var _expressGraphql2 = _interopRequireDefault(_expressGraphql);

var _fs = require('fs');

var fs = _interopRequireWildcard(_fs);

var _graphql = require('graphql');

var _utilities = require('graphql/utilities');

var _mongodb = require('mongodb');

var _schema = require('./core/schema');

var _schema2 = _interopRequireDefault(_schema);

var _mongoDbUrl = require('./mongoDbUrl');

var _mongoDbUrl2 = _interopRequireDefault(_mongoDbUrl);

var _ptzUserApp = require('ptz-user-app');

var _ptzUserRepository = require('ptz-user-repository');

var _ptzLogFile = require('ptz-log-file');

var _ptzLogFile2 = _interopRequireDefault(_ptzLogFile);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

_dotenv2.default.config();

var log = (0, _ptzLogFile2.default)({ dir: './logs' });
var app = (0, _express2.default)();
app.use((0, _cors2.default)());
log('starting server');
var PORT = 3011;
function getRunningUrl(path) {
    return 'http://localhost:' + PORT + path;
}

_asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
    var db, userApp, schema, graphqlFolder;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
            switch (_context2.prev = _context2.next) {
                case 0:
                    _context2.prev = 0;
                    _context2.next = 3;
                    return _mongodb.MongoClient.connect(_mongoDbUrl2.default);

                case 3:
                    db = _context2.sent;
                    userApp = new _ptzUserApp.UserApp({
                        userRepository: new _ptzUserRepository.UserRepository(db),
                        log: log
                    });
                    _context2.next = 7;
                    return userApp.seed();

                case 7:
                    schema = (0, _schema2.default)(userApp, log);
                    graphqlFolder = '/graphql';

                    app.use(graphqlFolder, (0, _expressGraphql2.default)({
                        schema: schema,
                        graphiql: true
                    }));
                    _context2.next = 12;
                    return createGraphqlSchema(schema);

                case 12:
                    app.listen(PORT, function () {
                        var url = getRunningUrl(graphqlFolder);
                        log('Running on ' + url);
                    });
                    _context2.next = 18;
                    break;

                case 15:
                    _context2.prev = 15;
                    _context2.t0 = _context2['catch'](0);

                    log(_context2.t0);

                case 18:
                case 'end':
                    return _context2.stop();
            }
        }
    }, _callee2, undefined, [[0, 15]]);
}))();
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map