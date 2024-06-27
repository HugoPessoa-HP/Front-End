import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';

const plantas = [
  { id: '1', nome: 'Samambaia', cidade: 'Rio de Janeiro', estado: 'RJ', descricao: 'As samambaias, ou fetos, são vegetais vasculares membros do táxon das pteridófitas. Elas possuem tecidos vasculares, folhas verdadeiras, se reproduzem através de esporos e não produzem sementes ou flores. A diversificação das samambaias parece ter ocorrido no Devoniano.', classificacao: 'Alienígenas Ocasionais', descricaoClasificacao: 'Não forma populações puras ao ponto de inibir a regeneração de outras espécies de plantas nativas', foto: '../../assets/planta.png' },
  { id: '2', nome: 'Violeta', cidade: 'Rio de Janeiro', estado: 'RJ', descricao: 'Herbácea perene, sem caule aéreo, estolonífera, medindo cerca de 10-15 cm. Folhas em roseta, simples, longo-pecioladas, cordiforme-arredondada, medindo de 3-6 cm de comprimento. Flores perfumadas, de cor violeta-escuras, solitárias sobre um pedúnculo radical.', classificacao: 'Nativa', descricaoClassificacao: 'Forma populações puras ou domina a comunidade ao ponto de inibir a regeneração de outras espécies de plantas nativas, especialmente em locais degradados ', foto: '../../assets/planta.png' },
];

const TrilhaScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={plantas}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('Planta', { planta: item })}>
            <View style={{ flexDirection: 'row', padding: 10 }}>
              <Image source={ require('../../assets/images/planta.png') } style={{ width: 70, height: 70, borderRadius: 10, }} />
              <View style={{ marginLeft: 10 }}>
                <Text style={ styles.smallTitle }>{item.nome}</Text>
                <Text>{item.cidade}, {item.estado}</Text>
                <Text>{item.classificacao}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  smallTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default TrilhaScreen;
