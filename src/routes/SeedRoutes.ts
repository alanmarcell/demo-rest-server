import express from 'express';
import * as SeedController from '../seed/SeedController';

const router = express.Router();

function getSeedRoutes() {
  console.log('seed route');
  router.get('/seed', SeedController.seedUsers);

  return router;
}

export { getSeedRoutes };
