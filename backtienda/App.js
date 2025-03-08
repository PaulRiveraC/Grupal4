const express = require('express');
const bodyParser = require('body-parser');
const { Client } = require('pg');

const app = express();
const puerto = 3001;

// Configuración de la base de datos
const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'pruebam4',
  password: 'Megapixel@69',
  port: 5432,
});

// Middleware para parsear JSON
app.use(bodyParser.json());

// Conectar a la base de datos
client.connect();

// Rutas de la API
app.get('/productos', (req, res) => {
  client.query('SELECT * FROM productos')
    .then(result => res.json(result.rows))
    .catch(err => res.status(500).json({ error: err.message }));
});

app.post('/productos', (req, res) => {
  const { nombre, categoría, precio, stock } = req.body;
  client.query(
    'INSERT INTO productos(nombre, categoría, precio, stock) VALUES ($1, $2, $3, $4) RETURNING *',
    [nombre, categoría, precio, stock]
  )
    .then(result => res.json(result.rows[0]))
    .catch(err => res.status(500).json({ error: err.message }));
});

app.put('/productos/:id', (req, res) => {
  const { id } = req.params;
  const { nombre, categoría, precio, stock } = req.body;
  client.query(
    'UPDATE productos SET nombre = $1, categoría = $2, precio = $3, stock = $4 WHERE id_producto = $5 RETURNING *',
    [nombre, categoría, precio, stock, id]
  )
    .then(result => res.json(result.rows[0]))
    .catch(err => res.status(500).json({ error: err.message }));
});

// Iniciar el servidor
app.listen(puerto, '0.0.0.0', () => {
  console.log(`Servidor listo en http://192.168.100.45:${puerto}`);
});