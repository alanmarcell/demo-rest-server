import mongoose from 'mongoose';
import { log } from '../index';
class BaseRepository {
    constructor(schemaModel) {
        this.model = schemaModel;
    }
    create(item, callback) {
        try {
            this.model.create(item, (err, res) => {
                if (err)
                    log('error', err);
                callback(err, res);
            });
        }
        catch (err) {
            log(err);
        }
    }
    retrieve(callback, start, items) {
        if (items)
            // tslint:disable-next-line:radix
            this.model.find({}, callback).skip(parseInt(start)).limit(parseInt(items));
        else
            this.model.find({}, callback);
    }
    // tslint:disable-next-line:variable-name
    update(_id, item, callback) {
        // log(callback);
        this.model.update({ _id }, item, (err, res) => {
            if (err)
                log('error', err);
            callback(err, res);
        });
    }
    // tslint:disable-next-line:variable-name
    delete(_id, callback) {
        this.model.findByIdAndRemove({ _id: this.toObjectId(_id) }, (err, res) => {
            if (err)
                log('error', err);
            callback(err, res);
        });
    }
    // tslint:disable-next-line:variable-name
    findById(_id, callback) {
        this.model.findById(_id, callback);
    }
    findOne(query, callback) {
        this.model.findOne(query, callback);
    }
    // tslint:disable-next-line:variable-name
    toObjectId(_id) {
        return mongoose.Types.ObjectId.createFromHexString(_id);
    }
}
export default BaseRepository;
//# sourceMappingURL=BaseRepository.js.map