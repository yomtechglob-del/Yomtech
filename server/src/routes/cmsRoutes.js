const express = require('express');
const {
  getCategoryItems,
  createCategoryItem,
  updateCategoryItem,
  deleteCategoryItem,
  getOverviewStats,
  getTrashItems,
  restoreCategoryItem,
  permanentlyDeleteCategoryItem,
  bulkCmsAction,
  getAuditLogs
} = require('../controllers/cmsController');

const router = express.Router();

// Special CMS System Endpoints
router.get('/overview', getOverviewStats);
router.get('/trash', getTrashItems);
router.post('/trash/restore/:id', restoreCategoryItem);
router.delete('/trash/permanent/:id', permanentlyDeleteCategoryItem);
router.post('/bulk', bulkCmsAction);
router.get('/audit-logs', getAuditLogs);

// Generic Category REST Endpoints for all 14 Categories
router.get('/:category', getCategoryItems);
router.post('/:category', createCategoryItem);
router.put('/:category/:id', updateCategoryItem);
router.delete('/:category/:id', deleteCategoryItem);

module.exports = router;
