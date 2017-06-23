import express from 'express';
import ProductRoutes from '../routes/ProductRoutes';
import { getUserRoutes } from '../routes/UserRoutes';
const app = express();
class Routes {
    get routes() {
        app.use('/', getUserRoutes());
        app.use('/', new ProductRoutes().routes);
        return app;
    }
}
export default Routes;
//# sourceMappingURL=Routes.js.map