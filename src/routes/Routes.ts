import express from 'express';

import AuthenticationRoutes from '../routes/AuthenticationRoutes';
import ProductRoutes from '../routes/ProductRoutes';
import { getSeedRoutes } from '../routes/SeedRoutes';
import { getUserRoutes } from '../routes/UserRoutes';

const app = express();

class Routes {

  get routes() {
    app.use('/', getSeedRoutes());
    app.use('/', new AuthenticationRoutes().routes);
    app.use('/', getUserRoutes());
    app.use('/', new ProductRoutes().routes);

    return app;
  }
}

export default Routes;
