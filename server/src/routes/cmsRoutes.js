const express = require('express');
const {
  getCategoryItems,
  createCategoryItem,
  updateCategoryItem,
  deleteCategoryItem
} = require('../controllers/cmsController');

const router = express.Router();

// Generic REST endpoints for all 14 CMS categories
router.get('/:category', getCategoryItems);
router.post('/:category', createCategoryItem);
router.put('/:category/:id', updateCategoryItem);
router.delete('/:category/:id', deleteCategoryItem);

module.exports = router;
