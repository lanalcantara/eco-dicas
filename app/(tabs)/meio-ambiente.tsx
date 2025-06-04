import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface EcoTip {
  id: number;
  dica: string;
}

const environmentTips: EcoTip[] = [
  { id: 1, dica: 'Plante uma árvore e incentive o reflorestamento.' },
  { id: 2, dica: 'Evite o desperdício de água: feche a torneira ao escovar os dentes.' },
  { id: 3, dica: 'Desligue aparelhos eletrônicos quando não estiver usando.' },
  { id: 4, dica: 'Prefira transporte coletivo, bicicleta ou caminhe sempre que possível.' },
  { id: 5, dica: 'Consuma menos produtos descartáveis e opte por reutilizáveis.' },
  { id: 6, dica: 'Apoie e divulgue projetos ambientais.' },
  { id: 7, dica: 'Evite jogar lixo em locais inadequados.' },
  { id: 8, dica: 'Participe de mutirões de limpeza em praças, praias e rios.' },
  { id: 9, dica: 'Compre de produtores locais e valorize a agricultura sustentável.' },
  { id: 10, dica: 'Reduza o consumo de carne e alimentos ultraprocessados.' },
];

export default function SalvarMeioAmbienteScreen() {
  const [showTips, setShowTips] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🌳 Dicas para Salvar o Meio Ambiente</Text>
      <TouchableOpacity onPress={() => setShowTips(!showTips)} style={styles.fetchButton}>
        <Text style={styles.fetchButtonText}>{showTips ? 'Ocultar dicas' : 'Ver dicas'}</Text>
      </TouchableOpacity>
      {showTips && (
        <FlatList
          data={environmentTips}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <Text style={styles.tip}>• {item.dica}</Text>}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#f0fdf4' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 16, color: '#2e7d32', textAlign: 'center' },
  tip: { fontSize: 16, marginBottom: 8, color: '#1b4332' },
  fetchButton: {
    marginBottom: 12,
    backgroundColor: '#388e3c',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  fetchButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
