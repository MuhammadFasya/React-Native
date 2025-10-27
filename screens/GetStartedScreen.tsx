import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const GetStartedScreen: React.FC<{ navigation?: any }> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Get Started</Text>
      <TouchableOpacity onPress={() => navigation?.navigate?.('HomeMain')}>
        <Text>Go to Home</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  title: { fontSize: 24, fontWeight: '700' },
});

export default GetStartedScreen;
