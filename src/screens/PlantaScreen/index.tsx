import React from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';

const PlantaScreen = ({ route }) => {
  const { planta } = route.params;

  if (!planta) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/images/planta.png')} style={{ height: 150 }} />

      <View style={styles.section}>
        <Text style={styles.title}>{planta.nome}</Text>
        <Text style={styles.address}>
          {planta.cidade}, {planta.estado}
        </Text>
        <Text style={styles.description}>{planta.descricao}</Text>
      </View>

      <Image source={require('../../assets/images/planta-mapa.png')} style={{ height: 80 }} />

      <View style={styles.section}>
        <Text style={styles.classificationSectionTitle}>{planta.classificacao}</Text>
        <Text>{planta.descricaoClasificacao}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subsectionTitle}>Ações</Text>
        <Text> • Ações relacionadas à classificação da planta.</Text>
      </View>

      <View style={styles.actions}>
        <Button
          title="Refazer Classificação"
          color="#8A8A8A"
          accessibilityLabel="Refazer Classificação"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  description: {
    marginBottom: 5,
    marginRight: 5,
  },
  address: {
    fontSize: 12,
    marginBottom: 10,
  },
  section: {
    padding: 10,
    marginLeft: 10,
  },
  classificationSectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'red',
  },
  subsectionTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 5,
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    height: 40,
  },
});

export default PlantaScreen;
