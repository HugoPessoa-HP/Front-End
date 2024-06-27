import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';

import LocaisScreen from './src/screens/LocaisScreen';
import LocalScreen from './src/screens/LocalScreen';
import TrilhaScreen from './src/screens/TrilhaScreen';
import PlantaScreen from './src/screens/PlantaScreen';
import ClassificacaoScreen from './src/screens/ClassificacaoScreen';
import LoginScreen from './src/screens/LoginScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function LocaisStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Locais" component={LocaisScreen} options={{ title: 'Locais' }} />
      <Stack.Screen name="Local" component={LocalScreen} />
      <Stack.Screen name="Trilha" component={TrilhaScreen} />
      <Stack.Screen name="Planta" component={PlantaScreen} />
    </Stack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Locais') {
              iconName = focused ? 'map' : 'map-o';
            } else if (route.name === 'Classificação') {
              iconName = 'plus';
            } else if (route.name === 'Perfil') {
              iconName = 'user';
            }

            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Locais" component={LocaisStack} options={{ headerShown: false }}/>
        <Tab.Screen name="Classificação" component={ClassificacaoScreen} />
        <Tab.Screen name="Perfil" component={LoginScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
