import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

const HomeScreen = ({ navigation }: any) => {
  return (
    <ImageBackground
      source={require('../assets/lb.jpeg')}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <View style={styles.content}>
          <Text style={styles.title}>Your Next Adventure Starts Here</Text>
          <Text style={styles.subtitle}>
            Life is too short to stay in one place. Find your next favorite
            city, beach, or mountain and let's get moving!
          </Text>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('LabuanBajoDetail')}
          >
            <Text style={styles.buttonText}>Start Exploring</Text>
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
    backgroundColor: '#42E0D1',
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

export default HomeScreen;
