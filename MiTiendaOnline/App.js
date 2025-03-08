import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ClientesList from './src/screens/ClientesList'; // Asegúrate de que esta ruta sea correcta
import ClientesForm from './src/screens/ClientesForm'; // Asegúrate de que esta ruta sea correcta
import ProductosList from './src/screens/ProductosList'; // Asegúrate de que esta ruta sea correcta
import ProductosForm from './src/screens/ProductosForm'; // Asegúrate de que esta ruta sea correcta

const Stack = createNativeStackNavigator(); // Uso correcto

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='ClientesListNav'>
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