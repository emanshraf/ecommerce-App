const factory = require('./handlersFactory');
const Category = require('../models/categoryModel');

exports.createCategory = factory.createOne(Category);
exports.getCategories = factory.getAll(Category);
exports.getCategory = factory.getOne(Category);
exports.updateCategory = factory.updateOne(Category);
exports.deleteCategory = factory.deleteOne(Category);