import express from 'express';

import AuthenticationRoutes from '../routes/AuthenticationRoutes';
import ProductRoutes from '../routes/ProductRoutes';
import { getUserRoutes } from '../routes/UserRoutes';

const app = express();

class Routes {

  get routes() {
    app.use('/', new AuthenticationRoutes().routes);
    app.use('/', getUserRoutes());
    app.use('/', new ProductRoutes().routes);

    return app;
  }
}

export default Routes;
