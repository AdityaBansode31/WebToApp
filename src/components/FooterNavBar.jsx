// src/components/FooterNavBar.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';  // for navigation handling

const FooterNavBar = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.footerNavBar}>
      <TouchableOpacity
        style={styles.navButton}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.navButtonText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.navButton}
        onPress={() => navigation.navigate('Feed')}
      >
        <Text style={styles.navButtonText}>Feed</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.navButton}
        onPress={() => navigation.navigate('Search')}
      >
        <Text style={styles.navButtonText}>Search</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.navButton}
        onPress={() => navigation.navigate('Profile')}
      >
        <Text style={styles.navButtonText}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footerNavBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 60,
    backgroundColor: '#004A8F',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 10,
  },
  navButton: {
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  navButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default FooterNavBar;
