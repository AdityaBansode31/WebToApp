import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Header = () => (
  <View style={styles.header}>
    <Text style={styles.logo}>Sciqus</Text>
    <TextInput style={styles.search} placeholder="Search..." />
    <View style={styles.icons}>
      <Icon name="bell" size={24} color="white" />
      <Icon name="bars" size={24} color="white" style={styles.menuIcon} />
    </View>
  </View>
);

const styles = StyleSheet.create({
  header: { backgroundColor: '#1E90FF', flexDirection: 'row', padding: 10, alignItems: 'center' },
  logo: { color: 'white', fontSize: 20, fontWeight: 'bold', flex: 1 },
  search: { flex: 3, backgroundColor: 'white', padding: 5, borderRadius: 5, marginHorizontal: 10 },
  icons: { flexDirection: 'row', justifyContent: 'space-between' },
  menuIcon: { marginLeft: 10 },
});

export default Header;
