import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const FooterNavigation = () => (
  <View style={styles.footer}>
    <TouchableOpacity>
      <Icon name="home" size={24} color="white" />
      <Text style={styles.label}>Home</Text>
    </TouchableOpacity>
    <TouchableOpacity>
      <Icon name="search" size={24} color="white" />
      <Text style={styles.label}>Search</Text>
    </TouchableOpacity>
    <TouchableOpacity>
      <Icon name="user" size={24} color="white" />
      <Text style={styles.label}>Profile</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  footer: { flexDirection: 'row', justifyContent: 'space-around', padding: 10, backgroundColor: '#1E90FF' },
  label: { color: 'white', fontSize: 12, marginTop: 3 },
});

export default FooterNavigation;
