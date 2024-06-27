// screens/LocaisScreen.js
import React from 'react';
import { View, Text, FlatList, TouchableOpacity, TextInput, StyleSheet } from 'react-native';

const locais = [
  { id: '1', nome: 'Floresta da Tijuca', cidade: 'Rio de Janeiro', estado: 'RJ' },
  { id: '2', nome: 'Parque', cidade: 'São Paulo', estado: 'SP' },
  // Adicione mais locais conforme necessário
];

const Principal = ({ navigation }) => {
  const [search, setSearch] = React.useState('');
  const [filteredLocais, setFilteredLocais] = React.useState(locais);

  const handleSearch = (text) => {
    setSearch(text);
    setFilteredLocais(locais.filter(local => local.nome.toLowerCase().includes(text.toLowerCase())));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.baseText}>
        <Text style={styles.titleText}>
            Locais
        </Text>
      </Text>
      <TextInput
        placeholder="Pesquise pelo nome do local..."
        value={search}
        onChangeText={handleSearch}
        style={styles.input}
      />
      <FlatList
        data={filteredLocais}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('Local', { local: item })}>
            <View style={{ padding: 10 }}>
              <Text style={styles.smallTitle}>{item.nome}</Text>
              <Text>{item.cidade}, {item.estado}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    baseText: {
        padding: 10,
    },
    titleText: {
        fontSize: 28,
        fontWeight: 'bold',
    },
    smallTitle: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    input: {
        margin: 10,
        height: 40,
        borderWidth: 1,
        borderRadius: 6,
        fontSize: 16,
        textAlign: 'center',
        backgroundColor: 'lightgrey'
    }
});


export default Principal;
