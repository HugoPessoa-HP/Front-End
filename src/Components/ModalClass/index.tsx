import React from 'react';

import { View, Text, StyleSheet, TouchableOpacity, Dimensions, ScrollView} from 'react-native';
import { ClassProps } from '../../pages/Chave_Dicotomica';

interface ModalClassCategory {
    options: ClassProps[];
    handleCloseModal: () => void;
    selectedItem: (item: ClassProps) => void;
}

const { width: WIDTH , height: HEIGTH } = Dimensions.get('window');

export function ModalClass({options, handleCloseModal, selectedItem}: ModalClassCategory){

    function onPressItem(item: ClassProps){
        //console.log(item)
        selectedItem(item);
        handleCloseModal();
    }

    const option = options.map((item, index) => {
        <TouchableOpacity key={index} style={styles.optionStyle} onPress={ () => onPressItem(item)}>
            <Text style={styles.item}>
                {item?.class}
            </Text>
        </TouchableOpacity>
    })

    return(
        <TouchableOpacity style={styles.container} onPress={handleCloseModal}>
            <View style={styles.content}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    {option}
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
        width: WIDTH - 20,
        height: HEIGTH / 2,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#8a8a8a',
        borderRadius: 4
    },
    optionStyle: {
        alignItems: 'flex-start',
        borderTopWidth: 1
        
    },
    item:{
        margin: 16,
        fontSize: 16,
        fontWeight: 'bold',
    }
})