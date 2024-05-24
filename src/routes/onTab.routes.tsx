import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from '@expo/vector-icons';

import Principal from "../pages/Principal";

const Tab = createBottomTabNavigator();

export default function TabRoutes(){
    return(
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name="Menu" component={Principal} 
            options={{
                tabBarIcon: ({ color , size }) => <Feather name="home" color={color} size={size}/>,
                tabBarLabel: 'Home'
             }}
             />
        </Tab.Navigator>
    )
}