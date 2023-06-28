const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    password: 'soloyolace20',
    database: 'erpyaviracdb',
    port: '5432'
});

const getUsers = async (req, res) => {
    const response = await pool.query('SELECT * FROM users ORDER BY id ASC');
    res.status(200).json(response.rows);
};

const getUserById = async (req, res) => {
    const id = parseInt(req.params.id);
    const response = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
    res.json(response.rows);
};

const createUser = async (req, res) => {
    const { id, enable, expired, looked, name, password, username } = req.body;
    const response = await pool.query('INSERT INTO users VALUES ($1, $2, $3, $4, $5, $6, $7)', [
        id, enable, expired, looked, name, password, username
    ]);
    res.json({
        message: 'Usuario agregado',
        body: {
            users: {id, enable, expired, looked, name, password, username}
        }
    })
};

const updateUser = async (req, res) => {
    const id = parseInt(req.params.id);
    const { name, password, username } = req.body;

    const response =await pool.query('UPDATE users SET name = $1, password = $2, username = $3 WHERE id = $4', [
        name, password, username, id
    ]);
    res.json('Usuario Actualizado');
};

const deleteUser = async (req, res) => {
    const id = parseInt(req.params.id);
    await pool.query('DELETE FROM users where id = $1', [
        id
    ]);
    res.json(`Usuario ${id} eliminado`);
};

module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
};