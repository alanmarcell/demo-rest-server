import dotenv from 'dotenv';
dotenv.config();
import { MongoClient } from 'mongodb';
import { UserApp } from 'ptz-user-app';
import { UserRepository } from 'ptz-user-repository';
import { DB_CONNECTION_STRING } from '../config/constants';
import { log } from '../index';
// log('Base REpository');
const PORT = 3011;
const getRunningUrl = (path) => `http://localhost:${PORT}${path}`;
const getDb = async (dbConnectionString) => await MongoClient.connect(DB_CONNECTION_STRING);
const getUserApp = (db) => new UserApp({ userRepository: new UserRepository(db), log });
async function createUser(user) {
    try {
        // const db = await MongoClient.connect(DB_CONNECTION_STRING);
        const db = await getDb(DB_CONNECTION_STRING);
        const userApp = getUserApp(db);
        await userApp.saveUser(user);
        getRunningUrl(userApp);
    }
    catch (e) {
        console.log(e);
    }
}
export { createUser, getUserApp, getDb };
//# sourceMappingURL=SeedRepository.js.map