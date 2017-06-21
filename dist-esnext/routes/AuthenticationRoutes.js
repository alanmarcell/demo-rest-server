import express from 'express';
import AuthenticationController from '../users/AuthenticationController';
const router = express.Router();
class AuthenticationRoutes {
    constructor() {
        this.authenticationController = new AuthenticationController();
    }
    get routes() {
        const authenticationController = this.authenticationController;
        router.post('/authenticateUser', authenticationController.authenticateUser);
        return router;
    }
}
Object.seal(AuthenticationRoutes);
export default AuthenticationRoutes;
//# sourceMappingURL=AuthenticationRoutes.js.map