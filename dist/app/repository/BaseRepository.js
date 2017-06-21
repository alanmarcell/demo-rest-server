'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RepositoryBase = function () {
    function RepositoryBase(schemaModel) {
        _classCallCheck(this, RepositoryBase);

        this.model = schemaModel;
    }

    _createClass(RepositoryBase, [{
        key: 'create',
        value: function create(item, callback) {
            try {
                this.model.create(item, function (err, res) {
                    if (err) console.log('error', err);
                    callback(err, res);
                });
            } catch (err) {
                console.log(err);
            }
        }
    }, {
        key: 'retrieve',
        value: function retrieve(callback, start, items) {
            if (items)
                // tslint:disable-next-line:radix
                this.model.find({}, callback).skip(parseInt(start)).limit(parseInt(items));else this.model.find({}, callback);
        }
        // tslint:disable-next-line:variable-name

    }, {
        key: 'update',
        value: function update(_id, item, callback) {
            // console.log(callback);
            this.model.update({ _id: _id }, item, function (err, res) {
                if (err) console.log('error', err);
                callback(err, res);
            });
        }
        // tslint:disable-next-line:variable-name

    }, {
        key: 'delete',
        value: function _delete(_id, callback) {
            this.model.findByIdAndRemove({ _id: this.toObjectId(_id) }, function (err, res) {
                if (err) console.log('error', err);
                callback(err, res);
            });
        }
        // tslint:disable-next-line:variable-name

    }, {
        key: 'findById',
        value: function findById(_id, callback) {
            this.model.findById(_id, callback);
        }
    }, {
        key: 'findOne',
        value: function findOne(query, callback) {
            this.model.findOne(query, callback);
        }
        // tslint:disable-next-line:variable-name

    }, {
        key: 'toObjectId',
        value: function toObjectId(_id) {
            return _mongoose2.default.Types.ObjectId.createFromHexString(_id);
        }
    }]);

    return RepositoryBase;
}();

exports.default = RepositoryBase;
//# sourceMappingURL=BaseRepository.js.map
//# sourceMappingURL=BaseRepository.js.map