import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import axios from 'axios';

const PantallaClientes = () => {
  const [clientes, setClientes] = useState([]);

  // Obtener los clientes de la API
  useEffect(() => {
    axios.get('http://localhost:3001/clientes')
      .then(response => setClientes(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Lista de Clientes</Text>
      <FlatList
        data={clientes}
        keyExtractor={item => item.id_cliente.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.nombre}</Text>
            <Text>{item.email}</Text>
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

export default PantallaClientes;