
// import React from 'react';
// import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
// import commonStyles from '../styles/commonStyles';

// const News = () => {
//   const newsItems = [
//     {
//       id: '1',
//       title: 'Congratulations on team success!',
//       description: 'Our team has achieved an amazing milestone.',
//       image: require('../assets/team_success.png'),
//     },
//     {
//       id: '2',
//       title: 'HR announces new policies',
//       description: 'Check out the new HR policies effective this quarter.',
//       image: require('../assets/hr-Policies.png'),
//     },
//     {
//       id: '3',
//       title: 'Upcoming team-building event',
//       description: 'Join us for an exciting team-building activity!',
//       image: require('../assets/team-building.png'),
//     },
//   ];

//   return (
//     <View>
//       <Text style={commonStyles.sectionTitle}>News</Text>
//       <FlatList
//         data={newsItems}
//         horizontal
//         showsHorizontalScrollIndicator={false}
//         keyExtractor={(item) => item.id}
//         renderItem={({ item }) => (
//           <View style={[commonStyles.card, styles.newsCard]}>
//             <Image source={item.image} style={styles.newsImage} />
//             <View style={styles.textContainer}>
//               <Text style={styles.newsTitle}>{item.title}</Text>
//               <Text style={styles.newsDescription}>{item.description}</Text>
//             </View>
//             {/* Buttons Section */}
//             <View style={styles.buttonContainer}>
//               <TouchableOpacity>
//                 <Text style={styles.linkText}>Comment</Text>
//               </TouchableOpacity>
//               <TouchableOpacity>
//                 <Text style={styles.linkText}>Read</Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//         )}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   newsCard: {
//     width: 300, // Card width
//     marginRight: 15,
//     borderRadius: 15,
//     backgroundColor: '#FFFFFF',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 4,
//     elevation: 5, // Shadow for Android
//   },
//   newsImage: {
//     width: '100%',
//     height: 180, // Image height
//     borderTopLeftRadius: 15,
//     borderTopRightRadius: 15,
//   },
//   textContainer: {
//     padding: 10,
//   },
//   newsTitle: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#004A8F',
//     marginBottom: 5,
//   },
//   newsDescription: {
//     fontSize: 14,
//     color: '#555555',
//   },
//   buttonContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     paddingHorizontal: 10,
//     paddingBottom: 10,
//   },
//   linkText: {
//     fontSize: 14,
//     fontWeight: 'bold',
//     color: '#004A8F',
//     textDecorationLine: 'underline', // Makes it look like a link
//   },
// });

// export default News;

import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import commonStyles from '../styles/commonStyles';
import newsData from '../data/news.json';

// Image mapping for static imports
const imageMap = {
  milestone: require('../assets/image1.png'),
  employee_of_month: require('../assets/hr-Policies.png'),
  partnership: require('../assets/react-navigation.png'),
  webinar: require('../assets/banner1.png'),
  csr_initiative: require('../assets/team_success.png'),
};

const News = () => {
  const [newsItems, setNewsItems] = useState([]);

  useEffect(() => {
    // Load data and map images
    const mappedNews = newsData.map((item) => ({
      ...item,
      image: imageMap[item.image], // Resolve the static image
    }));
    setNewsItems(mappedNews);
  }, []);

  return (
    <View style = {styles.container}>
      <Text style={commonStyles.sectionTitle}>News</Text>
      <FlatList
        data={newsItems}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={[commonStyles.card, styles.newsCard]}>
            <Image source={item.image} style={styles.newsImage} />
            <View style={styles.textContainer}>
              <Text style={styles.newsTitle}>{item.title}</Text>
              <Text style={styles.newsDescription}>{item.description}</Text>
            </View>
            {/* Buttons Section */}
            <View style={styles.buttonContainer}>
              <TouchableOpacity>
                <Text style={styles.linkText}>Comment</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.linkText}>Read</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: 10, // Apply padding only on the left
  },
  newsCard: {
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
  newsImage: {
    width: '100%',
    height: 180,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  textContainer: {
    padding: 10,
  },
  newsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#004A8F',
    marginBottom: 5,
  },
  newsDescription: {
    fontSize: 14,
    color: '#555555',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  linkText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#004A8F',
    textDecorationLine: 'underline',
  },
});

export default News;

