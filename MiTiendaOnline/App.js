import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Input, Button } from '@rneui/base';
import AgregarCliente from './screens/AgregarCliente';
import AgregarProducto from './screens/AgregarProducto';
import ListaClientes from './screens/ListaClientes';
import ListaProductos from './screens/ListaProductos';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="AgregarCliente" component={AgregarCliente} />
        <Stack.Screen name="AgregarProducto" component={AgregarProducto} />
        <Stack.Screen name="ListaClientes" component={ListaClientes} />
        <Stack.Screen name="ListaProductos" component={ListaProductos} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}