import React, { useState } from 'react';
import { FlatList, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const info = [
  'Plante árvores e incentive o reflorestamento.',
  'Evite o desperdício de água: feche a torneira ao escovar os dentes.',
  'Desligue aparelhos eletrônicos quando não estiver usando.',
  'Prefira transporte coletivo, bicicleta ou caminhe sempre que possível.',
  'Consuma menos produtos descartáveis e opte por reutilizáveis.',
  'Apoie e divulgue projetos ambientais.',
  'Evite jogar lixo em locais inadequados.',
  'Participe de mutirões de limpeza em praças, praias e rios.',
  'Compre de produtores locais e valorize a agricultura sustentável.',
  'Reduza o consumo de carne e alimentos ultraprocessados.',
];

export default function ComoAjudarScreen() {
  const [userActions, setUserActions] = useState<string[]>([]);
  const [input, setInput] = useState('');

  const addAction = () => {
    if (input.trim()) {
      setUserActions([input.trim(), ...userActions]);
      setInput('');
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <Text style={styles.title}>🌳 Como podemos ajudar o meio ambiente aos poucos?</Text>
      <FlatList
        data={info}
        keyExtractor={(item, idx) => idx.toString()}
        renderItem={({ item }) => <Text style={styles.tip}>• {item}</Text>}
        style={{ marginBottom: 20 }}
      />
      <Text style={styles.subtitle}>Conte algo que você já fez para ajudar o planeta:</Text>
      <View style={styles.inputRow}>
        <TextInput
          style={styles.input}
          placeholder="Ex: Separei o lixo reciclável esta semana"
          value={input}
          onChangeText={setInput}
        />
        <TouchableOpacity style={styles.addButton} onPress={addAction}>
          <Text style={styles.addButtonText}>Adicionar</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={userActions}
        keyExtractor={(item, idx) => `user-${idx}`}
        renderItem={({ item }) => <Text style={styles.userAction}>• {item}</Text>}
        ListEmptyComponent={<Text style={styles.empty}>Nenhuma ação registrada ainda.</Text>}
      />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#f0fdf4' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 16, color: '#2e7d32', textAlign: 'center' },
  tip: { fontSize: 16, marginBottom: 8, color: '#1b4332' },
  subtitle: { fontSize: 17, fontWeight: 'bold', color: '#388e3c', marginBottom: 8, marginTop: 10, textAlign: 'center' },
  inputRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 12 },
  input: { flex: 1, backgroundColor: '#fff', borderRadius: 8, padding: 10, borderWidth: 1, borderColor: '#c8e6c9', marginRight: 8 },
  addButton: { backgroundColor: '#388e3c', borderRadius: 8, paddingVertical: 10, paddingHorizontal: 16 },
  addButtonText: { color: '#fff', fontWeight: 'bold' },
  userAction: { fontSize: 15, color: '#2e7d32', marginBottom: 6, marginLeft: 4 },
  empty: { color: '#888', fontStyle: 'italic', textAlign: 'center', marginTop: 8 },
});
