const express = require('express');
const ctrl = require('../controllers/workshopController');
const validate = require('../validators/workshops');
const { requireAuth, requireRole } = require('../middleware/auth');

const router = express.Router();

router.get('/', ctrl.list);
router.get('/:id', ctrl.get);
router.post('/', requireAuth, requireRole('admin', 'agent'), validate, ctrl.create);
router.put('/:id', requireAuth, requireRole('admin', 'agent'), validate, ctrl.update);
router.delete('/:id', requireAuth, requireRole('admin'), ctrl.remove);

module.exports = { path: '/api/workshops', router };
