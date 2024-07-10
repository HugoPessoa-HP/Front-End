import React , { useState , useEffect} from 'react';

import { View, Text, StyleSheet, TouchableOpacity, Dimensions, ScrollView , Modal} from 'react-native';
import { Feather } from '@expo/vector-icons'
import { CategoryProps } from '../../screens/ClassificacaoScreen'; 
import { ModalClassKey } from '../ModalClassKey';
export interface ClassProps{
    id: string;
    opcao: string;
    nome: string;
}

interface ModalClass {
    handleCloseModal: () => void;
    selectedItem: (item: CategoryProps) => void;
}

const { width: WIDTH , height: HEIGHT } = Dimensions.get('window');

export function ModalClass({ handleCloseModal, selectedItem }: ModalClass){

    const [ save, setSaveVisible ] = useState(false);
    const [ category, setCategory ] = useState<CategoryProps | undefined>()

    const [ class1, setClass1 ] = useState<ClassProps[] | []>([]);
    const [ class1Selected, setSelectedClass1] = useState<ClassProps | undefined>();
    const [ class1Visible, setClass1Visible ] = useState(false);

    const [ class2, setClass2 ] = useState<ClassProps[] | []>([]);
    const [ class2Selected, setSelectedClass2 ] = useState<ClassProps | undefined>();
    const [ class2Visible, setClass2Visible ] = useState(false);

    const [ class3, setClass3 ] = useState<ClassProps[] | []>([]);
    const [ class3Selected, setSelectedClass3 ] = useState<ClassProps | undefined>();
    const [ class3Visible, setClass3Visible ] = useState(false);

    const [ class4, setClass4 ] = useState<ClassProps[] | []>([]);
    const [ class4Selected, setSelectedClass4 ] = useState<ClassProps | undefined>();
    const [ class4Visible, setClass4Visible ] = useState(false);

    const [ modalClass1, setModalClass1 ] = useState(false);
    const [ modalClass2, setModalClass2 ] = useState(false);
    const [ modalClass3, setModalClass3 ] = useState(false);
    const [ modalClass4, setModalClass4 ] = useState(false);

    useEffect(() => {
        const resp1 = [
            {id: '1', opcao: '1A', nome: 'Espécies Nativas (inclui cosmopolitas)' },
            {id: '2', opcao: '1B', nome: 'Espécies Exóticas' }
        ]
        setClass1(resp1);
        setClass1Visible(true);
        setClass2Visible(false);
        setClass3Visible(false);
        setClass4Visible(false);
    }, []);

    useEffect(() => {
        if(class1Selected?.id === '1'){
        const resp1 = [
            {id: '1', opcao: '2A', nome: 'Não forma populações puras ao ponto de inibir a regeneração de outras espécies de plantas nativas ' },
            {id: '2', opcao: '2B', nome: 'Alienígena (não indígena, não nativa, exótica). Espécies ExóticasForma populações puras ou domina a comunidade ao ponto de inibir a regeneração de outras espécies de plantas nativas, especialmente em locais degradados ' },
            ]
            setClass2(resp1);
            setClass1Visible(false);
            setClass2Visible(true);
            setClass3Visible(false);
            setClass4Visible(false);
        } else if(class1Selected?.id === '2'){
            const resp1 = [
            {id: '3', opcao: '3A', nome: 'Não forma populações puras ao ponto de inibir a regeneração de outras espécies de plantas nativas ' },
            {id: '4', opcao: '3B', nome: 'Formas populações sustentáveis sem ajuda humana (plantas naturalizadas)' },
            ]
            setClass2(resp1);
            setClass1Visible(false);
            setClass2Visible(true);
            setClass3Visible(false);
            setClass4Visible(false);
        }
        
    }, [class1Selected]);

    useEffect(() => {
        if(class2Selected?.id === '1'){
            setCategory({categoria: 'Nativa não agressiva'});
            setClass1Visible(false);
            setClass2Visible(true);
            setClass3Visible(false);
            setClass4Visible(false);
            setSaveVisible(true);
        } else if (class2Selected?.id === '2'){
            setCategory({categoria: 'Nativa dominante'});
            setClass1Visible(false);
            setClass2Visible(true);
            setClass3Visible(false);
            setClass4Visible(false);
            setSaveVisible(true);
        } else if(class2Selected?.id === '3'){
            setCategory({categoria: 'Exótica ocasional'});
            setClass1Visible(false);
            setClass2Visible(true);
            setClass3Visible(false);
            setClass4Visible(false);
            setSaveVisible(true);
        } else if (class2Selected?.id === '4'){
            const resp = [
                {id: '1', opcao: '4A', nome: 'Não se estabelece em ecossistemas naturais não perturbados, espalhando-se apenas em áreas degradadas ou antropizadas (ruderal)' },
                {id: '2', opcao: '4B', nome: 'Estabelece-se em ecossistemas naturais não perturbados' },
                ]
                setClass1Visible(false);
                setClass2Visible(false);
                setClass3Visible(true);
                setClass4Visible(false);
                setClass3(resp);
        }
    }, [class2Selected]);

    useEffect(() => {
        if(class3Selected?.id === '1'){
            const resp = [
                {id: '1', opcao: '5A', nome: 'Não forma populações puras, não inibindo a regeneração de espécies de plantas nativas' },
                {id: '2', opcao: '5B', nome: ' Forma populações puras ou domina a comunidade, inibindo a regeneração de espécies de plantas nativas' },
                ]
                setClass1Visible(false);
                setClass2Visible(false);
                setClass3Visible(false);
                setClass4Visible(true);
                setClass4(resp);
        } else if (class3Selected?.id === '2'){
            const resp = [
                {id: '3', opcao: '6A', nome: 'Não se espalha nem altera a composição ou estrutura da comunidade de plantas nativas' },
                {id: '4', opcao: '6B', nome: 'Se espalha e altera a composição ou estrutura da comunidade de plantas nativas, suprimindo a regeneração de espécies nativas' },
            ]
                setClass1Visible(false);
                setClass2Visible(false);
                setClass3Visible(false);
                setClass4Visible(true);
                setClass4(resp);
        }
    }, [class3Selected]);

    useEffect(() => {
        if(class4Selected?.id === '1'){
            setCategory({ categoria: 'Ruderal não dominante' })
            setClass1Visible(false);
            setClass2Visible(false);
            setClass3Visible(false);
            setClass4Visible(true);
            setSaveVisible(true);
        } else if ( class4Selected?.id === '2' ){
            setCategory({categoria: 'Ruderal dominante'})
            setClass1Visible(false);
            setClass2Visible(false);
            setClass3Visible(false);
            setClass4Visible(true);
            setSaveVisible(true);
        } else if ( class4Selected?.id === '3' ){
            setCategory({ categoria: 'Invasor não dominante' })
            setClass1Visible(false);
            setClass2Visible(false);
            setClass3Visible(false);
            setClass4Visible(true);
            setSaveVisible(true);
        } else if ( class4Selected?.id === '4' ){
            setCategory({ categoria: 'Invasor dominante' })
            setClass1Visible(false);
            setClass2Visible(false);
            setClass3Visible(false);
            setClass4Visible(true);
            setSaveVisible(true);
        }
    }, [class4Selected])

    function Class1Options(item: ClassProps){
        setSelectedClass1(item);
        setClass1([]);
    }

    function Class2Options(item: ClassProps){
        setSelectedClass2(item);
    }

    function Class3Options(item: ClassProps){
        setSelectedClass3(item);
    }

    function Class4Options(item: ClassProps){
        setSelectedClass4(item);
    }

    function onPressItem(item: ClassProps){
        console.log(item);
        setTimeout(handleCloseModal, 0);
    }

    function salvar(item: CategoryProps){
        
        setTimeout(handleCloseModal, 600);
    }

    function fechar(){
        setCategory(category);
        setTimeout(handleCloseModal, 600);
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
            <Text style={styles.textClass}> Classificação </Text>
                <View style={styles.context}>
                    { class1Visible ? (
                        <ModalClassKey
                            options={class1}
                            handleCloseModal={ () =>  setModalClass1(false)}
                            selectedItem={ Class1Options }
                        />
                        ) : (
                            <Text>  </Text>
                        )
                    }
                    { class2Visible ? ( 
                        <ModalClassKey
                            options={class2}
                            handleCloseModal={ () =>  setModalClass1(false)}
                            selectedItem={ Class2Options }
                        />
                        ) : ( 
                        <Text>  </Text>
                        )
                    }
                    { class3Visible ? ( 
                        <ModalClassKey
                            options={class3}
                            handleCloseModal={ () =>  setModalClass3(false)}
                            selectedItem={ Class3Options }
                        />
                        ) : ( 
                        <Text>  </Text>
                        )
                    }
                    { class4Visible ? ( 
                        <ModalClassKey
                            options={class4}
                            handleCloseModal={ () =>  setModalClass4(false)}
                            selectedItem={ Class4Options }
                        />
                        ) : ( 
                        <Text>  </Text>
                        )
                    }
                </View>
                { !category ? (
                    <Text style={styles.text}>  </Text>
                ) : (
                    <Text style={styles.text}> Categoria: {category.categoria} </Text>
                )
                }
                <TouchableOpacity style={[styles.button, { opacity: category === undefined ? 0.4 : 1}]} onPress={() => fechar()}>
                    <View style={styles.actionsPlus}>
                        <Feather name='save' size={22} color="#fff"/>
                        <Text style={styles.buttonText}> Salvar </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button2} onPress={fechar}>
                    <View style={styles.actionsPlus}>
                        <Text style={styles.buttonText}> Fechar </Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
    },
    content: {
        width: WIDTH - 30,
        marginLeft: 15,
        marginBottom: 20,
        height: HEIGHT - 160,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#0f0f0f',
        borderRadius: 18,
    },
    context:{
        width: "90%",
        marginLeft: 16,
        backgroundColor: '#fff',
        borderRadius: 10,
        height: 1
    },
    textClass:{
        marginHorizontal:12,
        marginVertical: 25,
        marginBottom: 15,
        fontSize: 26,
        color: '#0f0f0f',
        fontWeight: 'bold',
        alignItems: 'flex-start'
    },
    text:{
        marginStart: 65,
        marginTop: 370,
        fontSize: 15,
        alignItems: 'center',
        justifyContent: 'center',
        fontStyle: 'italic'
    },
    button:{
        marginHorizontal: 17,
        width: "90%",
        height: 40,
        backgroundColor: '#429e59',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,
        marginEnd: 15,
        marginVertical: 15
    },
    button2:{
        marginHorizontal: 17,
        width: "90%",
        height: 40,
        backgroundColor: '#5f5f5f',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText:{
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff'
    },
    actionsPlus:{
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
})