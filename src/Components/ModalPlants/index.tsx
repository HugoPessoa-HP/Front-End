import React from 'react';
import { View, Text, StyleSheet, Dimensions} from 'react-native';
import { PlantasProps } from '../../pages/Principal';

const { width: WIDTH , height: HEIGHT } = Dimensions.get('window');

export function ModalClassPlants({ id , nome_Cientifico , familia , vernaculo1, vernaculo2 , 
                                   origem , habito, trilha_id, categoria}: PlantasProps){

    function onPressItem(item: PlantasProps){     
        console.log(item);
    }

    return(
       <View style={styles.content}>
            <Text style={styles.item}> {categoria}</Text>
            <Text style={styles.item}> {nome_Cientifico}</Text>
       </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center'
    },
    content: {
        width: WIDTH - 40,
        marginLeft: 20,
        marginBottom: 20,
        height: HEIGHT / 3,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#8a8a8a',
        borderRadius: 4
    },
    optionStyle: {
        alignItems: 'flex-start',
        borderTopWidth: 0.8,
        borderTopColor: '#8a8a8a'
    },
    item:{
        margin: 16,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#101026'
    }
})