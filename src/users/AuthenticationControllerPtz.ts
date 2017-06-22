import express from 'express';
import jwt from 'jsonwebtoken';
import { log } from '../index';
import * as SeedRepository from '../seed/SeedRepository';
import { TOKEN_SECRET } from './../config/constants';
import { findUser } from './../users/UserBusiness';
const expiresIn = 1000; // seconds

function verifyToken(req, res, next) {
  const token = req.body.token || req.query.token || req.headers['x-access-token'];

  if (token) {
    jwt.verify(token, TOKEN_SECRET, (err, decoded) => {
      if (err) {
        res.json({ success: false, message: 'Failed to authenticate token.' });
      } else {
        req.decoded = decoded;
        next();
      }
    });
  } else {
    res.status(403).send({
      success: false,
      message: 'No token provided.'
    });

  }
}

async function authenticateUserPtz(req: express.Request, res: express.Response) {
  try {
    const user = req.body;

    const authUser = await SeedRepository.authenticateUserPtz(user);

    if (!authUser) return res.json({ success: false, message: 'Authentication failed. User not found.' });

    const token = jwt.sign(user, TOKEN_SECRET, {
      expiresIn // expires in 60 seconds
    });

    res.json({
      success: true,
      message: 'Enjoy your token!',
      token,
      expiresIn
    });
  } catch (e) {
    log(e);
    res.send({ message: 'AUTH_CONTROLLER _|_' });
  }
}

function authenticateUser(req: express.Request, res: express.Response): void {

  try {
    const userName: string = req.body.name;
    findUser(userName, (error, user) => {
      if (error) return res.send({ error: 'error' });

      if (!user) return res.json({ success: false, message: 'Authentication failed. User not found.' });

      if (user.password !== req.body.password)
        return res.json({ success: false, message: 'Authentication failed. Wrong password.' });

      const token = jwt.sign(user, TOKEN_SECRET, {
        expiresIn // expires in 60 seconds
      });

      res.json({
        success: true,
        message: 'Enjoy your token!',
        token,
        expiresIn
      });
    });
  } catch (e) {
    log(e);
    res.send({ error: 'error in your request' });
  }
}

export {
  authenticateUser,
  authenticateUserPtz,
  verifyToken
};
