import React , { useState , useEffect} from 'react';

import { View, Text, StyleSheet, TouchableOpacity, Dimensions, ScrollView} from 'react-native';
import { Feather } from '@expo/vector-icons'
import { ClassProps } from '../ModalClass';
import { CategoryProps } from '../../screens/ClassificacaoScreen';
 
interface ModalClass {
    options: ClassProps[];
    handleCloseModal: () => void;
    selectedItem: (item: ClassProps) => void;
}

export function ModalClassKey({options, handleCloseModal, selectedItem }: ModalClass){

    function onPressItem(item: ClassProps){
        selectedItem(item);
        setTimeout(handleCloseModal, 0);
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
        <View style={styles.content}>
            { options.flatMap((item, index) => (
                <View style={styles.class} key={index}>
                    <View style={styles.inputNumber}>
                        <Text style={{color: '#fff'}}> {item.opcao} </Text>
                    </View>
                    <View style={styles.inputText}>
                        <Text> {item.nome} </Text>
                    </View>
                    <TouchableOpacity style={styles.inputSelection} onPress={() => onPressItem(item)}>
                        <Feather name='circle' size={18} color="#000"/>
                    </TouchableOpacity>
                </View>
                )) }
            </View>
    )
}

const styles = StyleSheet.create({
    content: {
        width: "100%",
        backgroundColor: '#fff',
    },
    class:{
        backgroundColor: '#f0f0f0',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        alignContent: 'center',
        borderWidth: 1,
        borderColor: '#0f0f0f',
        borderRadius: 8,
        marginVertical: 10,
        height: 160
    },
    inputNumber:{
        width: '13%',
        backgroundColor: '#5f5f5f',
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputText:{
        width: '78%',
        backgroundColor: '#f0f0f0',
        borderBottomColor: '#050505',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputSelection:{
        width: '9%',
        backgroundColor: '#f0f0f0',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center'
    },
})