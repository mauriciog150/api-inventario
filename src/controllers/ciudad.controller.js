const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    password: 'soloyolace20',
    database: 'erpyaviracdb',
    port: '5432'
});

const getCiudad = async (req, res) => {
    const response = await pool.query('SELECT * FROM ciudad ORDER BY id ASC');
    res.status(200).json(response.rows);
};

const getCiudadById = async (req, res) => {
    const id = parseInt(req.params.id);
    const response = await pool.query('SELECT * FROM ciudad WHERE id = $1', [id]);
    res.json(response.rows);
};

const createCiudad = async (req, res) => {
    const { id, nombre_ciudad } = req.body;
    const response = await pool.query('INSERT INTO ciudad VALUES ($1, $2)', [
        id, nombre_ciudad
    ]);
    res.json({
        message: 'Ciudad agregada',
        body: {
            ciudad: {id, nombre_ciudad}
        }
    })
};

const updateCiudad = async (req, res) => {
    const id = parseInt(req.params.id);
    const { nombre_ciudad } = req.body;

    const response =await pool.query('UPDATE ciudad SET nombre_ciudad = $1 WHERE id = $2', [
        nombre_ciudad, id
    ]);
    res.json('Ciudad Actualizada');
};

const deleteCiudad = async (req, res) => {
    const id = parseInt(req.params.id);
    await pool.query('DELETE FROM ciudad where id = $1', [
        id
    ]);
    res.json(`Cuidad ${id} eliminada`);
};

module.exports = {
    getCiudad,
    getCiudadById,
    createCiudad,
    updateCiudad,
    deleteCiudad
};