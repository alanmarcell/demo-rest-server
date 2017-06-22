// import { DB_CONNECTION_STRING } from '../config/constants';
// import { log } from '../index';
// import cors from 'cors';
// import express from 'express';
// import { MongoClient } from 'mongodb';
// import { UserApp } from 'ptz-user-app';
// import { UserRepository } from 'ptz-user-repository';
// // import logFile from 'ptz-log-file';
// // const log = logFile({ dir: './logs' });
// const app = express();
// app.use(cors());
// log('starting server');
// const PORT = 3011;
// function getRunningUrl(path) {
//   return `http://localhost:${PORT}${path}`;
// }
// async function createConnection() {
//   try {
//     const db = await MongoClient.connect(DB_CONNECTION_STRING);
//     const userApp = new UserApp({
//       userRepository: new UserRepository(db),
//       log
//     });
//     console.log(getRunningUrl('userApp'));
//     // await userApp.seed();
//     // return userApp;
//   } catch (e) { console.log(e); }
// }
// async function createUser(){
//     await userApp.saveUser(userArgs)
// }
// export {
//   createConnection
// }
//# sourceMappingURL=UserControllerPtz.js.map