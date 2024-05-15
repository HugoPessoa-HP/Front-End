import React, { useContext, useState } from "react";
import { AuthContext } from "../contexts/context";

import { View, ActivityIndicator } from "react-native";

import AppRoutes from "./on.routes"
import AuthRoutes from "./off.routes";

function Routes(){

    //Controllar se usuário está logado ou não.
    const { isAuthenticated, loading } = useContext(AuthContext);
    
    if(loading){
        return(
            <View
            style={{
                flex:1,
                backgroundColor: '#ffffff',
                justifyContent: 'center',
                alignContent: 'stretch'
            }}>

                <ActivityIndicator size={60} color={"#1D1D2E"}/>
            </View>
            
        )
    } else { 
        return(
            isAuthenticated ? <AppRoutes/> : <AuthRoutes/>
        )
    }
}

export default Routes