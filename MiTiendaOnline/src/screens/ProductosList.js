import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import axios from 'axios';

const ProductosList = ({ navigation }) => {
  const [productos, setProductos] = useState([]);

  // Obtener la lista de productos
  useEffect(() => {
    axios.get('http://localhost/productos') // Cambia la IP por la de tu computadora
      .then(response => setProductos(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Lista de Productos</Text>
      <FlatList
        data={productos}
        keyExtractor={item => item.id_producto.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.nombre}</Text>
            <Text>Precio: ${item.precio}</Text>
            <Text>Stock: {item.stock}</Text>
          </View>
        )}
      />
      <TouchableOpacity
        style={styles.botonAgregar}
        onPress={() => navigation.navigate('ProductosFormNav')}
      >
        <Text style={styles.textoBoton}>Agregar Producto</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  botonAgregar: {
    backgroundColor: '#007BFF',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  textoBoton: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ProductosList;