import React, { useState } from 'react';
import { FlatList, KeyboardAvoidingView, Platform, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { info } from '../../constants/dicasData';
import { styles } from './dicas.styles'; // Importa os estilos externalizados
// Importa os dados externalizados (assumindo alias @/ para src/)

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
        data={info} // Usa os dados importados
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

