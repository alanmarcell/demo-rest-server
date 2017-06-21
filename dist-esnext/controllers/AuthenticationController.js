import jwt from 'jsonwebtoken';
import UserBusiness from './../app/business/UserBusiness';
import { TOKEN_SECRET } from './../config/constants';
const expiresIn = 10;
class AuthenticationController {
    verifyToken(req, res, next) {
        // check header or url parameters or post parameters for token
        const token = req.body.token || req.query.token || req.headers['x-access-token'];
        // decode token
        if (token) {
            // verifies secret and checks exp
            console.log(TOKEN_SECRET);
            console.log(typeof (TOKEN_SECRET));
            jwt.verify(token, TOKEN_SECRET, (err, decoded) => {
                if (err) {
                    res.json({ success: false, message: 'Failed to authenticate token.' });
                }
                else {
                    // if everything is good, save to request for use in other routes
                    req.decoded = decoded;
                    next();
                }
            });
        }
        else {
            // if there is no token
            // return an error
            res.status(403).send({
                success: false,
                message: 'No token provided.'
            });
        }
    }
    authenticateUser(req, res) {
        console.log(TOKEN_SECRET);
        console.log(typeof (TOKEN_SECRET));
        try {
            const userName = req.body.name;
            const userBusiness = new UserBusiness();
            userBusiness.findOne(userName, (error, user) => {
                if (error)
                    return res.send({ error: 'error' });
                if (!user)
                    return res.json({ success: false, message: 'Authentication failed. User not found.' });
                // check if password matches
                if (user.password !== req.body.password)
                    return res.json({ success: false, message: 'Authentication failed. Wrong password.' });
                // if user is found and password is right
                // create a token
                const token = jwt.sign(user, TOKEN_SECRET, {
                    expiresIn // expires in 60 seconds
                });
                // return the information including token as JSON
                res.json({
                    success: true,
                    message: 'Enjoy your token!',
                    token,
                    expiresIn
                });
            });
        }
        catch (e) {
            console.log(e);
            res.send({ error: 'error in your request' });
        }
    }
}
export default AuthenticationController;
//# sourceMappingURL=AuthenticationController.js.map