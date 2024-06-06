import { useState, useContext } from 'react';
import { StyleSheet,
    Image,
    View,
    TextInput,
    Text,
    TouchableOpacity,
    ActivityIndicator
 } from 'react-native';

import { AuthContext } from '../../contexts/context';
import { api } from '../../services/API'

export default function CadastroPesquisador(){

    const { isAuthenticated , loading } = useContext(AuthContext);
    const [ loadingAuth, setLoadingAuth ] = useState(false);

    const [email, setEmail] = useState('');
    const [password, setSenha] = useState('');
    const [nome, setNome] = useState('');
    const [cpf, setCPF] = useState('');

    async function InserirDadosPesquisador(){
        setLoadingAuth(true)
        if(email === '' || nome === '' || password === '' || cpf === ''){
            return;
        }

        try{
            const response = await api.post('/pesquisador',{
                nome,
                email,
                cpf,
                password
            })
            console.log(response.data)
            setCPF('')
            setEmail('')
            setNome('')
            setSenha('')
        }catch(error){
            console.log(" Erro ao Realizar Cadastro ");
            setLoadingAuth(false);
        }
        
        setLoadingAuth(false);
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
            secureTextEntry={true}
            value={password}
            onChangeText={setSenha}
            />

            <TouchableOpacity style={styles.button} onPress={InserirDadosPesquisador}>
                { loadingAuth ? (
                    <ActivityIndicator size={40} color="#fff"/>
                ) : (
                    <Text style={styles.buttonText}> Cadastrar Pesquisador </Text>
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
    paddingEnd: '4%',
    paddingStart: '4%'
},
text:{
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 20,
},
logo:{
    marginBottom: 18
},
inputContainer:{
    width: '100%',
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
    color: '#050505',
},
button:{
    width: '95%',
    height: 40,
    backgroundColor: '#13a137',
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