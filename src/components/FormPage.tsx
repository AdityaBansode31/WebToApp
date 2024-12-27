import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const FormPage = ({ navigation }) => {
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [pincode, setPincode] = useState('');
  const [empId, setEmpId] = useState('');

  const handleSubmit = () => {
    // Log the form data
    console.log('Name:', name);
    console.log('DOB:', dob);
    console.log('Pincode:', pincode);
    console.log('Employee ID:', empId);
    
    // Navigate back to HomePage after submission
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Fill in Your Details</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
        placeholderTextColor="#aaa"
      />
      <TextInput
        style={styles.input}
        placeholder="Date of Birth (YYYY-MM-DD)"
        value={dob}
        onChangeText={setDob}
        placeholderTextColor="#aaa"
      />
      <TextInput
        style={styles.input}
        placeholder="Pincode"
        value={pincode}
        onChangeText={setPincode}
        placeholderTextColor="#aaa"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Employee ID"
        value={empId}
        onChangeText={setEmpId}
        placeholderTextColor="#aaa"
        keyboardType="numeric"
      />
      <Button 
        title="Submit" 
        onPress={handleSubmit} 
        color="#4B0082"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF8E1',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#4B0082',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 45,
    borderColor: '#BDBDBD',
    borderWidth: 1.5,
    marginBottom: 15,
    paddingLeft: 10,
    borderRadius: 8,
    color: '#333',
    backgroundColor: '#fff',
  },
});

export default FormPage;
