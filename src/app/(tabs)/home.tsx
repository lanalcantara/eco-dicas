import { useRouter } from 'expo-router';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './home.styles'; // Importa os estilos externalizados

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🌎 Bem-vindo ao Eco Dicas!</Text>
      <Text style={styles.subtitle}>Descubra como salvar o meio ambiente pouco a pouco.</Text>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.sectionButton} onPress={() => router.push('/explore')}> // Ajustar rotas se necessário após mover para src
          <Text style={styles.sectionButtonText}>Saiba como Reciclar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sectionButton} onPress={() => router.push('/dicas')}> // Ajustar rotas se necessário
          <Text style={styles.sectionButtonText}>Como Ajudar o Meio Ambiente</Text>
        </TouchableOpacity>
       
      </View>
    </View>
  );
}

