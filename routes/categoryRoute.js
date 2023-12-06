const express = require('express');

const {
  getCategories,
  getCategory,
  createCategory,
  updateCategory,
  deleteCategory,
} = require('../services/categoryService');

const authService = require('../services/authService');

const subcategoriesRoute = require('./subCategoryRoute');

const {
  getCategoryValidator,
  createCategoryValidator,
  updateCategoryValidator,
  deleteCategoryValidator,
} = require('../utils/validators/categoryValidator');

const router = express.Router();

router.use('/:categoryId/subcategories', subcategoriesRoute);


router.route('/')
.get(getCategories)
.post(
  authService.protect,
  authService.allowedTo('admin', 'manager'),
  createCategoryValidator, 
  createCategory
  );
router.route('/:id')
  .get(getCategoryValidator, getCategory)
  .put(
    authService.protect,
    authService.allowedTo('admin', 'manager'),
    updateCategoryValidator,
     updateCategory)
  .delete(    authService.protect,
    authService.allowedTo('admin', 'manager'),
    deleteCategoryValidator,
     deleteCategory);

module.exports = router;