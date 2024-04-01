import React, { useContext } from 'react'
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native'
import { AuthContext } from '../../contexts/context'
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Principal(){
    const { logout } = useContext(AuthContext);

    return(

        <SafeAreaView style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={logout}>
                <Text style={styles.title}> Logout </Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: 15,
      backgroundColor: '#1db636'  
    },
    title:{

    },
    input:{
        width: '100%',
        heigth: 60,
        backgroundColor: '#',
        borderRadius: 6,
        paddingHorizontal: 10,
        textAlign: 'center',
        fontSize: 24,
        color: '#fff'
    },
    button:{
        
    }
})