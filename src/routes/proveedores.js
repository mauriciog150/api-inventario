const { Router } = require('express');
const router = Router();

const { getProveedores, getProveedoresById, createProveedores, updateProveedores, deleteProveedores } = require('../controllers/proveedores.controller');

router.get('/api/proveedores', getProveedores);
router.get('/api/proveedores/:id', getProveedoresById);
router.post('/api/proveedores', createProveedores);
router.put('/api/proveedores/:id', updateProveedores)
router.delete('/api/proveedores/:id', deleteProveedores);

module.exports = router;