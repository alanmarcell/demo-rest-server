import express from 'express';
import * as UserController from '../users/UserApp';
const router = express.Router();
function getUserRoutes() {
    router.post('/authenticateUser', UserController.authenticateUserPtz);
    router.use(UserController.verifyToken);
    router.post('/users', UserController.createUser);
    // router.get('/users', UserController.retrieveUsers);
    // router.put('/users/:_id', UserController.updateUser);
    // router.get('/users/:param', UserController.findUser);
    // router.delete('/users/:_id', UserController.deleteUser);
    return router;
}
export { getUserRoutes };
//# sourceMappingURL=UserRoutes.js.map