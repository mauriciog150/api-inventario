const { Router } = require('express');
const router = Router();

const { getAlmacen, getAlmacenById, createAlmacen, updateAlmacen, deleteAlmacen } = require('../controllers/almacen.controller');

router.get('/api/almacen', getAlmacen);
router.get('/api/almacen/:id', getAlmacenById);
router.post('/api/almacen', createAlmacen);
router.put('/api/almacen/:id', updateAlmacen)
router.delete('/api/almacen/:id', deleteAlmacen);

module.exports = router;