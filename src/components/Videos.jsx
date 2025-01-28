// import React from 'react';
// import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity, Linking } from 'react-native';
// import commonStyles from '../styles/commonStyles';

// const Videos = () => {
//   const videoItems = [
//     {
//       id: '1',
//       title: 'Learn React Native Basics',
//       description: 'Start with the basics of React Native.',
//       thumbnail: require('../assets/react-native-basics.png'), // Example thumbnail
//       url: 'https://www.youtube.com/watch?v=0-S5a0eXPoc',
//     },
//     {
//       id: '2',
//       title: 'React Native Navigation',
//       description: 'Master navigation in React Native apps.',
//       thumbnail: require('../assets/react-navigation.png'),
//       url: 'https://www.youtube.com/watch?v=G-Zv9K3Ofbw',
//     },
//     {
//     id: '3',
//       title: 'React Native UI Design',
//       description: 'Create beautiful UI in React Native.',
//       thumbnail: require('../assets/UI.png'),
//       url: 'https://www.youtube.com/watch?v=QSyIZ2xVwfk',
//     },
//   ];

//   const openYouTube = (url) => {
//     Linking.openURL(url).catch((err) => console.error("Couldn't load the page", err));
//   };

//   return (
//     <View>
//       <Text style={commonStyles.sectionTitle}>Videos</Text>
//       <FlatList
//         data={videoItems}
//         horizontal
//         showsHorizontalScrollIndicator={false}
//         keyExtractor={(item) => item.id}
//         renderItem={({ item }) => (
//           <TouchableOpacity
//             style={[commonStyles.card, styles.videoCard]}
//             onPress={() => openYouTube(item.url)}
//           >
//             <Image source={item.thumbnail} style={styles.videoImage} />
//             <View style={styles.textContainer}>
//               <Text style={styles.videoTitle}>{item.title}</Text>
//               <Text style={styles.videoDescription}>{item.description}</Text>
//             </View>
//           </TouchableOpacity>
//         )}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   videoCard: {
//     width: 300,
//     marginRight: 15,
//     borderRadius: 15,
//     backgroundColor: '#FFFFFF',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 4,
//     elevation: 5,
//   },
//   videoImage: {
//     width: '100%',
//     height: 180,
//     borderTopLeftRadius: 15,
//     borderTopRightRadius: 15,
//   },
//   textContainer: {
//     padding: 10,
//   },
//   videoTitle: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#004A8F',
//     marginBottom: 5,
//   },
//   videoDescription: {
//     fontSize: 14,
//     color: '#555555',
//   },
// });

// export default Videos;

import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity, Linking } from 'react-native';
import commonStyles from '../styles/commonStyles';
import videoData from '../data/videos.json';

// Image mapping for static imports
const thumbnailMap = {
  react_native_basics: require('../assets/react-native-basics.png'),
  react_navigation: require('../assets/react-navigation.png'),
  react_ui_design: require('../assets/banner.jpg'),
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
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[commonStyles.card, styles.videoCard]}
            onPress={() => openYouTube(item.url)}
          >
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
    paddingLeft: 10, // Apply padding only on the left
  },
  videoCard: {
    width: 300,
    marginRight: 15,
    borderRadius: 15,
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  videoImage: {
    width: '100%',
    height: 180,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
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
