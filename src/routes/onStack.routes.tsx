import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Feather } from '@expo/vector-icons';

import AppRoutes from "./onDrawer.routes";
import Foto from '../screens/Profile';

export type StackParamsFoto = {
    Foto: undefined;
}

const Stack = createNativeStackNavigator<StackParamsFoto>();

function TabRoutes(){
    return(
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Foto" component={Foto}
             />
        </Stack.Navigator>
    )
}

export default TabRoutes;