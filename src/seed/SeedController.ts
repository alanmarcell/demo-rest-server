import express from 'express';
import { createConnection } from '../core/BaseRepositoryPtz';
import * as SeedRepository from '../seed/SeedRepository';
// import { DB_CONNECTION_STRING } from '../config/constants';
// import { getDb, getUserApp } from '../core/BaseRepositoryPtz';
import { log } from '../index';


async function seedUsers(req: express.Request, res: express.Response) {
  try {
    console.log('SEED_CONTROLLER');
    // const param: string = req.params.param;
    const res = await createConnection();
    console.log(res);
    // UserBusiness.findUser(param, (error, result) => {
    //   if (error) res.send({ error });
    //   else res.send(result);
    // });
  } catch (e) {
    log(e);
    res.send({ error: 'error in your request' });
  }
}

async function createUser(req: express.Request, res: express.Response) {
  try {
    console.log('SEED_CONTROLLER');

    const user = req.body;

    // const param: string = req.params.param;
    const res = await SeedRepository.createUser(user);
    console.log(res);
    // UserBusiness.findUser(param, (error, result) => {
    //   if (error) res.send({ error });
    //   else res.send(result);
    // });
  } catch (e) {
    log(e);
    res.send({ error: 'error in your request' });
  }
}

export { seedUsers, createUser };
