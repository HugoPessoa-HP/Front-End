import React, { useState, useContext } from 'react'
import { View, 
         Text, 
         StyleSheet, 
         TextInput, 
         Image, 
         TouchableOpacity,
         ActivityIndicator, 
         Button} from 'react-native'

import { AuthContext } from '../../contexts/context';

export default function Login(){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { loginI, loadingAuth } = useContext(AuthContext);

    async function login(){
        if(email === '' || password === ''){
            return;
        }
        console.log(email);
        await loginI({email, password})
 
    }

    return(
        <View style={styles.container}>
            <Image
                style={styles.logo}
                source={require('../../images/Plantas-Exoticas.png')}
            />

            <View style={styles.inputContainer}>
                <TextInput
                placeholder='Digite seu Email'
                style={styles.input}
                placeholderTextColor="#050505"
                value={email}
                onChangeText={setEmail}
                />
                <TextInput
                placeholder='Sua senha'
                style={styles.input}
                placeholderTextColor="#050505"
                secureTextEntry={true}
                value={password}
                onChangeText={setPassword}
                />

                <TouchableOpacity style={styles.button} onPress={login}>
                    { loadingAuth ? (
                        <ActivityIndicator size={40} color="#fff"/>
                    ) : (
                        <Text style={styles.buttonText}> Acessar </Text>
                    )}   
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
        backgroundColor: '#13a137'
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
        height: 50,
        backgroundColor: '#f0f0f0',
        marginBottom: 12,
        borderRadius: 4,
        paddingHorizontal: 8,
        color: '#050505'
    },
    button:{
        width: '95%',
        height: 40,
        backgroundColor: '#050505',
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText:{
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff'
    }
})