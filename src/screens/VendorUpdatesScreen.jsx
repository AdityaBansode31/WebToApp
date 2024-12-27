import React, {useState} from 'react';
import { View,StyleSheet, Text } from 'react-native';
import VendorTabs from '../components/VerdorTabs';
import Customer from '../components/Vendore/Customer';
import Retailer from '../components/Vendore/Retailer';

const VendorUpdatesScreen = () => {
  const [activeTab, setActiveTab] = useState('Customer');

  return (
    <View style={styles.container}>
      <VendorTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === 'Customer' ? <Customer /> : <Retailer />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
});

export default VendorUpdatesScreen;