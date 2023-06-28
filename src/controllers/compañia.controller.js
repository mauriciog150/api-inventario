const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    password: 'soloyolace20',
    database: 'erpyaviracdb',
    port: '5432'
});

const getCompañia = async (req, res) => {
    const response = await pool.query('SELECT * FROM compañia ORDER BY id ASC');
    res.status(200).json(response.rows);
};

const getCompañiaById = async (req, res) => {
    const id = parseInt(req.params.id);
    const response = await pool.query('SELECT * FROM compañia WHERE id = $1', [id]);
    res.json(response.rows);
};

const createCompañia = async (req, res) => {
    const { id, correo_electronico, direccion_compañia, nombre_compañia, telefono_compañia, ciudad_id } = req.body;
    const response = await pool.query('INSERT INTO compañia VALUES ($1, $2, $3, $4, $5, $6)', [
        id, correo_electronico, direccion_compañia, nombre_compañia, telefono_compañia, ciudad_id
    ]);
    res.json({
        message: 'Compañia agregado',
        body: {
            compañia: {id, correo_electronico, direccion_compañia, nombre_compañia, telefono_compañia, ciudad_id}
        }
    })
};

const updateCompañia = async (req, res) => {
    const id = parseInt(req.params.id);
    const { correo_electronico, direccion_compañia, nombre_compañia, telefono_compañia } = req.body;

    const response =await pool.query('UPDATE compañia SET corre_electronico = $1, direccion_compañia = $2, nombre_compañia = $3, telefono_compañia = $4 WHERE id = $5', [
        correo_electronico, direccion_compañia, nombre_compañia, telefono_compañia, id
    ]);
    res.json('Compañia Actualizado');
};

const deleteCompañia = async (req, res) => {
    const id = parseInt(req.params.id);
    await pool.query('DELETE FROM compañia where id = $1', [
        id
    ]);
    res.json(`Compañia ${id} eliminado`);
};

module.exports = {
    getCompañia,
    getCompañiaById,
    createCompañia,
    updateCompañia,
    deleteCompañia
};