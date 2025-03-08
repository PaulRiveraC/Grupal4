import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import axios from 'axios';

const ProductosList = ({ navigation }) => {
  const [productos, setProductos] = useState([]);

  // Función para obtener la lista de productos
  const fetchProductos = () => {
    axios.get('http://192.168.100.45:3001/productos')
      .then(response => {
        console.log('Datos recibidos:', response.data); // Verifica los datos en la consola
        setProductos(response.data);
      })
      .catch(error => console.error(error));
  };

  // Llama a fetchProductos al cargar el componente
  useEffect(() => {
    fetchProductos();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Lista de Productos</Text>
      <FlatList
        data={productos}
        keyExtractor={item => item.id_producto.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>ID: {item.id_producto || 'N/A'}</Text>
            <Text>Nombre: {item.nombre || 'N/A'}</Text>
            <Text>Categoría: {item.categoría || 'Sin categoría'}</Text>
            <Text>Precio: ${item.precio ? parseFloat(item.precio).toFixed(2) : 'N/A'}</Text>
            <Text>Stock: {item.stock || 'N/A'}</Text>
          </View>
        )}
      />
      <TouchableOpacity
        style={styles.botonAgregar}
        onPress={() => navigation.navigate('ProductosFormNav', { refresh: fetchProductos })}
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