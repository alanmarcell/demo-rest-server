import UserRepository from './UserRepository';
class UserBusiness {
    constructor() {
        this.userRepository = new UserRepository();
    }
    create(user, callback) {
        this.userRepository.create(user, callback);
    }
    retrieve(callback) {
        this.userRepository.retrieve(callback);
    }
    // tslint:disable-next-line:variable-name
    update(_id, item, callback) {
        this.userRepository.findById(_id, (err, res) => {
            if (err)
                callback(err, res);
            else
                this.userRepository.update(res._id, item, callback);
        });
    }
    // tslint:disable-next-line:variable-name
    delete(_id, callback) {
        this.userRepository.delete(_id, callback);
    }
    // tslint:disable-next-line:variable-name
    findById(_id, callback) {
        this.userRepository.findById(_id, callback);
    }
    findOne(name, callback) {
        this.userRepository.findOne({ name }, callback);
    }
}
Object.seal(UserBusiness);
export default UserBusiness;
//# sourceMappingURL=UserBusiness.js.map