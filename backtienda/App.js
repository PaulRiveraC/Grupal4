const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const puerto = 3001;
const { Client } = require('pg');

// Instanciar el objeto client para conectarse a la base de datos
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

// Middleware de ejemplo
app.use('/contactos', (req, resp, next) => {
  console.log('Ingresa a la función de middleware');
  console.log('headers ', req.headers);
  console.log('body ', req.body);
  next();
});

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('¡API de la tienda online funcionando!');
});

// Método GET para obtener todos los clientes
app.get('/clientes', (request, response) => {
  client
    .query('SELECT * FROM clientes')
    .then((responseQuery) => {
      console.log(...responseQuery.rows);
      response.send(responseQuery.rows);
    })
    .catch((err) => {
      console.log(err);
      response.status(500).send('Error al obtener los clientes');
    });

  console.log('Ingresa al GET /clientes');
});

// Método GET para obtener todos los productos
app.get('/productos', (request, response) => {
  client
    .query('SELECT * FROM productos')
    .then((responseQuery) => {
      console.log(...responseQuery.rows);
      response.send(responseQuery.rows);
    })
    .catch((err) => {
      console.log(err);
      response.status(500).send('Error al obtener los productos');
    });

  console.log('Ingresa al GET /productos');
});

// Método POST para agregar un nuevo cliente
app.post('/cliente', (req, resp) => {
  console.log('Ingresa al POST /cliente');

  client
    .query(
      'INSERT INTO clientes(nombre, teléfono, dirección, email) VALUES ($1, $2, $3, $4) RETURNING *',
      [req.body.nombre, req.body.telefono, req.body.direccion, req.body.email]
    )
    .then((responseQuery) => {
      console.log('Filas afectadas: ' + responseQuery.rowCount);
      console.log('Respuesta:', responseQuery.rows[0]);
      resp.send(responseQuery.rows);
    })
    .catch((err) => {
      console.log(err);
      resp.status(500).send('Error al agregar el cliente');
    });
});

// Método POST para agregar un nuevo producto
app.post('/productos', (req, resp) => {
  console.log('Ingresa al POST /productos');

  client
    .query(
      'INSERT INTO productos(nombre, categoría, precio, stock) VALUES ($1, $2, $3, $4) RETURNING *',
      [req.body.nombre, req.body.categoria, req.body.precio, req.body.stock]
    )
    .then((responseQuery) => {
      console.log('Filas afectadas: ' + responseQuery.rowCount);
      console.log('Respuesta:', responseQuery.rows[0]);
      resp.send(responseQuery.rows);
    })
    .catch((err) => {
      console.log(err);
      resp.status(500).send('Error al agregar el producto');
    });
});

// Iniciar el servidor
app.listen(puerto, () => {
  console.log('Servidor listo en el puerto ' + puerto);
});