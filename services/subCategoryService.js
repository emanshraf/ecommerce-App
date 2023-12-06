const factory = require('./handlersFactory');

const SubCategory = require('../models/subCategoryModel');

exports.setCategoryIdToBody = (req, res, next) => {
  // Nested route
  if (!req.body.category) req.body.category = req.params.categoryId;
  next();
};

exports.createSubCategory = factory.createOne(SubCategory);
exports.getSubCategory = factory.getOne(SubCategory);
exports.getSubCategories = factory.getAll(SubCategory);
exports.updateSubCategory = factory.updateOne(SubCategory);
exports.deleteSubCategory = factory.deleteOne(SubCategory);

// Nested route
// GET /api/categories/:categoryId/subcategories
exports.createFilterObj = (req, res, next) => {
  let filterObject = {};
  if (req.params.categoryId) filterObject = { category: req.params.categoryId };
  req.filterObj = filterObject;
  next();
};


// exports.getSubCategories = asyncHandler(async (req, res) => {
//   const page = req.query.page * 1 || 1;
//   const limit = req.query.limit * 1 || 5;
//   const skip = (page - 1) * limit;

//   const subCategories = await SubCategory.find(req.filterObj)
//     .skip(skip)
//     .limit(limit)
//    .populate({ path: 'category', select: 'name -_id' });

//   res
//     .status(200)
//     .json({ results: subCategories.length, page, data: subCategories });
// });





