const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    password: 'soloyolace20',
    database: 'erpyaviracdb',
    port: '5432'
});

const getCliente = async (req, res) => {
    const response = await pool.query('SELECT * FROM cliente ORDER BY id ASC');
    res.status(200).json(response.rows);
};

const getClienteById = async (req, res) => {
    const id_cliente = parseInt(req.params.id);
    const response = await pool.query('SELECT * FROM cliente WHERE id = $1', [id_cliente]);
    res.json(response.rows);
};

const createCliente = async (req, res) => {
    const { id_cliente, direccion, email, nombre_cliente, prioridad } = req.body;
    const response = await pool.query('INSERT INTO cliente VALUES ($1, $2, $3, $4, $5)', [
        id_cliente, direccion, email, nombre_cliente, prioridad
    ]);
    res.json({
        message: 'Cliente agregado',
        body: {
            cliente: {id_cliente, direccion, email, nombre_cliente, prioridad}
        }
    })
};

const updateCliente = async (req, res) => {
    const id_cliente = parseInt(req.params.id);
    const { direccion, email, nombre_cliente, prioridad } = req.body;

    const response =await pool.query('UPDATE cliente SET direccion = $1, email = $2, nombre_cliente = $3, prioridad = $4 WHERE id_cliente = $5', [
        direccion, email, nombre_cliente, prioridad, id_cliente
    ]);
    res.json('Cliente Actualizado');
};

const deleteCliente = async (req, res) => {
    const id_cliente = parseInt(req.params.id);
    await pool.query('DELETE FROM cliente where id = $1', [
        id_cliente
    ]);
    res.json(`Cliente ${id_cliente} eliminado`);
};

module.exports = {
    getCliente,
    getClienteById,
    createCliente,
    updateCliente,
    deleteCliente
};