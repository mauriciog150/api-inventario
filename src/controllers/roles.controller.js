const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    password: 'soloyolace20',
    database: 'erpyaviracdb',
    port: '5432'
});

const getRoles = async (req, res) => {
    const response = await pool.query('SELECT * FROM roles ORDER BY id ASC');
    res.status(200).json(response.rows);
};

const getRolesById = async (req, res) => {
    const id = parseInt(req.params.id);
    const response = await pool.query('SELECT * FROM roles WHERE id = $1', [id]);
    res.json(response.rows);
};

const createRoles = async (req, res) => {
    const { id, enable, name } = req.body;
    const response = await pool.query('INSERT INTO roles VALUES ($1, $2, $3)', [
        id, enable, name
    ]);
    res.json({
        message: 'Rol agregado',
        body: {
            roles: {id, enable, name}
        }
    })
};

const updateRoles = async (req, res) => {
    const id = parseInt(req.params.id);
    const { enable, name } = req.body;

    const response =await pool.query('UPDATE roles SET enable = $1, name = $2 WHERE id = $3', [
        enable, name, id
    ]);
    res.json('Rol Actualizado');
};

const deleteRoles = async (req, res) => {
    const id = parseInt(req.params.id);
    await pool.query('DELETE FROM roles where id = $1', [
        id
    ]);
    res.json(`Rol ${id} eliminado`);
};

module.exports = {
    getRoles,
    getRolesById,
    createRoles,
    updateRoles,
    deleteRoles
};