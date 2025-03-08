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

const ListaClientes = ({ navigation }) => {
  const [clientes, setClientes] = useState([
    // Datos de ejemplo
    { id: 1, nombre: 'Juan Pérez', telefono: '0991234', email: 'juan@mail.com' },
    { id: 2, nombre: 'María Gómez', telefono: '0995678', email: 'maria@mail.com' },
  ]);

  const ClienteItem = ({ cliente }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('EditarCliente', { cliente });
        }}
      >
        <View style={styles.card}>
          <Text style={styles.cardTitle}>{cliente.nombre}</Text>
          <Text style={styles.cardText}>Teléfono: {cliente.telefono}</Text>
          <Text style={styles.cardText}>Email: {cliente.email}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={clientes}
        renderItem={({ item }) => <ClienteItem cliente={item} />}
        keyExtractor={(item) => item.id.toString()}
      />
      <FAB
        icon={{ name: 'add', color: colors.background }}
        color={colors.primary}
        onPress={() => {
          navigation.navigate('AgregarCliente');
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

export default ListaClientes;