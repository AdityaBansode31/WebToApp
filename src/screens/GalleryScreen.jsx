import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import GalleryTabs from '../components/GalleryTabs';
import Images from '../components/gallery/Images';
import Videos from '../components/gallery/Videos';

const GalleryScreen = () => {
  const [activeTab, setActiveTab] = useState('Images');

  return (
    <View style={styles.container}>
      <GalleryTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === 'Images' ? <Images /> : <Videos />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
});

export default GalleryScreen;
