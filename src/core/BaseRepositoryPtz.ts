import dotenv from 'dotenv';
dotenv.config();
import { Db, MongoClient } from 'mongodb';
import { UserApp } from 'ptz-user-app';
import { UserRepository } from 'ptz-user-repository';
import { DB_CONNECTION_STRING } from '../config/constants';
import { log } from '../index';

// log('Base REpository');

const PORT = 3011;

const getRunningUrl = (path) => `http://localhost:${PORT}${path}`;

const getDb = async (dbConnectionString: string) => await MongoClient.connect(DB_CONNECTION_STRING);

const getUserApp = (db: Db) => new UserApp({ userRepository: new UserRepository(db), log });

async function createConnection() {
  try {
    // const db = await MongoClient.connect(DB_CONNECTION_STRING);
    const db = await getDb(DB_CONNECTION_STRING);
    const userApp = getUserApp(db);
    await userApp.seed();
    getRunningUrl(userApp);
  } catch (e) { console.log(e); }
}

createConnection();
export { createConnection, getUserApp, getDb };
