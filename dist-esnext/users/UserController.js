import { log } from '../index';
import * as UserBusiness from './UserBusiness';
function createUser(req, res) {
    try {
        const user = req.body;
        UserBusiness.createUser(user, (error) => {
            if (error)
                res.send({ error: 'error' });
            else
                res.send({ success: 'success' });
        });
    }
    catch (e) {
        log(e);
        res.send({ error: 'error in your request' });
    }
}
function updateUser(req, res) {
    try {
        const user = req.body;
        const id = req.params._id;
        UserBusiness.updateUser(id, user, (error) => {
            if (error)
                res.send({ error: 'error' });
            else
                res.send({ success: 'success' });
        });
    }
    catch (e) {
        log(e);
        res.send({ error: 'error in your request' });
    }
}
function deleteUser(req, res) {
    try {
        const id = req.params._id;
        UserBusiness.deleteUser(id, (error) => {
            if (error)
                res.send({ error: 'error' });
            else
                res.send({ success: 'success' });
        });
    }
    catch (e) {
        log(e);
        res.send({ error: 'error in your request' });
    }
}
function retrieveUsers(req, res) {
    try {
        UserBusiness.retrieveUsers((error, result) => {
            if (error)
                res.send({ error: 'error' + req });
            else
                res.send(result);
        });
    }
    catch (e) {
        log(e);
        res.send({ error: 'error in your request' });
    }
}
function findUserById(req, res) {
    try {
        const id = req.params._id;
        UserBusiness.findUserById(id, (error, result) => {
            if (error)
                res.send({ error: 'error' });
            else
                res.send(result);
        });
    }
    catch (e) {
        log(e);
        res.send({ error: 'error in your request' });
    }
}
function findUser(req, res) {
    try {
        const param = req.params.param;
        UserBusiness.findUser(param, (error, result) => {
            if (error)
                res.send({ error });
            else
                res.send(result);
        });
    }
    catch (e) {
        log(e);
        res.send({ error: 'error in your request' });
    }
}
export { createUser, findUser, deleteUser, updateUser, retrieveUsers, findUserById };
//# sourceMappingURL=UserController.js.map