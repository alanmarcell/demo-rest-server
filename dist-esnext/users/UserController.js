import { log } from '../index';
import AuthenticationController from './AuthenticationController';
import UserBusiness from './UserBusiness';
class UserController {
    create(req, res) {
        try {
            const user = req.body;
            console.log('\n\n--- user  ---', user);
            const userBusiness = new UserBusiness();
            userBusiness.create(user, (error) => {
                if (error)
                    res.send({ error: 'error' });
                else {
                    const authContoller = new AuthenticationController();
                    console.log('\n\n--- aurh!!!  ---', user);
                    authContoller.authenticateUser(req, res);
                    // res.send({ success: 'success' });
                }
            });
        }
        catch (e) {
            log(e);
            res.send({ error: 'error in your request' });
        }
    }
    update(req, res) {
        try {
            const user = req.body;
            const id = req.params._id;
            const userBusiness = new UserBusiness();
            userBusiness.update(id, user, (error) => {
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
    delete(req, res) {
        try {
            const id = req.params._id;
            const userBusiness = new UserBusiness();
            userBusiness.delete(id, (error) => {
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
    retrieve(req, res) {
        try {
            const userBusiness = new UserBusiness();
            userBusiness.retrieve((error, result) => {
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
    findById(req, res) {
        try {
            const id = req.params._id;
            const userBusiness = new UserBusiness();
            userBusiness.findById(id, (error, result) => {
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
    findOne(req, res) {
        try {
            const param = req.params.param;
            const userBusiness = new UserBusiness();
            userBusiness.findOne(param, (error, result) => {
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
}
export default UserController;
//# sourceMappingURL=UserController.js.map