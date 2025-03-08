import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ClientesList from './src/screens/ClientesList';
import ClientesForm from './src/screens/ClientesForm';
import ProductosList from './src/screens/ProductosList';
import ProductosForm from './src/screens/ProductosForm';

const Stack = createNativeStackNavigator();

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button
        title="Clientes"
        onPress={() => navigation.navigate('ClientesListNav')}
      />
      <Button
        title="Productos"
        onPress={() => navigation.navigate('ProductosListNav')}
      />
    </View>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ title: 'Inicio' }}
        />
        <Stack.Screen 
          name="ClientesListNav" 
          component={ClientesList} 
          options={{ title: 'Lista de Clientes' }}
        />
        <Stack.Screen 
          name="ClientesFormNav" 
          component={ClientesForm} 
          options={{ title: 'Agregar Cliente' }}
        />
        <Stack.Screen 
          name="ProductosListNav" 
          component={ProductosList} 
          options={{ title: 'Lista de Productos' }}
        />
        <Stack.Screen 
          name="ProductosFormNav" 
          component={ProductosForm} 
          options={{ title: 'Agregar Producto' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});