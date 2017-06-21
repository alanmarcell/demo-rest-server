import ProductBusiness from './../app/business/ProductBusiness';
class ProductController {
    create(req, res) {
        try {
            const product = req.body;
            const productBusiness = new ProductBusiness();
            productBusiness.create(product, (error) => {
                if (error)
                    res.send({ error: 'error create controller' });
                else
                    res.send({ success: 'success' });
            });
        }
        catch (e) {
            console.log(e);
            res.send({ error: 'error in your request' });
        }
    }
    update(req, res) {
        try {
            const product = req.body;
            const id = req.params._id;
            const productBusiness = new ProductBusiness();
            productBusiness.update(id, product, (error) => {
                if (error)
                    res.send({ error: 'error update controller' });
                else
                    res.send({ success: 'success' });
            });
        }
        catch (e) {
            console.log(e);
            res.send({ error: 'error in your request' });
        }
    }
    delete(req, res) {
        try {
            const id = req.params._id;
            const productBusiness = new ProductBusiness();
            productBusiness.delete(id, (error) => {
                if (error)
                    res.send({ error: 'error delete controller' });
                else
                    res.send({ success: 'success' });
            });
        }
        catch (e) {
            console.log(e);
            res.send({ error: 'error in your request' });
        }
    }
    retrieve(req, res) {
        const pagConfig = req.body;
        try {
            const productBusiness = new ProductBusiness();
            productBusiness.retrieve((error, result) => {
                if (error)
                    res.send({ error: 'error retrieve' });
                else
                    res.send(result);
            }, pagConfig.start, pagConfig.items);
        }
        catch (e) {
            console.log(e);
            res.send({ error: 'error in your request' });
        }
    }
    findById(req, res) {
        try {
            const id = req.params._id;
            const productBusiness = new ProductBusiness();
            productBusiness.findById(id, (error, result) => {
                if (error)
                    res.send({ error: 'error findById' });
                else
                    res.send(result);
            });
        }
        catch (e) {
            console.log(e);
            res.send({ error: 'error in your request' });
        }
    }
}
export default ProductController;
//# sourceMappingURL=ProductController.js.map