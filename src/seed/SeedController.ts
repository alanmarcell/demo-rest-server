import express from 'express';
import { createConnection } from '../core/BaseRepositoryPtz';
// import { DB_CONNECTION_STRING } from '../config/constants';
// import { getDb, getUserApp } from '../core/BaseRepositoryPtz';
import { log } from '../index';
import * as SeedRepository from '../seed/SeedRepository';

async function seedUsers(req: express.Request, res: express.Response) {
  try {
    console.log('SEED_CONTROLLER ___\\|/____');
    // const param: string = req.params.param;
    const result = await createConnection();
    res.send({ message: 'Sedado' });
    console.log(result);
  } catch (e) {
    log(e);
    res.send({ error: 'error in your request' });
  }
}

async function createUser(req: express.Request, res: express.Response) {
  try {
    console.log('CREATE_CONTROLLER ___\\|/____');
    const user = req.body;

    const result = await SeedRepository.createUser(user);
    console.log(result);
  } catch (e) {
    log(e);
    res.send({ message: '_|_' });
  }
}

export { seedUsers, createUser };
