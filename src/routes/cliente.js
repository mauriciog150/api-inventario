const { Router } = require('express');
const router = Router();

const { getCliente, getClienteById, createCliente, updateCliente, deleteCliente } = require('../controllers/cliente.controller');

router.get('/api/cliente', getCliente);
router.get('/api/cliente/:id', getClienteById);
router.post('/api/cliente', createCliente);
router.put('/api/cliente/:id', updateCliente)
router.delete('/api/cliente/:id', deleteCliente);

module.exports = router;