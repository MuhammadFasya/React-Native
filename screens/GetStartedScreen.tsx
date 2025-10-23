import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

const GetStartedScreen = ({ navigation }: any) => {
  return (
    <ImageBackground
      source={require('../assets/lb.jpeg')}
      style={styles.background}
      resizeMode="cover"
    >
      {/* gelapkan sedikit biar teks lebih kebaca */}
      <View style={styles.overlay}>
        <View style={styles.content}>
          <Text style={styles.title}>Your Next Adventure{'\n'}Starts Here</Text>
          <Text style={styles.subtitle}>
            Life's too short to stay in one place. Find your next favorite city,
            beach, or mountain and let's get moving!
          </Text>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('MainTabs')}
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
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.25)',
    justifyContent: 'flex-end',
    paddingHorizontal: 25,
    paddingBottom: 50,
  },
  content: {
    alignItems: 'flex-start',
  },
  title: {
    fontSize: 30,
    color: '#fff',
    fontWeight: '700',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 14,
    color: '#f0f0f0',
    marginBottom: 30,
    lineHeight: 21,
  },
  button: {
    backgroundColor: '#42E0D1',
    paddingVertical: 13,
    paddingHorizontal: 30,
    borderRadius: 30,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
  },
});

export default GetStartedScreen;
