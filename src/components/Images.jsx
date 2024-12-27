// import React from 'react';
// import { View, Text, Image, StyleSheet, FlatList } from 'react-native';
// import commonStyles from '../styles/commonStyles';

// const Images = () => {
//   const imageItems = [
//     {
//       id: '1',
//       image: require('../assets/profile1.png'), // Replace with your image path
//     },
//     {
//       id: '2',
//       image: require('../assets/profile2.png'),
//     },
//     {
//       id: '3',
//       image: require('../assets/profile.png'),
//     },
//     // Add more images as needed
//     {
//       id: '4',
//       image: require('../assets/image1.png'),
//     },
//   ];

//   const renderImageItem = ({ item }) => (
//     <View style={[commonStyles.card, styles.imageCard]}>
//       <Image source={item.image} style={styles.image} />
//     </View>
//   );

//   return (
//     <View>
//       <Text style={commonStyles.sectionTitle}>Images</Text>
//       <FlatList
//         data={imageItems}
//         renderItem={renderImageItem}
//         keyExtractor={(item) => item.id}
//         horizontal
//         showsHorizontalScrollIndicator={false}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   imageCard: {
//     width: 200, // Smaller width compared to News cards
//     marginRight: 10,
//     borderRadius: 10,
//     backgroundColor: '#FFFFFF',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 1 },
//     shadowOpacity: 0.15,
//     shadowRadius: 2,
//     elevation: 3, // Shadow for Android
//   },
//   image: {
//     width: '100%',
//     height: 120, // Smaller height
//     borderRadius: 10,
//   },
// });

// export default Images;

  import React, { useState, useEffect } from 'react';
  import { View, Text, Image, StyleSheet, FlatList } from 'react-native';
  import commonStyles from '../styles/commonStyles';
  import imageData from '../data/images.json';

  // Image mapping for static imports
  const imageMap = {
    profile1: require('../assets/profile1.png'),
    profile2: require('../assets/profile2.png'),
    profile: require('../assets/profile.png'),
    image1: require('../assets/image1.png'),
  };

  const Images = () => {
    const [imageItems, setImageItems] = useState([]);

    useEffect(() => {
      // Map image keys to static imports
      const mappedImages = imageData.map((item) => ({
        ...item,
        image: imageMap[item.image],
      }));
      setImageItems(mappedImages);
    }, []);

    const renderImageItem = ({ item }) => (
      <View style={[commonStyles.card, styles.imageCard]}>
        <Image source={item.image} style={styles.image} />
      </View>
    );

    return (
      <View>
        <Text style={commonStyles.sectionTitle}>Images</Text>
        <FlatList
          data={imageItems}
          renderItem={renderImageItem}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    );
  };

  const styles = StyleSheet.create({
    imageCard: {
      width: 200, // Smaller width compared to News cards
      marginRight: 10,
      borderRadius: 10,
      backgroundColor: '#FFFFFF',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.15,
      shadowRadius: 2,
      elevation: 3, // Shadow for Android
    },
    image: {
      width: '100%',
      height: 120, // Smaller height
      borderRadius: 10,
    },
  });

  export default Images;
