import React from 'react';
//import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createDrawerNavigator } from '@react-navigation/drawer';

import Principal from '../pages/Principal';

//const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function AppRoutes(){
    return(
        <Drawer.Navigator>
            <Drawer.Screen name='Principal' component={Principal}/>
        </Drawer.Navigator>
    )
}

export default AppRoutes 