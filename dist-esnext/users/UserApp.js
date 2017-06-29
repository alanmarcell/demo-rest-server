import dotenv from 'dotenv';
dotenv.config();
import { createApp } from '@alanmarcell/ptz-user-app';
import { createUserRepository } from '@alanmarcell/ptz-user-repository';
import { DB_CONNECTION_STRING } from '../config/constants';
import { log } from '../index';
// const getDb = async (dbConnectionString: string) => await MongoClient.connect(DB_CONNECTION_STRING);
// const getUserApp = (db: Db) => new UserApp({ userRepository: new UserRepository(db), log });
async function createUser(user) {
    const userRepository = await createUserRepository(DB_CONNECTION_STRING, 'users');
    const userApp = createApp({ userRepository, log });
    try {
        // const db = await getDb(DB_CONNECTION_STRING);
        // const userApp = getUserApp(db);
        const authedUser = {
            ip: '',
            dtCreated: new Date(),
            user: {
                displayName: 'teste',
                id: 'teste',
                email: 'teste',
                userName: 'teste'
            }
        };
        const userArgs = {
            userArgs: user,
            authedUser
        };
        const createdPrd = await userApp.saveUser(userArgs);
        return createdPrd;
    }
    catch (e) {
        console.log('Seed Repository', e);
    }
}
async function authenticateUserPtz(user) {
    try {
        const userRepository = await createUserRepository(DB_CONNECTION_STRING, 'users');
        const userApp = createApp({ userRepository });
        const authedUser = {
            ip: '',
            dtCreated: new Date(),
            user: {
                displayName: 'teste',
                id: 'teste',
                email: 'teste',
                userName: 'teste'
            }
        };
        const form = {
            userNameOrEmail: user.userNameOrEmail,
            password: user.password.toString()
        };
        const userArgs = {
            form,
            authedUser
        };
        const createdPrd = await userApp.authUser(userArgs);
        return createdPrd;
    }
    catch (e) {
        console.log('authUser', e);
    }
}
export { createUser, authenticateUserPtz };
//# sourceMappingURL=UserApp.js.map