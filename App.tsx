import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

const App = () => {
  return (
    <ImageBackground
      source={require('./assets/koi.jpg')}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <View style={styles.content}>
          <Text style={styles.title}>Find Your Inner Peace</Text>
          <Text style={styles.subtitle}>
            Let every step guide you closer to balance. Embrace the calm and
            flow with life’s journey.
          </Text>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Start Your Journey</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.1)',
    paddingHorizontal: 25,
    paddingVertical: 60,
  },
  content: {
    alignItems: 'flex-start',
  },
  title: {
    fontSize: 28,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'left',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 15,
    color: '#ddd',
    textAlign: 'left',
    marginBottom: 25,
    lineHeight: 22,
  },
  button: {
    backgroundColor: '#b30000',
    paddingVertical: 12,
    paddingHorizontal: 28,
    borderRadius: 30,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default App;
