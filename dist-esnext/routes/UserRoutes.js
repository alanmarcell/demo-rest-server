import express from 'express';
import * as UserController from '../users/UserController';
import { verifyToken } from './../users/AuthenticationController';
const router = express.Router();
function getUserRoutes() {
    console.log('user route');
    router.post('/users', UserController.createUser);
    router.use(verifyToken);
    router.get('/users', UserController.retrieveUsers);
    router.put('/users/:_id', UserController.updateUser);
    router.get('/users/:param', UserController.findUser);
    router.delete('/users/:_id', UserController.deleteUser);
    return router;
}
export { getUserRoutes };
//# sourceMappingURL=UserRoutes.js.map