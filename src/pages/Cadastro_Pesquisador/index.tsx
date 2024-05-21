import { useState, useContext } from 'react'
import { StyleSheet,
    Image,
    View,
    TextInput,
    Text,
    TouchableOpacity,
    ActivityIndicator
 } from 'react-native';

import { AuthContext } from '../../contexts/context';

export default function CadastroPesquisador(){

    const { isAuthenticated , loading } = useContext(AuthContext);

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [nome, setNome] = useState('');
    const [cpf, setCPF] = useState('');

    async function InserirDadosPesquisador(){
        if(email === '' || nome === '' || senha === '' || cpf === ''){
            return;
        }

        
    }

    return(
    <View style={styles.container}>
        <View style={styles.inputContainer}>
            <TextInput
            placeholder='Digite seu Nome'
            style={styles.input}
            placeholderTextColor={"#050505"}
            value={nome}
            onChangeText={setNome}
            />
            <TextInput
            placeholder='Digite seu CPF'
            style={styles.input}
            placeholderTextColor="#050505"
            value={cpf}
            onChangeText={setCPF}
            />
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
            value={senha}
            onChangeText={setSenha}
            />

            <TouchableOpacity style={styles.button} onPress={InserirDadosPesquisador}>
                { loading ? (
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