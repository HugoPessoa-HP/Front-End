import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';

const trilhas = [
  { id: '1', nome: 'Trilha da Praia', cidade: 'Rio de Janeiro', estado: 'RJ', foto: '../../assets/planta.png' },
  { id: '2', nome: 'Trilha da Cachoeira', cidade: 'Rio de Janeiro', estado: 'RJ', foto: '../../assets/planta.png' },
];

const LocalScreen = ({ route, navigation }) => {
  const { local } = route.params;

  return (
    <View style={styles.container}>
      <FlatList
        data={trilhas}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('Trilha', { trilha: item })}>
            <View style={{ flexDirection: 'row', padding: 10 }}>
              <Image source={ require('../../assets/images/trilha.png') } style={{ width: 50, height: 50, borderRadius: 10, }} />
              <View style={{ marginLeft: 10 }}>
                <Text style={ styles.smallTitle }>{item.nome}</Text>
                <Text>{item.cidade}, {item.estado}</Text>
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

export default LocalScreen;
