import React, { useState, useEffect, useContext } from 'react'
import { StyleSheet,
    Image,
    View,
    TextInput,
    Text,
    TouchableOpacity,
    ActivityIndicator,
    Modal
} from 'react-native';
import { ModalClass } from '../../Components/ModalClass'

import { api } from '../../services/API';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AuthContext } from '../../contexts/context';

export interface ClassProps{
    class: string;
}

export default function CadastroDicotomicaOrigem(){

    const { isAuthenticated , loading } = useContext(AuthContext);
    const [ categoria, setCategoria] = useState('');
    
    const [ class1, setClass1 ] = useState<ClassProps[] | []>([]);
    const [ class1Selected, setClass1Selected] = useState<ClassProps>();
    const [ modalClass1, setModalClass1 ] = useState(false);
    
    async function InserirDadosDicotomica(){
        if(categoria === ''){
            return;
        }
    }

    async function CadastrarCategoriaPlanta(){
        if(categoria === ''){
            return;
        }
        const response = await api.post('/plantaStudent', {
            categoria: categoria })
    }

    useEffect(() => {
        async function loadInfo() {
            
        }

        loadInfo();
    }, []);

    function classCategory(item: ClassProps){
        setClass1Selected(item);
    }

    return(
        <SafeAreaView style={styles.container}>
            {
            <TouchableOpacity style={styles.input} onPress={ () => setModalClass1(true) }>
                <Text> {class1Selected?.class} </Text>
            </TouchableOpacity>
            }
            <Modal transparent={true} visible={modalClass1} animationType="fade">
                <ModalClass handleCloseModal={ () => setModalClass1(false) }
                            options={class1}
                            selectedItem={ () => { setClass1Selected }}
                />
            </Modal>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingEnd: '4%',
    paddingStart: '4%'
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
    width: '100%',
    height: 40,
    backgroundColor: '#101026',
    marginBottom: 12,
    borderRadius: 4,
    color: '#f0f0f0',
    justifyContent: 'center',
    paddingHorizontal: 8,
    fontSize: 20,
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