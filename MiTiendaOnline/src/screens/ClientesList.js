import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import axios from 'axios';

const ClientesList = ({ navigation }) => {
  const [clientes, setClientes] = useState([]);

  // Obtener la lista de clientes
  useEffect(() => {
    axios.get('http://localhost:3001/clientes') // Cambia la IP por la de tu computadora
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
      <TouchableOpacity
        style={styles.botonAgregar}
        onPress={() => navigation.navigate('ClientesFormNav')}
      >
        <Text style={styles.textoBoton}>Agregar Cliente</Text>
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

export default ClientesList;