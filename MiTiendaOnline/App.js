import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PantallaClientes from './src/screens/PantallaClientes';
import PantallaProductos from './src/screens/PantallaProductos';
import InsertarCliente from './src/screens/InsertarCliente';
import InsertarProducto from './src/screens/InsertarProducto';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Clientes" component={PantallaClientes} />
        <Stack.Screen name="Productos" component={PantallaProductos} />
        <Stack.Screen name="InsertarCliente" component={InsertarCliente} />
        <Stack.Screen name="InsertarProducto" component={InsertarProducto} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;