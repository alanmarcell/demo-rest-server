import express from 'express';
import { log } from '../index';
import { IUserModel } from './IUser';
import * as UserBusiness from './UserBusiness';

function createUser(req: express.Request, res: express.Response): void {
  try {
    const user: IUserModel = req.body as IUserModel;

    UserBusiness.createUser(user, (error) => {
      if (error) res.send({ error: 'error' });
      else res.send({ success: 'success' });
    });
  } catch (e) {
    log(e);
    res.send({ error: 'error in your request' });
  }
}

function updateUser(req: express.Request, res: express.Response): void {
  try {
    const user: IUserModel = req.body as IUserModel;
    const id: string = req.params._id;

    UserBusiness.updateUser(id, user, (error) => {
      if (error) res.send({ error: 'error' });
      else res.send({ success: 'success' });
    });
  } catch (e) {
    log(e);
    res.send({ error: 'error in your request' });

  }
}

function deleteUser(req: express.Request, res: express.Response): void {
  try {
    const id: string = req.params._id;
    UserBusiness.deleteUser(id, (error) => {
      if (error) res.send({ error: 'error' });
      else res.send({ success: 'success' });
    });
  } catch (e) {
    log(e);
    res.send({ error: 'error in your request' });

  }
}

function retrieveUsers(req: express.Request, res: express.Response): void {
  try {
    UserBusiness.retrieveUsers((error, result) => {
      if (error) res.send({ error: 'error' + req });
      else res.send(result);
    });
  } catch (e) {
    log(e);
    res.send({ error: 'error in your request' });

  }
}

function findUserById(req: express.Request, res: express.Response): void {
  try {
    const id: string = req.params._id;
    UserBusiness.findUserById(id, (error, result) => {
      if (error) res.send({ error: 'error' });
      else res.send(result);
    });
  } catch (e) {
    log(e);
    res.send({ error: 'error in your request' });
  }
}

function findUser(req: express.Request, res: express.Response): void {
  try {
    const param: string = req.params.param;
    UserBusiness.findUser(param, (error, result) => {
      if (error) res.send({ error });
      else res.send(result);
    });
  } catch (e) {
    log(e);
    res.send({ error: 'error in your request' });
  }
}

export { createUser, findUser, deleteUser, updateUser, retrieveUsers, findUserById };
