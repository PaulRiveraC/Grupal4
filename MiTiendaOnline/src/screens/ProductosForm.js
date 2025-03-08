import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import axios from 'axios';

const ProductosForm = ({ navigation, route }) => {
  const { producto, refresh } = route.params || {};
  const [nombre, setNombre] = useState(producto?.nombre || '');
  const [categoria, setCategoria] = useState(producto?.categoría || '');
  const [precio, setPrecio] = useState(producto?.precio?.toString() || '');
  const [stock, setStock] = useState(producto?.stock?.toString() || '');

  const handleSubmit = () => {
    const payload = {
      nombre,
      categoría: categoria, // Asegúrate de que el nombre del campo coincida con la columna en la base de datos
      precio: parseFloat(precio),
      stock: parseInt(stock),
    };

    if (producto) {
      // Si hay un producto, es una edición
      axios.put(`http://192.168.100.45:3001/productos/${producto.id_producto}`, payload)
        .then(response => {
          alert('Producto actualizado');
          refresh(); // Llama a la función refresh para actualizar la lista
          navigation.navigate('ProductosListNav');
        })
        .catch(error => console.error(error));
    } else {
      // Si no hay un producto, es una creación
      axios.post('http://192.168.100.45:3001/productos', payload)
        .then(response => {
          alert('Producto agregado');
          refresh(); // Llama a la función refresh para actualizar la lista
          navigation.navigate('ProductosListNav');
        })
        .catch(error => console.error(error));
    }
  };

  return (
    <View style={styles.container}>
      <Text>Nombre:</Text>
      <TextInput
        placeholder="Nombre"
        value={nombre}
        onChangeText={setNombre}
        style={styles.input}
      />
      <Text>Categoría:</Text>
      <TextInput
        placeholder="Categoría"
        value={categoria}
        onChangeText={setCategoria}
        style={styles.input}
      />
      <Text>Precio:</Text>
      <TextInput
        placeholder="Precio"
        value={precio}
        onChangeText={setPrecio}
        keyboardType="numeric"
        style={styles.input}
      />
      <Text>Stock:</Text>
      <TextInput
        placeholder="Stock"
        value={stock}
        onChangeText={setStock}
        keyboardType="numeric"
        style={styles.input}
      />
      <Button title={producto ? "Actualizar Producto" : "Agregar Producto"} onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
});

export default ProductosForm;