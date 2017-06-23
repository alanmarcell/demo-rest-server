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
        const db = await getDb(DB_CONNECTION_STRING);
        const userApp = getUserApp(db);
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
export { createUser, getUserApp, getDb, authenticateUserPtz };
//# sourceMappingURL=UserApp.js.map