import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet,
    Image,
    View,
    TextInput,
    Text,
    TouchableOpacity,
    ActivityIndicator,
    Modal,
    ScrollView
} from 'react-native';

import { ModalClass } from '../../Components/ModalClass';
import { ModalClassLocal } from '../../Components/ModalLocal';
import { ModalClassTrail } from '../../Components/ModalTrail';
import { api } from '../../services/API';
import { AuthContext } from '../../contexts/context';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ModalClassPlant } from '../../Components/ModalPlant';
import { Feather } from '@expo/vector-icons';
//import { StackParamsFoto } from '../../routes/onStack.routes';
//import { ViewCamera } from '../../Components/camera';

export interface TrilhaProps{
    id: string;
    name_trail: string;
    reference1: string;
    reference2: string;
    local_id: string;
}

export interface PlantaProps{
    id: string;
    vernacular1: string;
    vernacular2: string;
    vernacular3: string;
    name_Scientific: string;
}

export interface LocalProps{
    id: string;
    name_Local: string;
    state: string;
    city: string;
}

export interface CategoryProps{
    categoria: string;
}

export default function Cadastro(){

    //const navigation = useNavigation<NativeStackNavigationProp<StackParamsFoto>>();
    const [ latitude, setLatitude ] = useState('');
    const [ longitude, setLongitude ] = useState('');
    
    const [ saveVisible, setSaveVisible ] =useState(false);
    const [ category, setCategory ] = useState<CategoryProps | undefined>()

    const [ description, setDescription ] = useState();
    const [ loadingAuth, setLoadingAuth ] = useState(false);
    const { pesquisador } = useContext(AuthContext);

    const [ modalClass, setModalClass ] = useState(false);

    const [ trilha, setTrilha ] = useState<TrilhaProps[] | []>([]);
    const [ trilhaSelected, setTrilhaSelected] = useState<TrilhaProps | undefined>();
    const [ modalTrilha, setModalTrilha ] = useState(false);

    const [ planta, setPlanta ] = useState<PlantaProps[] | []>([]);
    const [ plantaSelected, setSelectedPlanta ] = useState<PlantaProps | undefined>();
    const [ plantaVisible, setPlantaVisible ] = useState(false)

    const [ local, setLocal ] = useState<LocalProps[] | []>([]);
    const [ localSelected, setLocalSelected ] = useState<LocalProps | undefined>();
    const [ localVisible, setLocalVisible ] = useState(false);


    useEffect(() => {

        async function loadInfo() {
                const itemLocal = [
                {id: '2', name_Local: 'Local', state: '', city: ''},
                { id: '1', name_Local: 'Rio de Janeiro', state: '', city: ''},
                {id: '2', name_Local: 'São Paulo', state: '', city: ''},
                {id: '3', name_Local: 'Minas Gerais', state: '', city: ''}];
                setLocal(itemLocal);
                setLocalSelected(itemLocal[0]);
                setTrilhaSelected(undefined);
        }
        loadInfo()
    }, [plantaSelected])

    useEffect(() => {
        async function loadInfo() {
            const trailClass1 = await [
            {id: '2', name_trail: 'Trilha', reference1: '', reference2: '', local_id: ''},
            {id: '1', name_trail: 'Serra Das Araras', reference1: '', reference2: '', local_id: ''},
            {id: '2', name_trail: 'Trilha 2', reference1: '', reference2: '', local_id: ''},
            {id: '3', name_trail: 'Trilha 3', reference1: '', reference2: '', local_id: ''}]
            setTrilha(trailClass1);
            setTrilhaSelected(trailClass1[0]);
            //const response = await api.get('/pesquisadores');
            //console.log(response.data);
            //await setUser(response.data);
        }

        loadInfo();
    }, [localSelected]);

    useEffect(() => {
        async function loadInfo() {
            const itemPlanta = [{ id: '1' , vernacular1: '', vernacular2: '', vernacular3: '', name_Scientific: 'Nome Científico'},
                                { id: '2' , vernacular1: '', vernacular2: '', vernacular3: '', name_Scientific: 'Nome Científico 2'}]
            setPlanta(itemPlanta);
            setSelectedPlanta(itemPlanta[0]);
            setLocalSelected(undefined);
            setTrilhaSelected(undefined);
        }
        loadInfo();
    }, []);

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

    function classTrilha(item: TrilhaProps){
        setTrilhaSelected(item);
    }

    function classLocal(item: LocalProps){
        setLocalSelected(item);
    }

    function classPlanta(item: PlantaProps){
        setSelectedPlanta(item);
    }

    /*
    function classCategory(item: ClassProps){
        setClassSelected_1(item);
    }
    */
    
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

    async function Salvar(){
        //Function..
    }

    async function Adicionar(){
        setLatitude('')
        setLongitude('')
    }

    async function MudarCor(){
         
    }

    async function Classificar(){
        setModalClass(true);
    }

    return(
        <ScrollView>
        <View style={styles.container}>
            <Text style={ styles.text }> Adicionar </Text>
            
            { 
            <View style={styles.actions}>
                <TouchableOpacity style={styles.input} onPress={ () => setPlantaVisible(true) }>
                    <View style={ styles.inputActions }>
                        <Text style={{ color: '#050505'}}> { plantaSelected?.name_Scientific } </Text>
                        <Feather name='chevron-down' size={26} color="#050505"/>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonAdd}>
                    <Feather name="plus" size={22} color="#fff" stroke-width={3}/>
                </TouchableOpacity>
            </View>
            }

            
            {
            <View style={ styles.actions }>

            <TouchableOpacity style={[styles.input]} onPress={ () => setLocalVisible(true)}>
                <View style={ styles.inputActions }>
                    <Text style={{ color: '#050505'}} > {localSelected?.name_Local} </Text>
                    <Feather name='chevron-down' size={26} color="#050505"/>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonAdd}>
                <Feather name="plus" size={22} color="#fff" stroke-width={3}/>
            </TouchableOpacity>
            </View>
            }   
            <Modal transparent={true}
            visible={localVisible}
            animationType="fade">
                <ModalClassLocal
                            options={local}
                            handleCloseModal={ () => setLocalVisible(false) }
                            selectedItem={ classLocal }
                />
            </Modal>


            {
            <View style={styles.actions}>
            <TouchableOpacity style={styles.input} onPress={ () => setModalTrilha(true) }>
                <View style={ styles.inputActions }>
                    <Text style={{ color: '#050505'}}> {trilhaSelected?.name_trail} </Text>
                    <Feather name='chevron-down' size={26} color="#050505"/>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonAdd}>
                <Feather name="plus" size={22} color="#fff" stroke-width={3}/>
            </TouchableOpacity>
            </View>
            }

            <Modal transparent={true}
            visible={modalTrilha}
            animationType="fade">
                <ModalClassTrail
                            options={trilha}
                            handleCloseModal={ () => setModalTrilha(false) }
                            selectedItem={ classTrilha }
                />
            </Modal>


            <Modal transparent={true}
            visible={plantaVisible}
            animationType="fade">
                <ModalClassPlant
                            options={planta}
                            handleCloseModal={ () => setPlantaVisible(false) }
                            selectedItem={ classPlanta }
                />
            </Modal>


            <Text style={styles.textOccurrence} > Ocorrências </Text>
            <Text style={styles.categoria}>  </Text>


            <View style={styles.actions}>
                <TextInput
                placeholder='Latitude'
                style={styles.inputContainer}
                placeholderTextColor="#050505"
                value={latitude}
                onChangeText={setLatitude}
                />

                <TextInput
                placeholder='Longitude'
                style={styles.inputContainer}
                placeholderTextColor="#050505"
                value={longitude}
                onChangeText={setLongitude}
                />
            </View>


            <TouchableOpacity style={styles.buttonSelect} onPress={Adicionar}>
                { loadingAuth ? (
                    <ActivityIndicator size={40} color="#fff"/>
                ) : (
                    <View style={styles.actionsPlus}>
                        <Feather name="plus" size={20} color="#fff" stroke-width={3}/>
                        <Text style={styles.buttonText} > Adicionar </Text>
                    </View>
                )}
            </TouchableOpacity>


            <Text style={styles.textClass}> Classificação </Text>
                
            <View>
                <Text style={styles.textsTitle}>
                Nativas
                </Text>
                <Text style={styles.texts}>
                - Não requer manejo;
                </Text>
                <Text style={styles.textsTitle}>
                Nativas Dominantes
                </Text>
                <Text style={styles.texts}>
                - Controle de superpopulação no interior de áreas legalmente protegidas (baixa prioridade)
                </Text>
                <Text style={styles.texts}>
                - Controle populacional em áreas sob restauração ecológica (baixa prioridade)
                </Text>
                <Text style={styles.textsTitle}>
                Alienígenas Ocasionais
                </Text>
                <Text style={styles.texts}>
                - Erradicação de áreas legalmente protegidas (baixa prioridade)
                </Text>
                <Text style={styles.textsTitle}>
                Ruderais não dominantes
                </Text>
                <Text style={styles.texts}>
                - Erradicação de áreas legalmente protegidas (baixa prioridade)
                </Text>
                <Text style={styles.textsTitle}>
                Ruderais dominantes
                </Text>
                <Text style={styles.texts}>
                - Erradicação de áreas legalmente protegidas (prioridade intermediária)
                </Text>
                <Text style={styles.texts}>
                - Erradicação de áreas sob restauração ecológica (alta prioridade)
                </Text>
                <Text style={styles.texts}>
                - Desencorajamento do cultivo nas zonas de amortecimento de áreas protegidas (prioridade intermediária)
                </Text>
                <Text style={styles.textsTitle}>
                Invasoras não dominantes
                </Text>
                <Text style={styles.texts}>
                - Erradicação de áreas protegidas (prioridade intermediária)
                </Text>
                <Text style={styles.texts}>
                - Desincentivo ao cultivo na zona de amortecimento de áreas protegidas (baixa prioridade)
                </Text>
                <Text style={styles.texts}>
                - Prevenção de invasão – isolamento dos ecossistemas naturais (baixa prioridade)
                </Text>
                <Text style={styles.textsTitle}>
                Invasoras não dominantes
                </Text>
                <Text style={styles.texts}>
                a) Irrelevantes para a economia regional
                </Text>
                <Text style={styles.texts1}>
                - Erradicação de toda a região biogeográfica (alta prioridade)
                </Text>
                <Text style={styles.texts1}>
                - Proibição de cultivo em toda a região (alta prioridade)
                </Text>
                <Text style={styles.texts}>
                b)Relevantes para a economia regional
                </Text>
                <Text style={styles.texts1}>
                - Erradicação de áreas legalmente protegidas (alta prioridade)
                </Text>
                <Text style={styles.texts1}>
                - Erradicação de outros ecossistemas naturais (alta prioridade)
                </Text>
                <Text style={styles.texts1}>
                - Prevenção de invasão – isolamento dos ecossistemas naturais (alta prioridade)
                </Text>
                <Text style={styles.texts1}>
                - Desincentivo ao cultivo (alta prioridade)
                </Text>
                <Text style={styles.texts1}>
                - cultivo permitido sob regras restritas (controle permanente de invasão por aqueles que cultivam a espécie) (alta prioridade)
                </Text>

            </View>
            <TouchableOpacity style={styles.buttonSelect}
                onPress={Classificar}>
                    <View style={styles.actionsPlus}>
                        <Feather name='edit-2' size={20} color="#fff"/>
                        <Text style={styles.buttonText} > Classificar </Text>
                    </View>
            </TouchableOpacity>

                <Modal
                    transparent={true}
                    visible={modalClass}
                >
                    <ModalClass
                        handleCloseModal={ () => setModalClass(false) }
                        selectedItem={ Classificar }
                    />
                </Modal>

            <TouchableOpacity style={[styles.button, { opacity: category === undefined ? 0.4 : 1}]} onPress={Salvar}
                disabled={category === undefined}>
                { loadingAuth ? (
                    <ActivityIndicator size={40} color="#fff"/>
                ) : (
                    <View style={styles.actionsPlus}>
                        <Feather name='save' size={20} color="#fff"/>
                        <Text style={styles.buttonText}> Salvar </Text>
                    </View>
                )}
            </TouchableOpacity>
            
        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
