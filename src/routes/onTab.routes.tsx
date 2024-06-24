import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from '@expo/vector-icons';

import AppRoutes from "./onDrawer.routes";
//import Foto from "../pages/Foto";
//import StackRoutes from "./onStack.routes";

const Tab = createBottomTabNavigator();

function TabRoutes(){
    return(
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name="Menu" component={AppRoutes}
            options={{
                tabBarIcon: ({ color , size }) => <Feather name="home" color='#13a137' size={28}/>,
                tabBarLabel: 'Home'
             }}
             />
        </Tab.Navigator>
    )
}

export default TabRoutes;