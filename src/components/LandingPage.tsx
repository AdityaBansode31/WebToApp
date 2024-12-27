import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const LandingPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Creat0</Text>
      <Text style={styles.subtitle}>Discover, Explore, Connect</Text>
      <View style={styles.buttonContainer}>
        <Button 
          title="Login" 
          onPress={() => navigation.navigate('Login')} 
          color="#4B0082" 
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button 
          title="Sign Up" 
          onPress={() => navigation.navigate('SignUp')} 
          color="#4B0082" 
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F8F8F8',
    padding: 20,
  },
  title: {
    fontSize: 40,
    fontWeight: '600',
    color: '#4B0082',
    marginBottom: 15,
  },
  subtitle: {
    fontSize: 18,
    color: '#555',
    marginBottom: 40,
    textAlign: 'center',
  },
  buttonContainer: {
    width: '80%',
    marginBottom: 20,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#4B0082',
    paddingVertical: 12,
  },
});

export default LandingPage;
