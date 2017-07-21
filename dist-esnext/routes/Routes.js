import express from 'express';
import ProductRoutes from '../routes/ProductRoutes';
import { getUserRoutes } from '../routes/UserRoutes';
const app = express();
const routes = async () => {
    app.use('/', await getUserRoutes());
    app.use('/', new ProductRoutes().routes);
    return app;
};
export default routes;
//# sourceMappingURL=Routes.js.map