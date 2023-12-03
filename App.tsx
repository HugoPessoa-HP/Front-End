import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes/index';
import { Context } from './src/contexts/context';

export default function App() {
  return (
    <NavigationContainer>
      <Context>
      <StatusBar backgroundColor="#1d1d2e" barStyle="light-content" translucent={false} />
      <Routes/>
      </Context>
    </NavigationContainer>
  );
}