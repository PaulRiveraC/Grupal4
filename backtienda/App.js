// Importar las dependencias usando require
const express = require("express");
const { Pool } = require("pg");

// Crear una instancia de Express
const app = express();

// Configurar la conexión a PostgreSQL
const pool = new Pool({
  user: "postgres", // Usuario de PostgreSQL
  host: "localhost", // Host de la base de datos
  database: "pruebam4", // Nombre de la base de datos
  password: "Megapixel@69", // Contraseña de PostgreSQL
  port: 5432, // Puerto de PostgreSQL
});

// Middleware para parsear JSON
app.use(express.json());

// Ruta de prueba
app.get("/", (req, res) => {
  res.send("¡API de la tienda online funcionando!");
});

// Método GET para obtener todos los clientes
app.get("/clientes", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM clientes");
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error al obtener los clientes");
  }
});

// Método GET para obtener todos los productos
app.get("/productos", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM productos");
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error al obtener los productos");
  }
});

// Método POST para agregar un nuevo cliente
app.post("/clientes", async (req, res) => {
  const { nombre, telefono, direccion, email } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO clientes (nombre, teléfono, dirección, email) VALUES ($1, $2, $3, $4) RETURNING *",
      [nombre, telefono, direccion, email]
    );
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error al agregar el cliente");
  }
});

// Método POST para agregar un nuevo producto
app.post("/productos", async (req, res) => {
  const { nombre, categoria, precio, stock } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO productos (nombre, categoría, precio, stock) VALUES ($1, $2, $3, $4) RETURNING *",
      [nombre, categoria, precio, stock]
    );
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error al agregar el producto");
  }
});

// Iniciar el servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});