const Product = require('../models/products.js');

module.exports = app => {
    app.get('/product/:id', (req, res) => {
        const id = req.params.id;

        Product.getOne(id, res);
    })

    app.get('/product', (req, res) => {
        Product.getAll(res);
    })

    app.post('/product', (req, res) => {
        const product = req.body;

        Product.add(product, res);
    })

    app.patch('/product/:id', (req, res) => {
        const id = req.params.id;
        const values = req.body;

        Product.update(id, values, res);
    })

    app.delete('/product/:id', (req, res) => {
        const id = req.params.id;
        
        Product.delete(id, res);
    })
}