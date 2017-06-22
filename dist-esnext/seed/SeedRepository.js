import dotenv from 'dotenv';
dotenv.config();
import { MongoClient } from 'mongodb';
import { UserApp } from 'ptz-user-app';
import { UserRepository } from 'ptz-user-repository';
import { DB_CONNECTION_STRING } from '../config/constants';
import { log } from '../index';
const getDb = async (dbConnectionString) => await MongoClient.connect(DB_CONNECTION_STRING);
const getUserApp = (db) => new UserApp({ userRepository: new UserRepository(db), log });
async function createUser(user) {
    try {
        const db = await getDb(DB_CONNECTION_STRING);
        const userApp = getUserApp(db);
        log('Repository user ', user);
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
        const newUser = {
            userName: user.userName,
            email: user.email,
            displayName: user.displayName
        };
        const userArgs = {
            userArgs: newUser,
            authedUser
        };
        const createdPrd = await userApp.saveUser(userArgs);
        log('createdPrd', createdPrd);
    }
    catch (e) {
        console.log('Seed Repository', e);
    }
}
export { createUser, getUserApp, getDb };
//# sourceMappingURL=SeedRepository.js.map