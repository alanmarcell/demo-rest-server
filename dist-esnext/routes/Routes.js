import express from 'express';
import ProductRoutes from '../routes/ProductRoutes';
import { getUserRoutes } from '../routes/UserRoutes';
const app = express();
class Routes {
    get routes() {
        app.use('/', new ProductRoutes().routes);
        app.use('/', getUserRoutes());
        return app;
    }
}
export default Routes;
//# sourceMappingURL=Routes.js.map