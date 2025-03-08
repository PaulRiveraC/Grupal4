import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { Input, Button } from '@rneui/base';
import { Input, Button } from '@rneui/base';

const colors = {
  background: '#ffffff',
  text: '#000000',
  primary: '#000000',
  secondary: '#f0f0f0',
  cardBackground: '#f8f8f8',
  shadow: '#cccccc',
};

const AgregarProducto = ({ navigation }) => {
  const [nombre, setNombre] = useState('');
  const [categoria, setCategoria] = useState('');
  const [precio, setPrecio] = useState('');
  const [stock, setStock] = useState('');

  const handleAgregar = () => {
    // Aquí iría la lógica para guardar el producto en la API
    Alert.alert("Éxito", "Producto agregado correctamente");
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Agregar Producto</Text>
      <Input
        value={nombre}
        placeholder="Nombre"
        onChangeText={setNombre}
        inputStyle={styles.input}
        placeholderTextColor="#999"
      />
      <Input
        value={categoria}
        placeholder="Categoría"
        onChangeText={setCategoria}
        inputStyle={styles.input}
        placeholderTextColor="#999"
      />
      <Input
        value={precio}
        placeholder="Precio"
        onChangeText={setPrecio}
        inputStyle={styles.input}
        placeholderTextColor="#999"
        keyboardType="numeric"
      />
      <Input
        value={stock}
        placeholder="Stock"
        onChangeText={setStock}
        inputStyle={styles.input}
        placeholderTextColor="#999"
        keyboardType="numeric"
      />
      <Button
        title="Guardar"
        onPress={handleAgregar}
        buttonStyle={styles.button}
        titleStyle={styles.buttonText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    color: colors.text,
    borderBottomWidth: 1,
    borderBottomColor: colors.primary,
  },
  button: {
    backgroundColor: colors.primary,
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 3,
  },
  buttonText: {
    color: colors.background,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default AgregarProducto;