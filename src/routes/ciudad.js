const { Router } = require('express');
const router = Router();

const { getCiudad, getCiudadById, createCiudad, updateCiudad, deleteCiudad } = require('../controllers/ciudad.controller');

router.get('/api/ciudad', getCiudad);
router.get('/api/ciudad/:id', getCiudadById);
router.post('/api/ciudad', createCiudad);
router.put('/api/ciudad/:id', updateCiudad)
router.delete('/api/ciudad/:id', deleteCiudad);

module.exports = router;