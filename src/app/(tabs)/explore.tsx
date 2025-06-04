import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

const frasesReciclagem = [
  'Reciclar é um ato de amor ao planeta.',
  'O futuro depende das escolhas que fazemos hoje.',
  'Separar o lixo é um pequeno gesto que faz grande diferença.',
  'Reduza, Reutilize, Recicle!',
  'Cada embalagem reciclada é um respiro a mais para a Terra.',
];

const noticias = [
  {
    titulo: 'Desmatamento na Amazônia atinge novo recorde',
    resumo: 'Segundo dados do INPE, o desmatamento na Amazônia aumentou 22% em 2024, ameaçando a biodiversidade e o equilíbrio climático.',
  },
  {
    titulo: 'Oceano recebe 8 milhões de toneladas de plástico por ano',
    resumo: 'Estudo internacional alerta para o impacto do plástico na vida marinha e na saúde humana.',
  },
  {
    titulo: 'Brasil recicla apenas 4% do lixo produzido',
    resumo: 'A baixa taxa de reciclagem mostra a necessidade de mais conscientização e políticas públicas.',
  },
];

export default function ReciclagemScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>♻️ Saiba como Reciclar</Text>
    
      {frasesReciclagem.map((frase, idx) => (
        <Text style={styles.frase} key={idx}>
          “{frase}”
        </Text>
      ))}
      <Text style={styles.sectionTitle}>Notícias sobre o planeta</Text>
      {noticias.map((noticia, idx) => (
        <View style={styles.noticiaBox} key={idx}>
          <Text style={styles.noticiaTitulo}>{noticia.titulo}</Text>
          <Text style={styles.noticiaResumo}>{noticia.resumo}</Text>
        </View>
      ))}
      <Text style={styles.dicaExtra}>
        🌱 Dica: Procure pontos de coleta seletiva na sua cidade e incentive amigos e familiares a reciclar também!
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0fdf4',
  },
  content: {
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2e7d32',
    marginBottom: 18,
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#388e3c',
    marginTop: 18,
    marginBottom: 8,
    textAlign: 'center',
  },
  frase: {
    fontSize: 16,
    fontStyle: 'italic',
    color: '#1b4332',
    marginBottom: 8,
    textAlign: 'center',
  },
  noticiaBox: {
    backgroundColor: '#e0f2f1',
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    width: '100%',
  },
  noticiaTitulo: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#00695c',
    marginBottom: 4,
  },
  noticiaResumo: {
    fontSize: 15,
    color: '#333',
  },
  dicaExtra: {
    marginTop: 24,
    fontSize: 16,
    color: '#2e7d32',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
