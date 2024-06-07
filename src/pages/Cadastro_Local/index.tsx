/*
import { useState, useContext } from 'react';
import { api } from '../../services/API';
import { StyleSheet,
    Image,
    View,
    TextInput,
    Text,
    TouchableOpacity,
    ActivityIndicator
 } from 'react-native';

type CadastroLocalProps = {
    nome: string;
    estado: string;
    cidade: string;
    referencia1: string;
    referencia2: string;
}

import { AuthContext } from '../../contexts/context';

export default function CadastroLocal(){

    const { isAuthenticated , loading } = useContext(AuthContext);

    const [nome, setNome] = useState('');
    const [estado, setEstado] = useState('');
    const [cidade, setCidade] = useState('');
    const [referencia1, setReferencia1] = useState('');
    const [referencia2, setReferencia2] = useState('');

    async function InserirDadosLocal(){
        if(nome === '' || estado === '' || cidade === '' || referencia1 === '' || referencia2){
            return;
        }
        try{
            const response = await api.post('/local', {
                nome,
                estado,
                cidade,
                referencia1,
                referencia2
            })
        }catch{
            console.log(" Erro ao Realizar Cadastro ");
        }
        
    }
    

    return(
    <View >
        <View style={styles.inputContainer}>
            <TextInput
            placeholder='Digite o nome da Trilha'
            style={styles.input}
            placeholderTextColor={"#050505"}
            value={nome}
            onChangeText={setNome}
            />
            <TextInput
            placeholder='Digite o Estado'
            style={styles.input}
            placeholderTextColor="#050505"
            value={estado}
            onChangeText={setEstado}
            />
            <TextInput
            placeholder='Digite a Cidade'
            style={styles.input}
            placeholderTextColor="#050505"
            value={cidade}
            onChangeText={setCidade}
            />
            <TextInput
            placeholder='Digite uma Referência'
            style={styles.input}
            placeholderTextColor="#050505"
            value={referencia1}
            onChangeText={setReferencia1}
            />
            <TextInput
            placeholder='Digite uma Referência 2'
            style={styles.input}
            placeholderTextColor="#050505"
            value={referencia2}
            onChangeText={setReferencia2}
            />

            <TouchableOpacity style={styles.button} onPress={InserirDadosLocal}>
                { loading ? (
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
*/