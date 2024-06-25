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

import { ModalClassTrail } from '../../Components/ModalTrail'
import { api } from '../../services/API';
import { AuthContext } from '../../contexts/context';
import { useNavigation } from '@react-navigation/native';

import { NativeStackNavigationProp } from '@react-navigation/native-stack';
//import { StackParamsFoto } from '../../routes/onStack.routes';
//import { ViewCamera } from '../../Components/camera';
export interface ClassProps{
    id: string;
    class: string;
}

export interface UserProps{
    email: string;
    nome: string;
}

interface CategoryProps{
    categoria: string;
}

export default function CadastroDicotomicaOrigem(){

    //const navigation = useNavigation<NativeStackNavigationProp<StackParamsFoto>>();
    const [ category, setCategory] = useState<CategoryProps | null>(null);
    const [ description, setDescription ] = useState();
    const [ loadingAuth, setLoadingAuth ] = useState(false);
    const { pesquisador } = useContext(AuthContext);
    
    const [ class1, setClass1 ] = useState<ClassProps[] | []>([]);
    const [ classSelected_1, setClassSelected_1] = useState<ClassProps | undefined>();
    const [ modalClassVisible_1, setModalClassVisible_1 ] = useState(false);

    const [ class2, setClass2 ] = useState<ClassProps[] | []>([]);
    const [ classSelected_2, setClassSelected_2 ] = useState<ClassProps | undefined>();
    const [ modalClassVisible_2, setModalClassVisible_2 ] = useState(false);

    const [ class3, setClass3 ] = useState<ClassProps[] | []>([]);
    const [ classSelected_3, setClassSelected_3 ] = useState<ClassProps | undefined>();
    const [ modalClassVisible_3, setModalClassVisible_3 ] = useState(false);

    const [ class4, setClass4 ] = useState<ClassProps[] | []>([]);
    const [ classSelected_4, setClassSelected_4 ] = useState<ClassProps | undefined>();
    const [ modalClassVisible_4, setModalClassVisible_4 ] = useState(false);

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
                setCategory({categoria: ''});
                setClass2(itemClass2);
                setClassSelected_2(undefined);
                setClassSelected_3(undefined);
                setClass3([])
                setClassSelected_4(undefined);
                setClass4([])
            } else {
                const itemClass2 = [{ id: '3', class: 'Ocorre apenas temporariamente, não deixando Descendentes sem contribuição humana de Diásporo' },
                { id: '4', class: 'Forma populações sustentáveis sem ajuda humana (Plantas naturalizadas)'}];
                setCategory({categoria: ''})
                setClass2(itemClass2);
                setClassSelected_2(undefined);
                setClassSelected_3(undefined);
                setClass3([]);
                setClassSelected_4(undefined);
                setClass4([]);
            }
        }
        loadInfo()

    }, [classSelected_1])

    useEffect(() => {
        async function loadInfo(){
            if(classSelected_2?.id === '1'){
                setCategory({categoria: 'Espécies Silvestres (nativas não agressivas)'})
                setClass3([{id: '7', class: 'Null'}])
                setClass3([])
                setClassSelected_3(undefined);
                setClassSelected_4(undefined);
            } else if (classSelected_2?.id === '2'){
                setCategory({categoria: 'Espécies Dominantes (nativas agressivas)'})
                setClass3([{id: '7', class: 'Null'}])
                setClass4([])
                setClassSelected_3(undefined);
                setClassSelected_4(undefined);
            } else if (classSelected_2?.id === '3'){
                setCategory({categoria: 'Espécies Exóticas transacionais (Alienígenas transitórias)'})
                setClass3([{id: '7', class: 'Null'}])
                setClass4([])
                setClassSelected_3(undefined);
                setClassSelected_4(undefined);
            } else if ( classSelected_2?.id === '4' ){
                const itemClass3 = [{ id: '1', class: 'Não estabelece, em zonas naturais não perturbadas, Ecossistemas, espalhando-se apenas em Áreas antropizadas (ruderais)' },
                {id: '2', class: 'Estabelece em ecossistemas naturais não perturbados'}]
                setCategory({categoria: ''});
                setClass3(itemClass3);
                setClassSelected_3(undefined);
            }
        }
        loadInfo()
    }, [classSelected_2])

    useEffect(() => {
        async function loadInfo(){
            if(classSelected_3?.id === '1'){
                const itemClass4 = [{id: '1', class: 'Não forma stands puros, não inibindo Regeneração de espécies de plantas nativas'},
                {id: '2', class: 'Formas puras ou domina a Comunidade, inibindo a regeneração Espécies de plantas nativas'}]
                setCategory({categoria: ''})
                setClass4(itemClass4);
                setClassSelected_4(undefined);
            } else if (classSelected_3?.id === '2'){
                const itemClass4 = [{id: '3', class: 'Não difunde nem altera a composição ou a estrutura da comunidade de plantas nativas'},
                {id: '4', class: 'Espalha e altera a composição ou estrutura da comunidade de plantas nativas, suprimindo a regeneração de espécies'}]
                setCategory({categoria: ''})
                setClass4(itemClass4);
                setClassSelected_4(undefined);
            } else if (classSelected_3?.id === '7'){
                setClassSelected_4(undefined);
                setClass4([{id: '7', class: 'Null'}])
            }
        }

        loadInfo();
    }, [classSelected_3])

    useEffect(() => {
        async function loadInfo(){
            if(classSelected_4?.id === '1'){
                setCategory({categoria: 'Ruderal não Dominante (Erva não agressiva)'});
            } else if(classSelected_4?.id === '2'){
                setCategory({categoria: 'Ruderal Dominante (Erva Agressiva)'});
            } else if(classSelected_4?.id === '3'){
                setCategory({categoria: 'Invasor não dominante (não agressivo)'})
            } else if(classSelected_4?.id === '4'){
                setCategory({categoria: 'Invasor dominante (Erva daninha ambiental)'})
            }
        }
        loadInfo();
    }, [classSelected_4])

    async function uploadImage(){

    }

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

    function classCategory_3(item: ClassProps){
        setClassSelected_3(item);
    }

    function classCategory_4(item: ClassProps){
        setClassSelected_4(item);
    }

    async function TirarFoto(){
            //<ViewCamera/>
            console.log("Olá")

            // Navegar a próxima tela.
            //navigation.navigate('Foto');
    }

    async function EnviarFormulario(){
        setLoadingAuth(true)
            try{
                const response = await api.post('/planta',{
                    categoria: category
                })
                    console.log(response.data)
                    const { categoria } = response.data;
    
                    const data = {
                       ...response.data
                    };
                    const token = pesquisador.token;
                    api.defaults.headers.common['Authorization'] = `Bearer ${token}`
                
                setLoadingAuth(false);
            }catch(err){
                console.log(" Erro ao Realizar Cadastro");
                setLoadingAuth(false);
            }
        }

    return(
        <Text> Teste </Text>
        /*
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

            {
            <TouchableOpacity style={styles.input} onPress={ () => setModalClassVisible_3(true) }>
                <Text style={{ color: '#050505'}}> {classSelected_3?.class} </Text>
            </TouchableOpacity>
            }
            <Modal transparent={true} 
            visible={modalClassVisible_3}
            animationType="fade">
                <ModalClass
                            options={class3}
                            handleCloseModal={ () => setModalClassVisible_3(false) }
                            selectedItem={ classCategory_3 }
                />
            </Modal>

            {
            <TouchableOpacity style={styles.input} onPress={ () => setModalClassVisible_4(true) }>
                <Text style={{ color: '#050505'}}> {classSelected_4?.class} </Text>
            </TouchableOpacity>
            }
            <Modal transparent={true}
            visible={modalClassVisible_4}
            animationType="fade">
                <ModalClass
                            options={class4}
                            handleCloseModal={ () => setModalClassVisible_4(false) }
                            selectedItem={ classCategory_4 }
                />
            </Modal>
            <Text>Espécie Detectada:</Text>
            <Text style={styles.categoria}> {category?.categoria} </Text>

            <TouchableOpacity style={styles.button} onPress={EnviarFormulario}>
                { loadingAuth ? (
                    <ActivityIndicator size={40} color="#fff"/>
                ) : (
                    <Text style={styles.buttonText} > Enviar Categoria de Planta </Text>
                )}
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={TirarFoto}>
                <Text style={styles.buttonText} > Tirar Foto </Text>
            </TouchableOpacity>
            
        </View>
        */
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
    width: '95%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 32,
    paddingHorizontal: 14
},
input:{
    width: '95%',
    height: 60,
    backgroundColor: '#f0f0f0',
    marginBottom: 12,
    borderRadius: 4,
    color: '#050505',
    justifyContent: 'center',
    paddingHorizontal: 8,
},
button:{
    width: '95%',
    height: 40,
    backgroundColor: '#429e59',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10
},
buttonText:{
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff'
},
categoria:{
    fontStyle: 'italic',
},
})