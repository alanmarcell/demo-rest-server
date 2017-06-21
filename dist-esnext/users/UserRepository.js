import BaseRepository from '../core/BaseRepository';
import UserSchema from './UserSchema';
class UserRepository extends BaseRepository {
    constructor() {
        super(UserSchema);
    }
}
Object.seal(UserRepository);
export default UserRepository;
//# sourceMappingURL=UserRepository.js.map