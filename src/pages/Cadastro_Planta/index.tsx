import React, { useState, useContext } from 'react'
import { View, 
         Text, 
         StyleSheet, 
         TextInput, 
         TouchableOpacity,
         ActivityIndicator} from 'react-native'

import { AuthContext } from '../../contexts/context';

export default function CadastroPlantaPesquisador(){

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

            <View style={styles.inputContainer}>
                <TextInput
                placeholder='Digite o Nome Científico'
                style={styles.input}
                placeholderTextColor="#050505"
                value={email}
                onChangeText={setEmail}
                />
                <TextInput
                placeholder='Digite a Origem da Planta'
                style={styles.input}
                placeholderTextColor="#050505"
                secureTextEntry={true}
                value={password}
                onChangeText={setPassword}
                />

                <TouchableOpacity style={styles.button} onPress={CadastroPlantaPesquisador}>
                    { loadingAuth ? (
                        <ActivityIndicator size={40} color="#fff"/>
                    ) : (
                        <Text style={styles.buttonText}> Cadastrar </Text>
                    )}
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingStart: '4%',
    },
    logo:{
        marginBottom: 18
    },
    inputContainer:{
        width: '100%',
        paddingVertical: 32,
        paddingHorizontal: 14
    },
    input:{
        width: '95%',
        height: 40,
        backgroundColor: '#f0f0f0',
        marginBottom: 12,
        borderRadius: 4,
        paddingHorizontal: 8,
        color: '#050505'
    },
    button:{
        width: '95%',
        height: 40,
        backgroundColor: '#429e59',
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