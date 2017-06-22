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

async function createUser(user) {
  try {
    const db = await getDb(DB_CONNECTION_STRING);
    const userApp = getUserApp(db);
    log('Repository user ', user);
    const authedUser: ICreatedBy = {
      ip: '',
      dtCreated: new Date(),
      user: {
        displayName: 'CREATE TEST',
        id: 'ptz-user-app UserApp.seed()',
        email: '',
        userName: ''
      }
    };

    const newUser: IUserArgs = {
      userName: 'TESTE LALALA',
      email: 'teste@live.com',
      displayName: 'DYSPLAY LALALA'
    };

    const userArgs: ISaveUserArgs = {
      userArgs: newUser,
      authedUser
    };

    const createdPrd = await userApp.saveUser(userArgs);
    log('createdPrd', createdPrd);
  } catch (e) { console.log('Seed Repository', e); }
}

export { createUser, getUserApp, getDb };
