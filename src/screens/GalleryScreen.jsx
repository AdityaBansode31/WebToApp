import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
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
    padding: wp('3%'), // Adding responsive padding
  },
});

export default GalleryScreen;
