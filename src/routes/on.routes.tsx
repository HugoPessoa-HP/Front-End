import React from 'react';
//import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Principal from '../pages/Principal';
import CadastroLocal from '../pages/Cadastro_Local';

//const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function AppRoutes(){
    return(
        <Drawer.Navigator>
            <Drawer.Screen name='Menu' component={Principal}/>
            <Drawer.Screen name='Cadastro Plantas' component={CadastroLocal}/>            
        </Drawer.Navigator>
    )
}

export default AppRoutes 