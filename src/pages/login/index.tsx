import React, { useState, useContext } from 'react'
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity,
ActivityIndicator, 
Button} from 'react-native'

import { AuthContext } from '../../contexts/context';

export default function SignIn(){

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const { loginI, loading } = useContext(AuthContext);

    async function login(){
        if(email === '' || senha === ''){
            return;
        }
        
        await loginI({email, senha})
    }

    return(
        <View style={styles.container}>
            <Image
                style={styles.logo}
                source={require('../../assets/logo.png')}
            />

            <View style={styles.inputContainer}>
                <TextInput
                placeholder='Digite seu Email'
                style={styles.input}
                placeholderTextColor="#f0f0f0"
                value={email}
                onChangeText={setEmail}
                />
                <TextInput
                placeholder='Sua senha'
                style={styles.input}
                placeholderTextColor="#f0f0f0"
                value={senha}
                onChangeText={setSenha}
                />

                <TouchableOpacity style={styles.button} onPress={login}>
                    { loading ? (
                        <ActivityIndicator size={30} color="#fff"/>
                    ) : (
                        <Text style={styles.buttonText}> Acessar </Text>
                    )}
                    <Text style={styles.buttonText}> Logar </Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1d1d2e'
    },
    logo:{
        marginBottom: 18
    },
    inputContainer:{
        width: '95%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 32,
        paddingHorizontal: 14
    },
    input:{
        width: '95%',
        height: 40,
        backgroundColor: '#101026',
        marginBottom: 12,
        borderRadius: 4,
        paddingHorizontal: 8,
        color: '#fff'
    },
    button:{
        width: '95%',
        heigth: 40,
        backgroundColor: '#3fffa3',
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText:{
        fontSize: 18,
        fontWeight: 'bold',
        color: '#101026'
    }
})