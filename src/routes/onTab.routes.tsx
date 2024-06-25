import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from '@expo/vector-icons';

import AppRoutes from "./onDrawer.routes";
//import Foto from "../pages/Foto";
//import StackRoutes from "./onStack.routes";
import Login from "../pages/login";

const Tab = createBottomTabNavigator();

function TabRoutes(){
    return(
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name="Menu" component={AppRoutes}
            options={{
                tabBarIcon: ({ color , size }) => <Feather name="home" color='##5f5f5f' size={28}/>,
                tabBarLabel: 'Home'
             }}
             />
             <Tab.Screen name="User" component={Login}
            options={{
                tabBarIcon: ({ color , size }) => <Feather name="user" color='##5f5f5f' size={28}/>,
                tabBarLabel: 'User'
             }}
             />
        </Tab.Navigator>
    )
}

export default TabRoutes;