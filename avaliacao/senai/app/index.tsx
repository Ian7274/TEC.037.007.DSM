import { StyleSheet, Text, View, Pressable } from 'react-native';
import { useRouter } from 'expo-router';

export default function IndexScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Logo - Usando um placeholder visual */}
      <View style={styles.logoContainer}>
        <Text style={styles.logoText}>SENAI</Text>
      </View>

      {/* Texto de Boas-vindas */}
      <Text style={styles.title}>Bem-vindo ao Senai</Text>
      <Text style={styles.subtitle}>
        Explore nossos serviços e conheça mais sobre a instituição
      </Text>

      {/* Botão para Sobre */}
      <Pressable
        style={styles.button}
        onPress={() => router.push('/sobre')}
      >
        <Text style={styles.buttonText}>Sobre</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  logoContainer: {
    width: 280,
    height: 240,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 12,
    marginBottom: 30,
    borderWidth: 2,
    borderColor: '#0a7ea4',
  },
  logoText: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#0a7ea4',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#0a7ea4',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});