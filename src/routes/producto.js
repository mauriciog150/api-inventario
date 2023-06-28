const { Router } = require('express');
const router = Router();

const { getProducto, getProductoById, createProducto, updateProducto, deleteProducto } = require('../controllers/producto.controller');

router.get('/api/producto', getProducto);
router.get('/api/producto/:id', getProductoById);
router.post('/api/producto', createProducto);
router.put('/api/producto/:id', updateProducto)
router.delete('/api/producto/:id', deleteProducto);

module.exports = router;