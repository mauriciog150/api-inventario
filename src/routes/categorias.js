const { Router } = require('express');
const router = Router();

const { getCategorias, getCategoriasById, createCategorias, updateCategorias, deleteCategorias } = require('../controllers/categorias.controller');

router.get('/api/categorias', getCategorias);
router.get('/api/categorias/:id', getCategoriasById);
router.post('/api/categorias', createCategorias);
router.put('/api/categorias/:id', updateCategorias)
router.delete('/api/categorias/:id', deleteCategorias);

module.exports = router;