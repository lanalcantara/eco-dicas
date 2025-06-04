import { useRouter } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🌎 Bem-vindo ao Eco Dicas!</Text>
      <Text style={styles.subtitle}>Descubra como salvar o meio ambiente pouco a pouco.</Text>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.sectionButton} onPress={() => router.push('/explore')}>
          <Text style={styles.sectionButtonText}>Saiba como Reciclar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sectionButton} onPress={() => router.push('/dicas')}>
          <Text style={styles.sectionButtonText}>Como Ajudar o Meio Ambiente</Text>
        </TouchableOpacity>
       
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0fdf4',
    padding: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2e7d32',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: '#388e3c',
    marginBottom: 32,
    textAlign: 'center',
    maxWidth: 320,
  },
  buttonsContainer: {
    width: '100%',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#388e3c',
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 8,
    marginBottom: 18,
    width: '90%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  sectionButton: {
    backgroundColor: '#c8e6c9',
    paddingVertical: 12,
    paddingHorizontal: 28,
    borderRadius: 8,
    marginBottom: 10,
    width: '90%',
    alignItems: 'center',
  },
  sectionButtonText: {
    color: '#2e7d32',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
