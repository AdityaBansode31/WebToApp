// src/components/FooterMenu.js
import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const FooterMenu = ({ navigation }) => {
  return (
    <View style={styles.footer}>
      <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate('Home')}>
        <Icon name="home-outline" size={30} color="#004A8F" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconContainer} onPress={() => alert('Search clicked!')}>
        <Icon name="search-outline" size={30} color="#004A8F" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconContainer} onPress={() => alert('Profile clicked!')}>
        <Icon name="person-outline" size={30} color="#004A8F" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconContainer} onPress={() => alert('Settings clicked!')}>
        <Icon name="settings-outline" size={30} color="#004A8F" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    height: 60,
    borderTopWidth: 1,
    borderTopColor: '#E5E5E5',
  },
  iconContainer: {
    alignItems: 'center',
  },
});

export default FooterMenu;
