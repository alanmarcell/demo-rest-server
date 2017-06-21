import UserSchema from './../dataAccess/schemas/UserSchema';
import RepositoryBase from './BaseRepository';
class UserRepository extends RepositoryBase {
    constructor() {
        super(UserSchema);
    }
}
Object.seal(UserRepository);
export default UserRepository;
//# sourceMappingURL=UserRepository.js.map