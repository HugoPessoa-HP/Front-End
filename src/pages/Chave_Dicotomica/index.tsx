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
import { useNavigation } from '@react-navigation/native';

import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackParamsFoto } from '../../routes/onStack.routes';
//import { ViewCamera } from '../../Components/camera';
export interface ClassProps{
    id: string;
    class: string;
}

export default function CadastroDicotomicaOrigem(){

    const navigation = useNavigation<NativeStackNavigationProp<StackParamsFoto>>();
    const [ categoria, setCategoria] = useState('');
    
    const [ class1, setClass1 ] = useState<ClassProps[] | []>([]);
    const [ class1Selected, setClass1Selected] = useState<ClassProps | undefined>();
    const [ modalClass1Visible, setModalClass1Visible ] = useState(false);

    const [ class2, setClass2 ] = useState<ClassProps[] | []>([]);
    const [ class2Selected, setClass2Selected ] = useState<ClassProps | undefined>()
    const [ modalClassVisible, setModalClassVisible ] = useState(false);
    
    useEffect(() => {
        async function loadInfo() {
            const itemClass1 = [{id: '1', class: 'Espécies Nativas (inclui cosmopolitas)'}, 
            {id: '2', class: 'Espécies Exóticas (não indígenas, não nativas, exóticas)'}]
            setClass1(itemClass1)
            console.log(itemClass1)
            //const response = await api.get('/pesquisadores');
            //sconsole.log(response.data)
        }

        loadInfo();
    }, []);

    useEffect(() => {

        async function loadInfo() {
            const response = await api.get('/rota', {
                params: {
                    id: class1Selected?.class
                }
            }) 
        }

        loadInfo()

    }, [class1Selected])

    async function InserirDadosDicotomica(){
        if(categoria === ''){
            return;
        }
        const response = await api.post('/plantaStudent', {
            categoria: categoria })
    }
    
    function classCategory(item: ClassProps){
        setClass1Selected(item);
    }

    async function TirarFoto(){
            //<ViewCamera/>
            console.log("Olá")

            // Navegar a próxima tela.
            navigation.navigate('Foto');
    }

    return(
        
        <View style={styles.container}>
            {
            <TouchableOpacity style={styles.input} onPress={ () => setModalClass1Visible(true) }>
                <Text> {class1Selected?.class} </Text>
            </TouchableOpacity>
            }
            <Modal transparent={true} visible={modalClass1Visible} animationType="fade">
                <ModalClass handleCloseModal={ () => setModalClass1Visible(false) }
                            options={class1}
                            selectedItem={ () => { classCategory }}
                />
            </Modal>
            <TouchableOpacity style={styles.button} onPress={TirarFoto}>
                <Text style={styles.buttonText} > Tirar Foto </Text>
            </TouchableOpacity>
        </View>
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
    backgroundColor: '#424253',
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