import express from 'express';
import jwt from 'jsonwebtoken';
import UserBusiness from './../app/business/UserBusiness';

class AuthenticationController {

  verifyToken(req, res, next) {
    // check header or url parameters or post parameters for token
    const token = req.body.token || req.query.token || req.headers['x-access-token'];

    // decode token
    if (token) {

      // verifies secret and checks exp
      jwt.verify(token, 'fcamara',  (err, decoded) => {
        if (err) {
          res.json({ success: false, message: 'Failed to authenticate token.' });
        } else {
          // if everything is good, save to request for use in other routes
          req.decoded = decoded;
          next();
        }
      });

    } else {

      // if there is no token
      // return an error
      res.status(403).send({
        success: false,
        message: 'No token provided.'
      });

    }
  }

  authenticateUser(req: express.Request, res: express.Response): void {
    try {
      const userName: string = req.body.name;
      const userBusiness = new UserBusiness();
      userBusiness.findOne(userName, (error, user) => {
        if (error) return res.send({ error: 'error' });

        if (!user) return res.json({ success: false, message: 'Authentication failed. User not found.' });

        // check if password matches
        if (user.password !== req.body.password)
          return res.json({ success: false, message: 'Authentication failed. Wrong password.' });

        // if user is found and password is right
        // create a token
        const token = jwt.sign(user, 'fcamara', {
          expiresIn: 1000 // expires in 60 seconds
        });
        // return the information including token as JSON
        res.json({
          success: true,
          message: 'Enjoy your token!',
          token,
          expiresIn: 1000
        });
      });
    } catch (e) {
      console.log(e);
      res.send({ error: 'error in your request' });
    }
  }
}

export default AuthenticationController;
