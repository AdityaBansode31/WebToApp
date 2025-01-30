import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity, Linking } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import commonStyles from '../../styles/commonStyles';
import videoData from '../../data/videos.json';

// Image mapping for static imports
const thumbnailMap = {
  react_native_basics: require('../../assets/react-native-basics.png'),
  react_navigation: require('../../assets/react-navigation.png'),
  react_ui_design: require('../../assets/banner.jpg'),
};

const Videos = () => {
  const [videoItems, setVideoItems] = useState([]);

  useEffect(() => {
    // Load data and map thumbnails
    const mappedVideos = videoData.map((item) => ({
      ...item,
      thumbnail: thumbnailMap[item.thumbnail], // Resolve static image
    }));
    setVideoItems(mappedVideos);
  }, []);

  const openYouTube = (url) => {
    Linking.openURL(url).catch((err) => console.error("Couldn't load the page", err));
  };

  return (
    <View style={styles.container}>
      <Text style={commonStyles.sectionTitle}>Videos</Text>
      <FlatList
        data={videoItems}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => openYouTube(item.url)} style={styles.videoItem}>
            <Image source={item.thumbnail} style={styles.videoImage} />
            <View style={styles.textContainer}>
              <Text style={styles.videoTitle}>{item.title}</Text>
              <Text style={styles.videoDescription}>{item.description}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Take up the full available height
    padding: wp('3%'), // Add responsive padding around the screen
  },
  videoItem: {
    marginBottom: hp('2%'), // Space between video items
    width: wp('90%'), // Responsive width for video items
    maxWidth: 600, // Max width for tablets and larger screens
    alignSelf: 'center', // Center the card horizontally
  },
  videoImage: {
    width: '100%',
    height: hp('25%'), // Responsive height for video images
    borderRadius: wp('2.5%'), // Optional, adds rounded corners
    marginBottom: hp('1.5%'), // Space between image and text
  },
  textContainer: {
    padding: wp('2%'),
  },
  videoTitle: {
    fontSize: wp('4%'),
    fontWeight: 'bold',
    color: '#004A8F',
    marginBottom: hp('0.5%'),
  },
  videoDescription: {
    fontSize: wp('3.5%'),
    color: '#555555',
  },
});

export default Videos;
