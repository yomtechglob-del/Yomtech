const express = require('express');
const router = express.Router();
const leadController = require('../controllers/leadController');
const { authGuard } = require('../middleware/authMiddleware');

router.post('/submit', leadController.submitLead);
router.get('/all', authGuard, leadController.getAllLeads);
router.patch('/:id/status', authGuard, leadController.updateStatus);
router.delete('/:id', authGuard, leadController.deleteLead);

module.exports = router;