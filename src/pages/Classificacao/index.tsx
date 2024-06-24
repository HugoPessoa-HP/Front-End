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

import { ModalClassLocal } from '../../Components/ModalLocal'
import { ModalClass } from '../../Components/ModalTrail'
import { api } from '../../services/API';
import { AuthContext } from '../../contexts/context';
import { useNavigation } from '@react-navigation/native';

import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ModalClassPlant } from '../../Components/ModalPlant';
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

interface CategoryProps{
    categoria: string;
}

export default function Cadastro(){

    //const navigation = useNavigation<NativeStackNavigationProp<StackParamsFoto>>();
    const [ category, setCategory] = useState<CategoryProps | null>(null);
    const [ description, setDescription ] = useState();
    const [ loadingAuth, setLoadingAuth ] = useState(false);
    const { pesquisador } = useContext(AuthContext);
    
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
                setSelectedPlanta(undefined);
        }       
        loadInfo()
    }, [])

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
            //console.log(response.data)
            //await setUser(response.data)
        }

        loadInfo();
    }, [localSelected]);

    useEffect(() => {
        async function loadInfo() {
            const itemPlanta = [{ id: '1' , vernacular1: '', vernacular2: '', vernacular3: '', name_Scientific: 'Nome Científico 1'},
                                { id: '2' , vernacular1: '', vernacular2: '', vernacular3: '', name_Scientific: 'Nome Científico 2'}]
            setPlanta(itemPlanta);
            setSelectedPlanta(itemPlanta[0])
        }
        loadInfo();
    }, [trilhaSelected])

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

    return(
        
        <View style={styles.container}>
            <Text style={ styles.text }> Adicionar </Text>
            {
            <TouchableOpacity style={styles.input} onPress={ () => setLocalVisible(true) }>
                <Text style={{ color: '#050505'}}> {localSelected?.name_Local} </Text>
            </TouchableOpacity>
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
            <TouchableOpacity style={styles.input} onPress={ () => setModalTrilha(true) }>
                <Text style={{ color: '#050505'}}> {trilhaSelected?.name_trail} </Text>
            </TouchableOpacity>
            }
            <Modal transparent={true}
            visible={modalTrilha}
            animationType="fade">
                <ModalClass 
                            options={trilha}
                            handleCloseModal={ () => setModalTrilha(false) }
                            selectedItem={ classTrilha }
                />
            </Modal>
            {
            <TouchableOpacity style={styles.input} onPress={ () => setPlantaVisible(true) }>
                <Text style={{ color: '#050505'}}> { plantaSelected?.name_Scientific } </Text>
            </TouchableOpacity>
            }
            <Modal transparent={true}
            visible={plantaVisible}
            animationType="fade">
                <ModalClassPlant 
                            options={planta}
                            handleCloseModal={ () => setPlantaVisible(false) }
                            selectedItem={ classPlanta }
                />
            </Modal>

            <Text>Espécie Detectada:</Text>
            <Text style={styles.categoria}> {category?.categoria} </Text>

            <TouchableOpacity style={styles.button} onPress={Salvar}>
                { loadingAuth ? (
                    <ActivityIndicator size={40} color="#fff"/>
                ) : (
                    <Text style={styles.buttonText} > Salvar </Text>
                )}
            </TouchableOpacity>
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
text:{
    fontSize: 28,
    fontWeight: 'bold',
    marginVertical: 14,
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
},
logo:{
    marginBottom: 18
},
input:{
    width: '95%',
    height: 44,
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
    backgroundColor: '#13a137',
    borderRadius: 4,
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