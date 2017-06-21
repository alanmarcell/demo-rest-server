// import express from 'express';
// import { IAuthToken, ICreatedBy, IUserApp } from 'ptz-user-domain';
// import IBaseController from '../core/IBaseController';
// import { log } from '../index';
// import { IUserModel } from './IUser';
// import UserBusiness from './UserBusiness';

// import { ILog } from 'ptz-log';

// interface IUserControllerArgs {
//   userApp: IUserApp;
//   log: ILog;
// }

// function UserControllerPtz({ userApp, log }: IUserControllerArgs) {
//   async function create(req: express.Request, res: express.Response) {
//     try {
//       // const userArgs: IUserModel = req.body as IUserModel;

//       const userArgs = req.body;

//       const savedUser = await userApp.saveUser({
//         userArgs,
//         authedUser: null // TODO: FIX IT! SEND createdBy from context
//       });
//       log('saved user:', savedUser);
//       return savedUser;
//     } catch (e) {
//       log(e);
//       res.send({ error: 'error in your request' });
//     }
//   }
// }

// export default UserControllerPtz;

//   // update(req: express.Request, res: express.Response): void {
//   //   try {
//   //     const user: IUserModel = req.body as IUserModel;
//   //     const id: string = req.params._id;
//   //     const userBusiness = new UserBusiness();
//   //     userBusiness.update(id, user, (error) => {
//   //       if (error) res.send({ error: 'error' });
//   //       else res.send({ success: 'success' });
//   //     });
//   //   } catch (e) {
//   //     log(e);
//   //     res.send({ error: 'error in your request' });

//   //   }
//   // }
//   // delete (req: express.Request, res: express.Response): void {
//   //   try {

//   //     const id: string = req.params._id;
//   //     const userBusiness = new UserBusiness();
//   //     userBusiness.delete(id, (error) => {
//   //       if (error) res.send({ error: 'error' });
//   //       else res.send({ success: 'success' });
//   //     });
//   //   } catch (e) {
//   //     log(e);
//   //     res.send({ error: 'error in your request' });

//   //   }
//   // }
//   // retrieve(req: express.Request, res: express.Response): void {
//   //   try {
//   //     const userBusiness = new UserBusiness();
//   //     userBusiness.retrieve((error, result) => {
//   //       if (error) res.send({ error: 'error' + req });
//   //       else res.send(result);
//   //     });
//   //   } catch (e) {
//   //     log(e);
//   //     res.send({ error: 'error in your request' });

//   //   }
//   // }
//   // findById(req: express.Request, res: express.Response): void {
//   //   try {

//   //     const id: string = req.params._id;
//   //     const userBusiness = new UserBusiness();
//   //     userBusiness.findById(id, (error, result) => {
//   //       if (error) res.send({ error: 'error' });
//   //       else res.send(result);
//   //     });
//   //   } catch (e) {
//   //     log(e);
//   //     res.send({ error: 'error in your request' });

//   //   }
//   // }

//   // findOne(req: express.Request, res: express.Response): void {
//   //   try {
//   //     const param: string = req.params.param;
//   //     const userBusiness = new UserBusiness();
//   //     userBusiness.findOne(param, (error, result) => {
//   //       if (error) res.send({ error: 'error' });
//   //       else res.send(result);
//   //     });
//   //   } catch (e) {
//   //     log(e);
//   //     res.send({ error: 'error in your request' });

//   //   }
//   // }

// // class UserController implements IBaseController<UserBusiness> {

// //   create(req: express.Request, res: express.Response): void {
// //     try {
// //       const userArgs: IUserModel = req.body as IUserModel;

// //       const savedUser = await userApp.saveUser({
// //         userArgs,
// //         authedUser: null // TODO: FIX IT! SEND createdBy from context
// //       });
// //       const userBusiness = new UserBusiness();
// //       userBusiness.create(user, (error) => {
// //         if (error) res.send({ error: 'error' });
// //         else res.send({ success: 'success' });
// //       });
// //     } catch (e) {
// //       log(e);
// //       res.send({ error: 'error in your request' });
// //     }
// //   }

// //   update(req: express.Request, res: express.Response): void {
// //     try {
// //       const user: IUserModel = req.body as IUserModel;
// //       const id: string = req.params._id;
// //       const userBusiness = new UserBusiness();
// //       userBusiness.update(id, user, (error) => {
// //         if (error) res.send({ error: 'error' });
// //         else res.send({ success: 'success' });
// //       });
// //     } catch (e) {
// //       log(e);
// //       res.send({ error: 'error in your request' });

// //     }
// //   }
// //   delete(req: express.Request, res: express.Response): void {
// //     try {

// //       const id: string = req.params._id;
// //       const userBusiness = new UserBusiness();
// //       userBusiness.delete(id, (error) => {
// //         if (error) res.send({ error: 'error' });
// //         else res.send({ success: 'success' });
// //       });
// //     } catch (e) {
// //       log(e);
// //       res.send({ error: 'error in your request' });

// //     }
// //   }
// //   retrieve(req: express.Request, res: express.Response): void {
// //     try {
// //       const userBusiness = new UserBusiness();
// //       userBusiness.retrieve((error, result) => {
// //         if (error) res.send({ error: 'error' + req });
// //         else res.send(result);
// //       });
// //     } catch (e) {
// //       log(e);
// //       res.send({ error: 'error in your request' });

// //     }
// //   }
// //   findById(req: express.Request, res: express.Response): void {
// //     try {

// //       const id: string = req.params._id;
// //       const userBusiness = new UserBusiness();
// //       userBusiness.findById(id, (error, result) => {
// //         if (error) res.send({ error: 'error' });
// //         else res.send(result);
// //       });
// //     } catch (e) {
// //       log(e);
// //       res.send({ error: 'error in your request' });

// //     }
// //   }

// //   findOne(req: express.Request, res: express.Response): void {
// //     try {
// //       const param: string = req.params.param;
// //       const userBusiness = new UserBusiness();
// //       userBusiness.findOne(param, (error, result) => {
// //         if (error) res.send({ error: 'error' });
// //         else res.send(result);
// //       });
// //     } catch (e) {
// //       log(e);
// //       res.send({ error: 'error in your request' });

// //     }
// //   }
// // }

// // export default UserController;
