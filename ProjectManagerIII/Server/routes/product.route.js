const ProductController = require('../controllers/product.controller')

module.exports = (app) => {
    app.post('/api/products', ProductController.addProduct)             //Create
    app.get('/api/products', ProductController.getAllProducts)          //Read
    app.get('/api/products/:id', ProductController.getOneProduct)       //read one
    app.put('/api/products/:id', ProductController.updateProduct)        //update One
    app.delete('/api/products/:id', ProductController.deleteProduct)    //delete One
}