import React from 'react';

import { View, Text, StyleSheet, TouchableOpacity, Dimensions, ScrollView} from 'react-native';
import { ClassProps } from '../../pages/Chave_Dicotomica';
import { Feather } from '@expo/vector-icons'
import { Class1Props } from '../../screens/ClassificacaoScreen';
 
interface ModalClass {
    options: Class1Props[];
    handleCloseModal: () => void;
    selectedItem: (item: Class1Props) => void;
}

const { width: WIDTH , height: HEIGHT } = Dimensions.get('window');

export function ModalClass({options, handleCloseModal, selectedItem }: ModalClass){

    function onPressItem(item: Class1Props){    
        selectedItem(item);
        console.log(item);
        
        setTimeout(handleCloseModal, 800);
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
        <View style={styles.container}>
            <View style={styles.content}>
            { options.map((item, index) => (
                <View style={styles.class} key={index}>
                    <View style={styles.inputNumber}>
                        <Text style={{color: '#fff'}}> {item.opcao} </Text>
                    </View>
                    <View style={styles.inputText}>
                        <Text> {item.nome} </Text>
                    </View>
                    <TouchableOpacity style={styles.inputSelection} onPress={ () => onPressItem(item)}>
                        <Feather name='circle' size={18} color="#000"/>
                    </TouchableOpacity>
                </View>
                )) }
            </View>
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
        marginLeft: 5,
        marginBottom: 20,
        height: 202,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#8a8a8a',
        borderRadius: 8,
        alignItems: 'center'
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
    },
    align:{
        marginBottom: 10
    },
    classUP:{
        justifyContent: 'space-evenly',
        marginTop: 14,
        marginBottom: 26
    },
    class:{
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        alignContent: 'center'
    },
    inputNumber:{
        width: '13%',
        height: 100,
        backgroundColor: '#5f5f5f',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputText:{
        width: '80%',
        height: 100,
        backgroundColor: '#f0f0f0',
        borderBottomColor: '#050505',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputSelection:{
        width: '7%',
        height: 100,
        backgroundColor: '#f0f0f0',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center'
    },
})