import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from '@expo/vector-icons';

import Principal from "../pages/Principal";
import AppRoutes from "./onDrawer.routes";

const Tab = createBottomTabNavigator();

function TabRoutes(){
    return(
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name="Menu" component={AppRoutes} 
            options={{
                tabBarIcon: ({ color , size }) => <Feather name="home" color={color} size={size}/>,
                tabBarLabel: 'Home'
             }}
             />
        </Tab.Navigator>
    )
}

export default TabRoutes;