texts:{
    marginHorizontal: 30,
    fontSize: 13,
},
texts1:{
    marginHorizontal: 40,
    fontSize: 13,
},
textsTitle:{
    marginHorizontal: 14,
    fontSize: 18
},
container:{
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#fff',
    paddingEnd: '4%',
    paddingStart: '4%'
},
text:{
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 14,
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
},
textNormal: {
    fontSize: 16
},
textOccurrence:{
    fontSize: 24
},
textClass:{
    fontSize: 24,
    color: '#0f0f0f',
    fontWeight: 'bold',
},
logo:{
    marginBottom: 18
},
input:{
    borderColor: "#0f0f0f",
    borderWidth: 1,
    borderTopColor: '#000',
    width: '80%',
    height: 44,
    backgroundColor: '#f0f0f0',
    marginBottom: 12,
    borderRadius: 10,
    color: '#050505',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
},
inputContainer:{
    borderColor: "#0f0f0f",
    borderWidth: 1,
    width: '48%',
    height: 44,
    backgroundColor: '#f0f0f0',
    marginBottom: 8,
    borderRadius: 10,
    color: '#050505',
    justifyContent: 'center',
    paddingHorizontal: 8,
},
inputActions:{
    paddingVertical: 8,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center'
},
button:{
    width: '100%',
    height: 40,
    backgroundColor: '#429e59',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10
},
button2:{
    width: '100%',
    height: 40,
    backgroundColor: '#8f8f8f',
    borderRadius: 10,
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
buttonAdd:{
    width: '16%',
    backgroundColor: '#5f5f5f',
    borderRadius: 10,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center'
},
actions:{
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
},
buttonSelect:{
    width: '100%',
    height: 40,
    backgroundColor: '#5f5f5f',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10
},
actionsPlus:{
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
},
})