import React, { useContext, useEffect, useState } from 'react'
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native'
import { AuthContext } from '../../contexts/context'
import { SafeAreaView } from 'react-native-safe-area-context'

import { useNavigation } from '@react-navigation/native';
import { requestForegroundPermissionsAsync , 
         getCurrentPositionAsync , 
         LocationObject ,
         watchPositionAsync, 
         LocationAccuracy} from 'expo-location';
import MapView from 'react-native-maps';

import { api } from '../../services/API';
import { Marker } from 'react-native-maps';

type PlantasProps = {
    id: string;
    vernaculo1: string;
    vernaculo2: string;
    vernaculo3: string;
    nome_Cientifico: string;
    familia: string;
    origem: string;
    habito: string;
}

export default function Principal(){
    const { logout } = useContext(AuthContext);
    const [location, setLocation] = useState<LocationObject | null>(null);
    const [planta, setPlanta] = useState<PlantasProps[] | []>([]);
    const [numeroPlantas, setNumeroPlantas] = useState();
    //const [ familias, setPlanta ] = useState();
    //var arrayFamilias = [];
    //var arrayHabitos = [];
    //var arrayOrigens = [];

    async function requestLocation() {
        const { granted } = await requestForegroundPermissionsAsync();

        if(granted){
         const currentPosition = await getCurrentPositionAsync();
         setLocation(currentPosition);
        }
    }

    useEffect(() => {
    async function listaPlantas(){

        const plantas = await api.get('/plantas');
        const dataPlantas = await plantas.data;
        const lengthDataPlantas = dataPlantas.length;
        setNumeroPlantas(lengthDataPlantas);
        setPlanta(dataPlantas);
        
        /*
        var i;
        for(i = 0; i < lengthData; i++){
            const familia = await data[i].familia;
            const habito = await data[i].habito;
            const origem = await data[i].origem;
            
            if((familia == null) || (familia == undefined) || (familia == '')){
                var nomeFamilia = "Não informou Familia";
            } else {
                var nomeFamilia = JSON.stringify(familia);
            }
            await arrayFamilias.push(nomeFamilia);
            console.log(nomeFamilia);

            if((habito == null) || (habito == undefined) || (habito == '')){
                var nomeHabito = "Não informou Hábito";
            } else {
                var nomeHabito = JSON.stringify(habito);
            }
            //await setPlanta(nomesFamilias);
            await arrayHabitos.push(nomeHabito);
            console.log(nomeHabito);

            if((origem == null) || (origem == undefined) || (origem == '')){
                var nomeOrigem = "Não informou Familia";
            } else {
                var nomeOrigem = JSON.stringify(origem);
            }
            await arrayOrigens.push(nomeOrigem);
            console.log(nomeOrigem);
            
        }

        return data;
        */
        }
        listaPlantas();
    }, []);

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

    return(
        <SafeAreaView style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={logout}>
                <Text style={styles.buttonText}> {planta[0]?.familia} </Text>
                <Text style={styles.buttonText}> {planta[0]?.habito} </Text>
                <Text style={styles.buttonText}> {planta[0]?.origem} </Text>
                <Text style={styles.buttonText}> {planta[0]?.nome_Cientifico} </Text>
            </TouchableOpacity>

            {   location &&
                <MapView style={styles.map}
                initialRegion={{
                    latitude: location.coords.latitude,
                    longitude: location.coords.longitude,
                    latitudeDelta: 0.005,
                    longitudeDelta: 0.005
                }}>
                    <Marker
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
    map:{
        flex: 1,
        width: '100%',
        height: '60%'
    },
    container:{
      flex:1,
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      paddingVertical: 14,
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
        color: '#050505',
        justifyContent: 'flex-start'
    }
})