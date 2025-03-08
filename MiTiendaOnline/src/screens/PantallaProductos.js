import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import axios from 'axios';

const PantallaProductos = () => {
  const [productos, setProductos] = useState([]);

  // Obtener los productos de la API
  useEffect(() => {
    axios.get('http://localhost:3001/productos')
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
});

export default PantallaProductos;