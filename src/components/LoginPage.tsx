import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';

const LoginPage = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Email:', email, 'Password:', password);
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        placeholderTextColor="#aaa"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        placeholderTextColor="#aaa"
      />
      <Button 
        title="Login" 
        onPress={handleLogin} 
        color="#4B0082"
      />
      <View style={styles.footer}>
        <Text style={styles.footerText}>Don't have an account?</Text>
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
    backgroundColor: '#F1F1F1',
    padding: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: '600',
    color: '#4B0082',
    marginBottom: 30,
  },
  input: {
    width: '100%',
    height: 45,
    borderColor: '#BDBDBD',
    borderWidth: 1.5,
    marginBottom: 20,
    paddingLeft: 10,
    borderRadius: 8,
    color: '#333',
    backgroundColor: '#fff',
  },
  footer: {
    marginTop: 20,
    alignItems: 'center',
  },
  footerText: {
    color: '#555',
    marginBottom: 10,
  },
});

export default LoginPage;
