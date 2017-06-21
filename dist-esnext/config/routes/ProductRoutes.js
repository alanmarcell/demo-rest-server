import express from 'express';
import ProductController from './../../controllers/ProductController';
const router = express.Router();
class ProductRoutes {
    constructor() {
        this.productController = new ProductController();
    }
    get routes() {
        const controller = this.productController;
        console.log('routes');
        router.get('/products', controller.retrieve);
        router.post('/products/', controller.retrieve);
        router.post('/product', controller.create);
        router.put('/product/:_id', controller.update);
        router.get('/product/:_id', controller.findById);
        router.delete('/product/:_id', controller.delete);
        return router;
    }
}
Object.seal(ProductRoutes);
export default ProductRoutes;
//# sourceMappingURL=ProductRoutes.js.map