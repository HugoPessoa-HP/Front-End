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

export interface UserProps{
    email: string;
    nome: string;
}

export default function CadastroDicotomicaOrigem(){

    const navigation = useNavigation<NativeStackNavigationProp<StackParamsFoto>>();
    const [ category, setCategory] = useState('');
    
    const [ class1, setClass1 ] = useState<ClassProps[] | []>([]);
    const [ classSelected_1, setClassSelected_1] = useState<ClassProps | undefined>();
    const [ modalClassVisible_1, setModalClassVisible_1 ] = useState(false);

    const [ class2, setClass2 ] = useState<ClassProps[] | []>([]);
    const [ classSelected_2, setClassSelected_2 ] = useState<ClassProps | undefined>()
    const [ modalClassVisible_2, setModalClassVisible_2 ] = useState(false);

    const [ class3, setClass3 ] = useState<ClassProps[] | []>([]);
    const [ clasSelected_3, setClassSelected_3 ] = useState<ClassProps | undefined>()
    const [ modalClassVisible_3, setModalClassVisible_3 ] = useState(false);

    const [ user, setUser ] = useState<UserProps[] | []>([]);
    const [ userSelected, setUserSelected ] = useState<UserProps | undefined>()
    const [ userVisible, setUserVisible ] = useState(false);

    useEffect(() => {
        async function loadInfo() {
            const itemClass1 = await [{id: '1', class: 'Espécies Nativas (inclui cosmopolitas)'}, 
            {id: '2', class: 'Espécies Exóticas (não indígenas, não nativas, exóticas)'}]
            setClass1(itemClass1)
            console.log(itemClass1)
            setClassSelected_1(itemClass1[0])
            //const response = await api.get('/pesquisadores');
            //console.log(response.data)
            //await setUser(response.data)
        }

        loadInfo();
    }, []);

    useEffect(() => {

        async function loadInfo() {
            if(classSelected_1?.id === '1'){
                const itemClass2 = [{ id: '1', class: 'Não formam estandes puros ao nível da inibição da regeneração de outras espécies de plantas nativas' },
                {id: '2', class: 'Forma estandes puros ou domina a comunidade ao nível da inibição da regeneração deoutras espécies de plantas nativas. Especialmente em sítios degradados'}];
                setClass2(itemClass2);
                setClassSelected_2(undefined);
                setClassSelected_3(undefined);
            } else {
                const itemClass2 = [{ id: '3', class: 'Ocorre apenas temporariamente, não deixando Descendentes sem contribuição humana de Diásporo' },
                { id: '4', class: 'Forma populações sustentáveis sem ajuda humana (Plantas naturalizadas)'}];
                setClass2(itemClass2);
                setClassSelected_2(undefined);
                setClassSelected_3(undefined);
            }
        }
        loadInfo()

    }, [classSelected_1])

    useEffect(() => {
        async function loadInfo(){
            if(classSelected_2?.id === '1'){
                setCategory('Espécies Silvestres (nativas não agressivas)')
            } else if (classSelected_2?.id === '2'){
                setCategory('Espécies Dominantes (nativas agressivas)')
            } else if (classSelected_2?.id === '3'){
                setCategory('Espécies Exóticas transacionais (Alienígenas transitórias)')
            } else if ( classSelected_2?.id === '4' ){
                const itemClass3 = [{ id: '1', class: 'Não estabelece, em zonas naturais não perturbadas, Ecossistemas, espalhando-se apenas em Áreas antropizadas (ruderais)' },
                {id: '2', class: 'Estabelece em ecossistemas naturais não perturbados'}]
                setClass3(itemClass3);
            }
        }
        loadInfo()
    }, [classSelected_2])

    /*
    async function InserirDadosDicotomica(){
        if(category === ''){
            return;
        }
        const response = await api.post('/plantaStudent', {
            categoria: category })
    }
    */
    
    function classCategory(item: ClassProps){
        setClassSelected_1(item);
    }

    function classCategory_2(item: ClassProps){
        setClassSelected_2(item);
    }

    async function TirarFoto(){
            //<ViewCamera/>
            console.log("Olá")

            // Navegar a próxima tela.
            navigation.navigate('Foto');
    }

    return(
        
        <View style={styles.container}>
            <Text style={ styles.text }> Chave Dicotômica </Text>
            {
            <TouchableOpacity style={styles.input} onPress={ () => setModalClassVisible_1(true) }>
                <Text style={{ color: '#050505'}}> {classSelected_1?.class} </Text>
            </TouchableOpacity>
            }
            <Modal transparent={true} 
            visible={modalClassVisible_1}
            animationType="fade">
                <ModalClass 
                            options={class1}
                            handleCloseModal={ () => setModalClassVisible_1(false) }
                            selectedItem={ classCategory }
                />
            </Modal>
            {
            <TouchableOpacity style={styles.input} onPress={ () => setModalClassVisible_2(true) }>
                <Text style={{ color: '#050505'}}> {classSelected_2?.class} </Text>
            </TouchableOpacity>
            }
            <Modal transparent={true} 
            visible={modalClassVisible_2}
            animationType="fade">
                <ModalClass
                            options={class2}
                            handleCloseModal={ () => setModalClassVisible_2(false) }
                            selectedItem={ classCategory_2 }
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
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingEnd: '4%',
    paddingStart: '4%'
},
text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 20,
},
logo:{
    marginBottom: 18
},
inputContainer:{
    width: '95%',
    paddingVertical: 32,
    paddingHorizontal: 14
},
input:{
    width: '100%',
    height: 60,
    backgroundColor: '#f0f0f0',
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