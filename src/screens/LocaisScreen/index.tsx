import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const locais = [
  { id: '1', nome: 'Floresta da Tijuca', cidade: 'Rio de Janeiro', estado: 'RJ' },
  { id: '2', nome: 'Parque Ibirapuera', cidade: 'São Paulo', estado: 'SP' },
];

const LocaisScreen = ({ navigation }) => {
  const [searchVisible, setSearchVisible] = useState(false);
  const [search, setSearch] = useState('');
  const [parametrosBusca, setParametrosBusca] = useState([]);

  const toggleSearch = () => {
    setSearchVisible(!searchVisible);
    setSearch('');
  };

  const handleSearchKeyPress = (event) => {
    if (event.nativeEvent.key === 'Enter') {
      addParametro(search);
    }
  };

  const handleSearch = () => {
    if (parametrosBusca.length === 0) {
      return locais;
    } else {
      return locais.filter(local => {
        return parametrosBusca.some(param => {
          return local.nome.toLowerCase().includes(param.toLowerCase()) ||
                 local.cidade.toLowerCase().includes(param.toLowerCase()) ||
                 local.estado.toLowerCase().includes(param.toLowerCase());
        });
      });
    }
  };

  const addParametro = (param) => {
    if (param && !parametrosBusca.includes(param)) {
      setParametrosBusca([...parametrosBusca, param]);
    }
    setSearch('');
    setSearchVisible(false);
  };

  const removeParametro = (param) => {
    setParametrosBusca(parametrosBusca.filter(p => p !== param));
  };

  const clearAllParametros = () => {
    setParametrosBusca([]);
  };

  return (
    <View style={styles.container}>
      <View styles={styles.searchContainer}>
        <TouchableOpacity onPress={toggleSearch}>
          <MaterialIcons name="search" size={24} color="black" style={styles.icon} />
          </TouchableOpacity>
          {searchVisible && (
            <View style={styles.searchInputContainer}>
              <TextInput
                placeholder="Pesquisar..."
                value={search}
                onChangeText={setSearch}
                onSubmitEditing={() => addParametro(search)}
                onKeyPress={handleSearchKeyPress}
                style={styles.input}
              />
              <TouchableOpacity onPress={() => addParametro(search)}>
                <MaterialIcons name="add" size={24} color="black" style={styles.icon} />
              </TouchableOpacity>
            </View>
          )}
      </View>
      <View style={styles.parametrosContainer}>
        {parametrosBusca.map((param, index) => (
          <TouchableOpacity key={index} onPress={() => removeParametro(param)}>
            <View style={styles.parametroContainer}>
              <Text style={styles.parametro}>{param}</Text>
              <TouchableOpacity onPress={() => removeParametro(param)}>
                <MaterialIcons name="close" size={16} color="black" style={styles.closeIcon} />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        ))}
      </View>
      <FlatList
        data={handleSearch()}
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
    flex: 1,
    padding: 10,
  },
  searchInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  input: {
    flex: 1,
    height: 40,
    borderRadius: 16,
    paddingHorizontal: 10,
    fontSize: 16,
    backgroundColor: 'lightgrey',
  },
  icon: {
    marginLeft: 10,
    padding: 5,
  },
  parametrosContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 10,
  },
  parametroContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'lightblue',
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginHorizontal: 5,
    marginBottom: 5,
  },
  parametro: {
    marginRight: 5,
  },
  closeIcon: {
    marginLeft: 5,
  },
  smallTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default LocaisScreen;
