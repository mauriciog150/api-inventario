const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    password: 'soloyolace20',
    database: 'erpyaviracdb',
    port: '5432'
});

const getAlmacen = async (req, res) => {
    const response = await pool.query('SELECT * FROM almacen ORDER BY id ASC');
    res.status(200).json(response.rows);
};

const getAlmacenById = async (req, res) => {
    const id = parseInt(req.params.id);
    const response = await pool.query('SELECT * FROM almacen WHERE id = $1', [id]);
    res.json(response.rows);
};

const createAlmacen = async (req, res) => {
    const { id, capacidad_almacen, direccion_almacen, nombre_almacen, compañia_id } = req.body;
    const response = await pool.query('INSERT INTO almacen VALUES ($1, $2, $3, $4, $5)', [
        id, capacidad_almacen, direccion_almacen, nombre_almacen, compañia_id
    ]);
    res.json({
        message: 'Almacen agregado',
        body: {
            almacen: {id, capacidad_almacen, direccion_almacen, nombre_almacen, compañia_id}
        }
    })
};

const updateAlmacen = async (req, res) => {
    const id = parseInt(req.params.id);
    const {capacidad_almacen, direccion_almacen, nombre_almacen } = req.body;

    const response =await pool.query('UPDATE almacen SET capacidad_almecen = $1, direccion_almacen = $2, nombre_almacen = $3 WHERE id = $4', [
        capacidad_almacen, direccion_almacen, nombre_almacen, id
    ]);
    res.json('Almacen Actualizado');
};

const deleteAlmacen = async (req, res) => {
    const id = parseInt(req.params.id);
    await pool.query('DELETE FROM almacen where id = $1', [
        id
    ]);
    res.json(`Almacen ${id} eliminado`);
};

module.exports = {
    getAlmacen,
    getAlmacenById,
    createAlmacen,
    updateAlmacen,
    deleteAlmacen
};