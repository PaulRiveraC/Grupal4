const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const puerto = 3001;
const { Pool } = require("pg");//MAS EFICIENTE


const pool = new Pool({
  user: "postgres",
  host: "192.168.0.210",
  database: "prueba",
  password: "Ginxasur08",
  port: 5433,
});

app.use(bodyParser.json());

//GET CLIENTES
app.get("/clientes", (request, response) => {
  console.log("ingresa a get clientes");
  pool
    .query("select * from clientes")
    .then((responseQuery) => {
      console.log(responseQuery.rows);
      response.send(responseQuery.rows);
    })
    .catch((err) => {
      console.log(err);
    });
});
//GET PRODUCTOS

app.get("/productos", (request, response) => {
  console.log("ingresa a get productos");
  pool
    .query("select * from productos")
    .then((responseQuery) => {
      console.log(responseQuery.rows);
      response.send(responseQuery.rows);
    })
    .catch((err) => {
      console.log(err);
    });
});

//POST DE CLIENTES
app.post("/clientes", (request, response) => {
  const { nombre, teléfono, dirección, email} = request.body;
  pool.query(
    "insert into clientes (nombre, teléfono, dirección, email) VALUES ($1, $2, $3, $4) returning*",
    [nombre, teléfono, dirección, email]
  );
  response.send("creado");
});

//POST DE PRODUCTOS
app.post("/productos", (request, response) => {
  const { nombre, categoría, precio, stock  } = request.body;
  pool.query(
    "insert into productos (nombre, categoría, precio, stock) values ($1, $2, $3, $4) returning*",
    [nombre, categoría, precio, stock]
  );
  response.send("creado");
});




app.listen(puerto, () => {
  console.log("Hola, probando en el puerto " + puerto);
}); 