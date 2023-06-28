const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    password: 'soloyolace20',
    database: 'erpyaviracdb',
    port: '5432'
});

const getProducto = async (req, res) => {
    const response = await pool.query('SELECT * FROM producto ORDER BY id ASC');
    res.status(200).json(response.rows);
};

const getProductoById = async (req, res) => {
    const id = parseInt(req.params.id);
    const response = await pool.query('SELECT * FROM producto WHERE id = $1', [id]);
    res.json(response.rows);
};

const createProducto = async (req, res) => {
    const { id, descripcion, nombre, precio_unitario, categorias } = req.body;
    const response = await pool.query('INSERT INTO producto VALUES ($1, $2, $3, $4, $5)', [
        id, 
        descripcion, 
        nombre, 
        precio_unitario, 
        categorias
    ]);
    res.json({
        message: 'Producto agregado',
        body: {
            producto: {id, descripcion, nombre, precio_unitario, categorias}
        }
    })
};

const updateProducto = async (req, res) => {
    const id = parseInt(req.params.id);
    const { nombre, descripcion, precio_unitario } = req.body;

    const response =await pool.query('UPDATE producto SET nombre = $1, descripcion = $2, precio_unitario = $3 WHERE id = $4', [
        nombre,
        descripcion,
        precio_unitario,
        id
    ]);
    res.json('Producto Actualizado');
};

const deleteProducto = async (req, res) => {
    const id = parseInt(req.params.id);
    await pool.query('DELETE FROM producto where id = $1', [
        id
    ]);
    res.json(`Producto ${id} eliminado`);
};

module.exports = {
    getProducto,
    getProductoById,
    createProducto,
    updateProducto,
    deleteProducto
};