import React, { useContext, useEffect, useState } from 'react'
import { View, Text, Button, StyleSheet, TouchableOpacity , FlatList , Modal } from 'react-native'
import { AuthContext } from '../../contexts/context'
import { SafeAreaView } from 'react-native-safe-area-context'

import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';
import { requestForegroundPermissionsAsync ,
         getCurrentPositionAsync , 
         LocationObject ,
         watchPositionAsync,
         LocationAccuracy, 
         watchHeadingAsync,} from 'expo-location';
import * as location from 'expo-location';
import MapView , {Polygon , Callout} from 'react-native-maps';

import { api } from '../../services/API';
import { Marker } from 'react-native-maps';
import { Float } from 'react-native/Libraries/Types/CodegenTypes';
import { ScrollView } from 'react-native-gesture-handler';
import { ModalClassPlants } from '../../Components/ModalPlants'

export type PlantasProps = {
    id: string;
    nome_Cientifico: string;
    familia: string;
    vernaculo1: string;
    vernaculo2: string;
    origem: string;
    habito: string;
    trilha_id: string;
    categoria: string;
}

type NumeroPlantasProps = {
    numero: Float;
}

export default function Principal(){
    const { logout , estado } = useContext(AuthContext);
    const [location, setLocation] = useState<LocationObject | null>(null);
    const [ marker, setMarker] = useState([]);
    const [ plantas, setPlantas] = useState<PlantasProps[] | []>([]);
    const [ numeroPlantas, setNumeroPlantas] = useState<NumeroPlantasProps | []>();
    //const [ familias, setPlanta ] = useState();
    //var arrayFamilias = [];
    //var arrayHabitos = [];
    //var arrayOrigens = [];

    useEffect(() => {
        async function dadosPlants(){
            const response = await api.get('/plantas')
            setPlantas(response.data);
            console.log(response.data);
        }
        dadosPlants();
    }, [])

    async function mapa(){
        const { granted } = await requestForegroundPermissionsAsync();

        if(granted){
         const currentPosition = await getCurrentPositionAsync();
         setLocation(currentPosition);
        }

        watchPositionAsync({
            accuracy: LocationAccuracy.Highest,
            timeInterval: 1000,
            distanceInterval: 1
        }, (response) => {
            console.log("Nova Localização", response);
            setLocation(response);
        });
    }

    function selectedItem(item: PlantasProps){
        console.log(item)
    }
    /*
    const positionMarker = () => {
        setLocation(coordinate);
    }
    */
    //const handleNewMarker = (coordinate) => {
    //    setMarker([...marker, coordinate]);     
    //};

    /*
    async function requestLocation() {
        const { granted } = await requestForegroundPermissionsAsync();

        if(granted){
         const currentPosition = await getCurrentPositionAsync();
         setLocation(currentPosition);
        }
    }
    */

    /*useEffect(() => {
    async function listaEstados(){
        estado

    }

        listaEstados();
    },[]);
    */
   
    /*
    useEffect(() =>{
        requestLocation();
    }, []);

   useEffect(() => {
    watchPositionAsync({
        accuracy: LocationAccuracy.Highest,
        timeInterval: 1000,
        distanceInterval: 1
    }, (response) => {
        console.log("Nova Localização");
        setLocation(response);
    });
   }, []);
   */
/*
   <FlatList 
        data={plantas}
        keyExtractor={item => item.id}
        renderItem={({item}) => <ModalClassPlants{...item}/>}
    >
    </FlatList>
*/

    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.location}>
                <TouchableOpacity style={styles.header} onPress={mapa}>
                    <Feather name='map-pin' size={28} color="#fff"/>
                    <Text style={styles.buttonText}> Escolha sua Localização </Text>
                </TouchableOpacity>
            </View>

            {   location &&
                <MapView style={styles.map}
                initialRegion={{
                    latitude: location.coords.latitude,
                    longitude: location.coords.longitude,
                    latitudeDelta: 0.005,
                    longitudeDelta: 0.005
                }}
                //onPress={(e) => positionMarker(e.nativeEvent.coordinate)}
                showsUserLocation
                loadingEnabled
                mapType="terrain"
                >
                    <Marker
                        tracksViewChanges={false}
                        coordinate={{
                            latitude: location.coords.latitude,
                            longitude: location.coords.longitude
                        }}
                    />

                </MapView>
            }
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    header:{
        flexDirection: 'row',
        marginBottom: 14,
        marginTop: 14,
        alignItems: 'flex-start',
        paddingHorizontal: 12,
        paddingVertical: 0
    },
    location: {
        backgroundColor: '#13a137',
        width: '100%'
    },
    map:{
        flex: 1,
        width: '100%',
        height: '60%'
    },
    container:{
      flex:1,
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      paddingVertical: 0,
      backgroundColor: '#fff',
      flexDirection: 'column'  
    },
    text:{
        fontSize: 18,
        fontWeight: 'bold',
        color: '#050505'
    },
    title:{
        fontSize: 18,
        fontWeight: 'bold',
        color: '#050505'
    },
    input:{
        width: '100%',  
        height: 60,
        backgroundColor: '#',
        borderRadius: 8,
        paddingHorizontal: 14,
        textAlign: 'center',
        fontSize: 24,
        color: '#fff'
    },
    button:{
        width: '95%',
        height: 90,
        backgroundColor: '#efeeee',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText:{
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
        justifyContent: 'flex-start',
        paddingHorizontal: 0
    },
    list:{

    }
})