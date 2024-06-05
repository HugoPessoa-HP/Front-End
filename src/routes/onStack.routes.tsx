import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Feather } from '@expo/vector-icons';

import AppRoutes from "./onDrawer.routes";
import Foto from '../pages/Foto';

export type StackParamsFoto = {
    Foto: undefined;
}

const Stack = createNativeStackNavigator<StackParamsFoto>();

function StackRoutes(){
    return(
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Foto" component={Foto}
            />
        </Stack.Navigator>
    )
}

export default StackRoutes;