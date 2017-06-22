import dotenv from 'dotenv';
dotenv.config();
import { Db, MongoClient } from 'mongodb';
import { UserApp } from 'ptz-user-app';
import { ICreatedBy, ISaveUserArgs, IUserArgs } from 'ptz-user-domain';
import { UserRepository } from 'ptz-user-repository';
import { DB_CONNECTION_STRING } from '../config/constants';
import { log } from '../index';

const getDb = async (dbConnectionString: string) => await MongoClient.connect(DB_CONNECTION_STRING);

const getUserApp = (db: Db) => new UserApp({ userRepository: new UserRepository(db), log });

async function createUser(user: IUserArgs) {
  try {
    const db = await getDb(DB_CONNECTION_STRING);
    const userApp = getUserApp(db);

    const authedUser: ICreatedBy = {
      ip: '',
      dtCreated: new Date(),
      user: {
        displayName: 'teste',
        id: 'teste',
        email: 'teste',
        userName: 'teste'
      }
    };
    const userArgs: ISaveUserArgs = {
      userArgs: user,
      authedUser
    };

    const createdPrd = await userApp.saveUser(userArgs);
    log('createdPrd', createdPrd);
  } catch (e) { console.log('Seed Repository', e); }
}

export { createUser, getUserApp, getDb };
