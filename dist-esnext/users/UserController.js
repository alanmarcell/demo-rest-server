import { createApp } from '@alanmarcell/ptz-user-app';
import { createUserRepository } from '@alanmarcell/ptz-user-repository';
import { DB_CONNECTION_STRING } from '../config/constants';
import { log } from '../index';
const expiresIn = 1000; // seconds
const getAuthedBy = () => {
    return {
        ip: '',
        dtCreated: new Date(),
        user: {
            displayName: 'teste',
            id: 'teste',
            email: 'teste',
            userName: 'teste'
        }
    };
};
const getUserApp = async () => {
    const userRepository = await createUserRepository(DB_CONNECTION_STRING, 'users');
    return createApp({ userRepository, log });
};
// tslint:disable-next-line:max-line-length
async function verifyToken(req, res, next) {
    const token = req.body.token || req.query.token || req.headers['x-access-token'];
    if (!token)
        return res.status(403).send({ success: false, message: 'No token provided.' });
    const authedUser = getAuthedBy();
    const userApp = await getUserApp();
    const verifyArgs = { token, authedUser };
    const toAuth = await userApp.verifyAuthToken(verifyArgs);
    if (!toAuth)
        return res.json({ success: false, message: 'Failed to authenticate token.' });
    req.decoded = toAuth;
    next();
}
async function authenticateUser(req, res) {
    try {
        const user = req.body;
        const userApp = await getUserApp();
        const authedUser = getAuthedBy();
        const form = {
            userNameOrEmail: user.userNameOrEmail,
            password: user.password.toString()
        };
        const userArgs = {
            form,
            authedUser
        };
        const token = await userApp.getAuthToken(userArgs);
        if (!token.user)
            return res.json({ success: false, message: 'Authentication failed. User not found.' });
        res.json({
            success: true,
            message: 'Enjoy your token!',
            token: token.authToken,
            expiresIn
        });
    }
    catch (e) {
        res.send({ message: e });
    }
}
async function createUser(req, res) {
    try {
        const user = req.body;
        const userApp = await getUserApp();
        const authedUser = getAuthedBy();
        const userArgs = {
            userArgs: user,
            authedUser
        };
        const result = await userApp.saveUser(userArgs);
        res.send({ message: result });
    }
    catch (e) {
        res.send({ message: e });
    }
}
export { createUser, authenticateUser, verifyToken };
//# sourceMappingURL=UserController.js.map