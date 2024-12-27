// src/screens/HomeScreen.js
import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import Banner from '../components/Banner';
import MyApps from '../components/MyApps';
import NewStarters from '../components/NewStarters';
import News from '../components/News';
import Videos from '../components/Videos'
import Images from '../components/Images'
// import FooterNavBar from '../components/FooterNavBar';
// import ReviewFeedback from '../components/ReviewFeedback';
import ActivePolls from '../components/ActivePolls';

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Banner />
      <MyApps />
      <NewStarters />
      <News />
      <Videos />
      <ActivePolls />
      <Images />

    </ScrollView>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
  },
});

export default HomeScreen;



// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';

// const HomeScreen = () => {
//   return (
//     <View style={styles.container}>
//       <Text>Home Screen</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });

// export default HomeScreen;