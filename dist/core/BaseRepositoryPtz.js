// import dotenv from 'dotenv';
// dotenv.config();
// import { createApp } from '@alanmarcell/ptz-user-app';
// import { createUserRepository } from '@alanmarcell/ptz-user-repository';
// import { Db, MongoClient } from 'mongodb';
// import { DB_CONNECTION_STRING } from '../config/constants';
// import { log } from '../index';
// // log('Base REpository');
// const PORT = 3011;
// const getRunningUrl = (path) => `http://localhost:${PORT}${path}`;
// // const getDb = async (dbConnectionString: string) => await MongoClient.connect(DB_CONNECTION_STRING);
// // const getUserApp = (db: Db) => createApp({ userRepository: createUserRepository(db), log });
// async function createConnection() {
//   try {
//     // const db = await MongoClient.connect(DB_CONNECTION_STRING);
//     // const db = await getDb(DB_CONNECTION_STRING);
//     const userRepository = createUserRepository(DB_CONNECTION_STRING);
//     const userApp = createApp({ userRepository });
//     // await userApp.seed();
//     getRunningUrl(userApp);
//   } catch (e) { console.log(e); }
// }
// export { createConnection, getUserApp };
//# sourceMappingURL=BaseRepositoryPtz.js.map
"use strict";
//# sourceMappingURL=BaseRepositoryPtz.js.map