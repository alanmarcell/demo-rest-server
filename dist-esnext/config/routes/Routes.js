import express from 'express';
import AuthenticationRoutes from '../routes/AuthenticationRoutes';
import ProductRoutes from '../routes/ProductRoutes';
import UserRoutes from '../routes/UserRoutes';
const app = express();
class Routes {
    get routes() {
        app.use('/', new AuthenticationRoutes().routes);
        app.use('/', new UserRoutes().routes);
        app.use('/', new ProductRoutes().routes);
        return app;
    }
}
export default Routes;
//# sourceMappingURL=Routes.js.map