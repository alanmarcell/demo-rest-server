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
                displayName: 'CREATE TEST',
                id: 'ptz-user-app UserApp.seed()',
                email: '',
                userName: ''
            }
        };
        const newUser = {
            userName: 'TESTE LALALA',
            email: 'teste@live.com',
            displayName: 'DYSPLAY LALALA'
        };
        const userArgs = {
            userArgs: newUser,
            authedUser
        };
        const createdPrd = await userApp.saveUser(userArgs);
        log('createdPrd', createdPrd);
    }
    catch (e) {
        console.log('Seed REpository', e);
    }
}
export { createUser, getUserApp, getDb };
//# sourceMappingURL=SeedRepository.js.map