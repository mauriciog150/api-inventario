const { Router } = require('express');
const router = Router();

const { getCompañia, getCompañiaById, createCompañia, updateCompañia, deleteCompañia } = require('../controllers/compañia.controller');

router.get('/api/compañia', getCompañia);
router.get('/api/compañia/:id', getCompañiaById);
router.post('/api/compañia', createCompañia);
router.put('/api/compañia/:id', updateCompañia)
router.delete('/api/compañia/:id', deleteCompañia);

module.exports = router;