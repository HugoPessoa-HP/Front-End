import React from 'react';

import { View, Text, StyleSheet, TouchableOpacity, Dimensions, ScrollView} from 'react-native';
//import { ClassProps } from '../../pages/Chave_Dicotomica';
import { LocalProps, PlantaProps, TrilhaProps } from '../../pages/Classificacao';
 
interface ModalLocalCategory {
    options: LocalProps[];
    handleCloseModal: () => void;
    selectedItem: (item: LocalProps) => void;
}

const { width: WIDTH , height: HEIGHT } = Dimensions.get('window');

export function ModalClassLocal({options, handleCloseModal, selectedItem}: ModalLocalCategory){

    function onPressItem(item: LocalProps){     
        console.log(item);
        selectedItem(item);
        handleCloseModal();
    }

    /*
    const option = options.map((item, index) => {
        <TouchableOpacity key={index} style={styles.optionStyle} onPress={ () => onPressItem(item)}>
            <Text style={styles.item}>
                {item?.nome}
            </Text>
        </TouchableOpacity>
    })
    */

    return(
        <TouchableOpacity style={styles.container} onPress={handleCloseModal}>
            <View style={styles.content}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    { options.map((item, index) => (
                        <TouchableOpacity key={index} style={styles.optionStyle} onPress={ () => onPressItem(item)}> 
                            <Text style={styles.item}>
                                {item.name_Local} 
                            </Text>
                        </TouchableOpacity>
                    )) }
                </ScrollView>
            </View>
        </TouchableOpacity>
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