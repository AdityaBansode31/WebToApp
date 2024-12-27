import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const VendorTabs = ({ activeTab, setActiveTab }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.tab, activeTab === 'Customer' && styles.activeTab]}
        onPress={() => setActiveTab('Customer')}
      >
        <Text style={[styles.tabText, activeTab === 'Customer' && styles.activeTabText]}>
          Customer
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.tab, activeTab === 'Retailer' && styles.activeTab]}
        onPress={() => setActiveTab('Retailer')}
      >
        <Text style={[styles.tabText, activeTab === 'Retailer' && styles.activeTabText]}>
          Retailer
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#1C1C1C',
    justifyContent: 'space-around',
    paddingVertical: 10,
  },
  tab: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  tabText: {
    fontSize: 16,
    color: '#A9A9A9',
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#00D8FF',
  },
  activeTabText: {
    color: '#FFFFFF',
  },
});

export default VendorTabs;
