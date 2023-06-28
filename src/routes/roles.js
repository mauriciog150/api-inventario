const { Router } = require('express');
const router = Router();

const { getRoles, getRolesById, createRoles, updateRoles, deleteRoles } = require('../controllers/roles.controller');

router.get('/api/roles', getRoles);
router.get('/api/roles/:id', getRolesById);
router.post('/api/roles', createRoles);
router.put('/api/roles/:id', updateRoles)
router.delete('/api/roles/:id', deleteRoles);

module.exports = router;