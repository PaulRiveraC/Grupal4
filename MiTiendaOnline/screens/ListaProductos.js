import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Input, Button } from '@rneui/base';
import { FAB } from '@rneui/themed';

const colors = {
  background: '#ffffff',
  text: '#000000',
  primary: '#000000',
  secondary: '#f0f0f0',
  cardBackground: '#f8f8f8',
  shadow: '#cccccc',
};

const ListaProductos = ({ navigation }) => {
  const [productos, setProductos] = useState([
    // Datos de ejemplo
    { id: 1, nombre: 'Laptop HP', categoria: 'Computadoras', precio: 750.99, stock: 10 },
    { id: 2, nombre: 'Mouse Logitech', categoria: 'Accesorios', precio: 25.50, stock: 50 },
  ]);

  const ProductoItem = ({ producto }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('EditarProducto', { producto });
        }}
      >
        <View style={styles.card}>
          <Text style={styles.cardTitle}>{producto.nombre}</Text>
          <Text style={styles.cardText}>Categoría: {producto.categoria}</Text>
          <Text style={styles.cardText}>Precio: ${producto.precio}</Text>
          <Text style={styles.cardText}>Stock: {producto.stock}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={productos}
        renderItem={({ item }) => <ProductoItem producto={item} />}
        keyExtractor={(item) => item.id.toString()}
      />
      <FAB
        icon={{ name: 'add', color: colors.background }}
        color={colors.primary}
        onPress={() => {
          navigation.navigate('AgregarProducto');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 10,
  },
  card: {
    backgroundColor: colors.cardBackground,
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 5,
  },
  cardText: {
    fontSize: 14,
    color: colors.text,
    marginBottom: 3,
  },
});

export default ListaProductos;