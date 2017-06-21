import mongoose from 'mongoose';
class RepositoryBase {
    constructor(schemaModel) {
        this.model = schemaModel;
    }
    create(item, callback) {
        try {
            this.model.create(item, (err, res) => {
                if (err)
                    console.log('error', err);
                callback(err, res);
            });
        }
        catch (err) {
            console.log(err);
        }
    }
    retrieve(callback, start, items) {
        // if (items)
        //   // tslint:disable-next-line:radix
        //   this.model.find({}, callback).skip(parseInt(start)).limit(parseInt(items));
        // else
        console.log(this.model.find({}, callback));
    }
    // tslint:disable-next-line:variable-name
    update(_id, item, callback) {
        // console.log(callback);
        this.model.update({ _id }, item, (err, res) => {
            if (err)
                console.log('error', err);
            callback(err, res);
        });
    }
    // tslint:disable-next-line:variable-name
    delete(_id, callback) {
        this.model.findByIdAndRemove({ _id: this.toObjectId(_id) }, (err, res) => {
            if (err)
                console.log('error', err);
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
export default RepositoryBase;
//# sourceMappingURL=BaseRepository.js.map