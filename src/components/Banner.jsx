

// import React, { useState, useEffect } from 'react';
// import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
// import imageData from '../data/banner.json';

// const imageMap = {
//   banner1: require('../assets/banner.jpg'),
//   banner2: require('../assets/banner2.png'),
//   banner3: require('../assets/banner1.png'),
//   banner4: require('../assets/banner.jpg'),
// };

// const { width: screenWidth } = Dimensions.get('window');

// const Banner = () => {
//   const [banners, setBanners] = useState([]);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     if (imageData && imageData.banners) {
//       const mappedBanners = imageData.banners.map((item) => ({
//         ...item,
//         image: imageMap[item.image],
//       }));
//       setBanners(mappedBanners);
//     }
//   }, []);

//   useEffect(() => {
//     // Automatically slide to the next image every 2 seconds
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
//     }, 2000);

//     // Clear the interval when the component unmounts
//     return () => clearInterval(interval);
//   }, [banners]);

//   if (banners.length === 0) {
//     return null; // No banners to display
//   }

//   return (
//     <View style={styles.bannerContainer}>
//       <Image
//         source={banners[currentIndex].image}
//         style={styles.image}
//         resizeMode="cover"
//       />
//       <Text style={styles.text}>{banners[currentIndex].text}</Text>

//       <View style={styles.indicatorContainer}>
//         {banners.map((_, index) => (
//           <View
//             key={index}
//             style={[
//               styles.indicator,
//               currentIndex === index && styles.activeIndicator,
//             ]}
//           />
//         ))}
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   bannerContainer: {
//     width: '100%',
//     backgroundColor: '#F8F8F8',
//     paddingBottom: 20,
//     alignItems: 'center',
//   },
//   image: {
//     width: screenWidth,
//     height: 200, // Adjust height as needed
//   },
//   text: {
//     marginTop: 10,
//     color: '#000',
//     fontWeight: 'bold',
//     fontSize: 16,
//     textAlign: 'center',
//   },
//   indicatorContainer: {
//     flexDirection: 'row',
//     marginTop: 10,
//   },
//   indicator: {
//     width: 8,
//     height: 8,
//     backgroundColor: '#CCC',
//     borderRadius: 4,
//     marginHorizontal: 4,
//   },
//   activeIndicator: {
//     backgroundColor: '#000',
//   },
// });

// export default Banner;

import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, PixelRatio } from 'react-native';
import imageData from '../data/banner.json';

const imageMap = {
  banner1: require('../assets/banner.jpg'),
  banner2: require('../assets/banner2.png'),
  banner3: require('../assets/banner1.png'),
  banner4: require('../assets/banner.jpg'),
};

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const Banner = () => {
  const [banners, setBanners] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (imageData && imageData.banners) {
      const mappedBanners = imageData.banners.map((item) => ({
        ...item,
        image: imageMap[item.image],
      }));
      setBanners(mappedBanners);
    }
  }, []);

  useEffect(() => {
    // Automatically slide to the next image every 2 seconds
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 2000);

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, [banners]);

  if (banners.length === 0) {
    return null; // No banners to display
  }

  return (
    <View style={styles.bannerContainer}>
      <Image
        source={banners[currentIndex].image}
        style={[
          styles.image,
          { height: screenHeight * 0.25 }, // Responsive height (25% of screen height)
        ]}
        resizeMode="cover"
      />
      <Text style={[styles.text, { fontSize: PixelRatio.getPixelSizeForLayoutSize(8) }]}>
        {banners[currentIndex].text}
      </Text>

      <View style={styles.indicatorContainer}>
        {banners.map((_, index) => (
          <View
            key={index}
            style={[
              styles.indicator,
              currentIndex === index && styles.activeIndicator,
              {
                width: PixelRatio.getPixelSizeForLayoutSize(4), // Responsive indicator size
                height: PixelRatio.getPixelSizeForLayoutSize(4),
                borderRadius: PixelRatio.getPixelSizeForLayoutSize(2),
              },
            ]}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bannerContainer: {
    width: '100%',
    backgroundColor: '#F8F8F8',
    paddingBottom: 20,
    alignItems: 'center',
  },
  image: {
    width: screenWidth,
  },
  text: {
    marginTop: 10,
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  indicatorContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  indicator: {
    backgroundColor: '#CCC',
    marginHorizontal: 4,
  },
  activeIndicator: {
    backgroundColor: '#000',
  },
});

export default Banner;