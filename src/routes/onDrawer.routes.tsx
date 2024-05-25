import React from 'react';
//import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Feather } from '@expo/vector-icons';

import Principal from '../pages/Principal';
import CadastroPlantas from '../pages/Cadastro_Planta';
import CadastroDicotomicaOrigem from '../pages/Chave_Dicotomica';
import TabRoutes from './onTab.routes';

//const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function AppRoutes(){
    return(
        <Drawer.Navigator screenOptions={{ title: '' }}>
            <Drawer.Screen name='Home' component={Principal}
            options={{
                drawerIcon: ({color, size}) => <Feather name='home' color={color} size={size}/>,
                drawerLabel: 'Home'
            }}
            />
            <Drawer.Screen name='Cadastro Plantas' component={CadastroPlantas}
            options={{
                drawerLabel: 'Cadastro Plantas'
            }}
            />
            <Drawer.Screen name='Cadastro Chave Dicotômica' component={CadastroDicotomicaOrigem}
            options={{
                drawerLabel: 'Chave Dicotômica'
            }}
            />        
        </Drawer.Navigator>
    )
}

export default AppRoutes 