const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    password: 'soloyolace20',
    database: 'erpyaviracdb',
    port: '5432'
});

const getCategorias = async (req, res) => {
    const response = await pool.query('SELECT * FROM categorias ORDER BY id ASC');
    res.status(200).json(response.rows);
};

const getCategoriasById = async (req, res) => {
    const id = parseInt(req.params.id);
    const response = await pool.query('SELECT * FROM categorias WHERE id = $1', [id]);
    res.json(response.rows);
};

const createCategorias = async (req, res) => {
    const { id, descripcion, nombre } = req.body;
    const response = await pool.query('INSERT INTO categorias VALUES ($1, $2, $3)', [id, descripcion, nombre]);
    res.json({
        message: 'Categoria agregada',
        body: {
            categorias: {id, descripcion, nombre}
        }
    })
};

const updateCategorias = async (req, res) => {
    const id = parseInt(req.params.id);
    const { nombre, descripcion } = req.body;

    const response =await pool.query('UPDATE categorias SET nombre = $1, descripcion = $2 WHERE id = $3', [
        nombre,
        descripcion,
        id
    ]);
    res.json('Categoria Actualizada');
};

const deleteCategorias = async (req, res) => {
    const id = parseInt(req.params.id);
    await pool.query('DELETE FROM categorias where id = $1', [
        id
    ]);
    res.json(`Categoria ${id} eliminada`);
};

module.exports = {
    getCategorias,
    getCategoriasById,
    createCategorias,
    updateCategorias,
    deleteCategorias
};