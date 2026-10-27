const express = require('express');
const ctrl = require('../controllers/comedyShowController');
const validate = require('../validators/comedy');
const { requireAuth, requireRole } = require('../middleware/auth');

const router = express.Router();

router.get('/', ctrl.list);
router.get('/:id', ctrl.get);
router.post('/', requireAuth, requireRole('admin', 'agent'), validate, ctrl.create);
router.put('/:id', requireAuth, requireRole('admin', 'agent'), validate, ctrl.update);
router.delete('/:id', requireAuth, requireRole('admin'), ctrl.remove);

module.exports = { path: '/api/comedy', router };
