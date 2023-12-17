import React, { useContext } from 'react'
import { View,Text, Button, StyleSheet } from 'react-native'
import { AuthContext } from '../../contexts/context'
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Principal(){
    const { logout } = useContext(AuthContext);

    return(
        
        <SafeAreaView style={styles.container}>
            <Text> Cadastro de Pesquisador </Text>
            <Button title='Logout' onPress={logout}/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{

    }
})