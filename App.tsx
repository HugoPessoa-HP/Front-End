import 'react-native-gesture-handler';
import 'react-native-reanimated';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes/index';
import { ContextProvider } from './src/contexts/context';

export default function App() {
  return (
    <NavigationContainer>
      <ContextProvider>
          <StatusBar backgroundColor="#1d1d2e" barStyle="light-content" translucent={false} />
          <Routes/>
      </ContextProvider>
    </NavigationContainer>
  );
}