import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity, Linking } from 'react-native';
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
    padding: 10, // Add padding around the screen
  },
  videoItem: {
    marginBottom: 20, // Space between video items
  },
  videoImage: {
    width: '100%',
    height: 180,
    borderRadius: 10, // Optional, adds rounded corners
    marginBottom: 10, // Space between image and text
  },
  textContainer: {
    padding: 10,
  },
  videoTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#004A8F',
    marginBottom: 5,
  },
  videoDescription: {
    fontSize: 14,
    color: '#555555',
  },
});

export default Videos;
