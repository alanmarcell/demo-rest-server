import dotenv from 'dotenv';
dotenv.config();
import { createApp } from '@alanmarcell/ptz-user-app';
import {
  IAuthUserArgs, IAuthUserFormArgs, ICreatedBy, ISaveUserArgs,
  IUserArgs, IUserRepository
} from '@alanmarcell/ptz-user-domain';
import { createUserRepository } from '@alanmarcell/ptz-user-repository';
import { DB_CONNECTION_STRING } from '../config/constants';
import { log } from '../index';

// const getDb = async (dbConnectionString: string) => await MongoClient.connect(DB_CONNECTION_STRING);

// const getUserApp = (db: Db) => new UserApp({ userRepository: new UserRepository(db), log });
async function createUser(user: IUserArgs) {
  const userRepository: IUserRepository = await createUserRepository(DB_CONNECTION_STRING, 'users');
  const userApp = createApp({ userRepository, log });
  try {
    // const db = await getDb(DB_CONNECTION_STRING);
    // const userApp = getUserApp(db);

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
    return createdPrd;
  } catch (e) { console.log('Seed Repository', e); }
}

async function authenticateUserPtz(user) {
  try {

    const userRepository = await createUserRepository(DB_CONNECTION_STRING, 'users');
    const userApp = createApp({ userRepository });

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

    const form: IAuthUserFormArgs = {
      userNameOrEmail: user.userNameOrEmail,
      password: user.password.toString()
    };

    const userArgs: IAuthUserArgs = {
      form,
      authedUser
    };

    const createdPrd = await userApp.authUser(userArgs);

    return createdPrd;
  } catch (e) { console.log('authUser', e); }
}

export { createUser, authenticateUserPtz };
