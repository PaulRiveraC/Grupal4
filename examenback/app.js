import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ListaClientes from './screens/ListaClientes';
import AgregarCliente from './screens/AgregarCliente';
import EditarCliente from './screens/EditarCliente'; // Importa la nueva pantalla
import ListaProductos from './screens/ListaProductos';
import AgregarProducto from './screens/AgregarProducto';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ListaClientes">
        <Stack.Screen
          name="ListaClientes"
          component={ListaClientes}
          options={{ title: 'Lista de Clientes' }}
        />
        <Stack.Screen
          name="AgregarCliente"
          component={AgregarCliente}
          options={{ title: 'Agregar Cliente' }}
        />
        <Stack.Screen
          name="EditarCliente"
          component={EditarCliente}
          options={{ title: 'Editar Cliente' }}
        />
        <Stack.Screen
          name="ListaProductos"
          component={ListaProductos}
          options={{ title: 'Lista de Productos' }}
        />
        <Stack.Screen
          name="AgregarProducto"
          component={AgregarProducto}
          options={{ title: 'Agregar Producto' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;