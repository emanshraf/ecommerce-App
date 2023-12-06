const factory = require('./handlersFactory');
const Product = require('../models/productModel');

exports.createProduct = factory.createOne(Product);
exports.getProducts = factory.getAll(Product, 'Products');
// exports.getProduct = factory.getOne(Product);
exports.getProduct = factory.getOne(Product, 'reviews');
exports.updateProduct = factory.updateOne(Product);
exports.deleteProduct = factory.deleteOne(Product);