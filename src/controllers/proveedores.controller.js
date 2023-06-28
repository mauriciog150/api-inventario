const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    password: 'soloyolace20',
    database: 'erpyaviracdb',
    port: '5432'
});

const getProveedores = async (req, res) => {
    const response = await pool.query('SELECT * FROM proveedores ORDER BY id ASC');
    res.status(200).json(response.rows);
};

const getProveedoresById = async (req, res) => {
    const id = parseInt(req.params.id);
    const response = await pool.query('SELECT * FROM proveedores WHERE id = $1', [id]);
    res.json(response.rows);
};

const createProveedores = async (req, res) => {
    const { id, direccion, nombre, ciudad_id } = req.body;
    const response = await pool.query('INSERT INTO proveedores VALUES ($1, $2, $3, $4)', [
        id, direccion, nombre, ciudad_id
    ]);
    res.json({
        message: 'Proveedor agregado',
        body: {
            proveedores: {id, direccion, nombre, ciudad_id}
        }
    })
};

const updateProveedores = async (req, res) => {
    const id = parseInt(req.params.id);
    const { direccion, nombre } = req.body;

    const response =await pool.query('UPDATE proveedores SET direccion = $1, nombre = $2 WHERE id = $3', [
        direccion, nombre, id
    ]);
    res.json('Proveedor Actualizado');
};

const deleteProveedores = async (req, res) => {
    const id = parseInt(req.params.id);
    await pool.query('DELETE FROM proveedores where id = $1', [
        id
    ]);
    res.json(`Proveedor ${id} eliminado`);
};

module.exports = {
    getProveedores,
    getProveedoresById,
    createProveedores,
    updateProveedores,
    deleteProveedores
};