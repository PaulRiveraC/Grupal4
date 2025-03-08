const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const puerto = 3001;
const { Client } = require('pg');

//instanciar el objeto client para conectarse a la base de datos

const client = new Client({
  user: 'postgres',
  host: '192.168.1.19',
  database: 'pruebas',
  password: 'admin',
  port: 5432,
});

//funcion de middleware

app.use(bodyParser.json());
client.connect();

app.use('/contactos', (req, resp, next) => {
  console.log('Ingresa a la funcion de middleware');
  console.log('headers ', req.headers);
  console.log('body ', req.body);
  next();
});


app.get('/clientes', (request, response) => {
  // client.connect();

  client
    .query('select * from clientes')
    .then((responseQuery) => {
      console.log(...responseQuery.rows);
      // client.end();
      response.send(responseQuery.rows);
    })
    .catch((err) => {
      console.log(err);
      client.end();
    });

  console.log('Ingresa al get');
});

app.get('/productos', (request, response) => {
  // client.connect();

  client
    .query('select * from productos')
    .then((responseQuery) => {
      console.log(...responseQuery.rows);
      // client.end();
      response.send(responseQuery.rows);
    })
    .catch((err) => {
      console.log(err);
      client.end();
    });

  console.log('Ingresa al get');
});


app.post('/cliente', (req, resp) => {
  console.log('Ingresa al post');

  // client.connect();
  client
    .query(
      'insert into clientes(nombre, teléfono, dirección, email) VALUES ($1, $2, $3, $4) RETURNING *',
      [req.body.nombre, req.body.telefono, req.body.direccion, req.body.email]
    )
    .then((responseQuery) => {
      console.log('Filas afectadas: ' + responseQuery.rowCount); // Imprimir el número de filas afectadas
      console.log('respuesta:', responseQuery.rows[0]); // Imprimir la fila insertada
      // client.end();
      resp.send(responseQuery.rows);
    })
    .catch((err) => {
      console.log(err);
      client.end();
    });
});

app.post('/productos', (req, resp) => {
  console.log('Ingresa al post');

  // client.connect();
  client
    .query(
      'INSERT INTO productos(nombre, categoría, precio, stock)	VALUES ($1, $2, $3, $4) RETURNING *',
      [req.body.nombre, req.body.categoria, req.body.precio, req.body.stock]
    )
    .then((responseQuery) => {
      console.log('Filas afectadas: ' + responseQuery.rowCount); // Imprimir el número de filas afectadas
      console.log('respuesta:', responseQuery.rows[0]); // Imprimir la fila insertada
      // client.end();
      resp.send(responseQuery.rows);
    })
    .catch((err) => {
      console.log(err);
      client.end();
    });
});

app.listen(puerto, () => {
  console.log('Servidor listo en el puerto ' + puerto);
});
