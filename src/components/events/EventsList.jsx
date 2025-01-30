import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import eventsData from '../../data/events.json';
import commonStyles from '../../styles/commonStyles';

// Mapping static image names to actual image files
const imageMap = {
  music_festival: require('../../assets/musicFestival.png'),
  tech_conference: require('../../assets/techconf.png'),
  // Add other images here as needed
};

const EventsList = () => {
  return (
    <View style={commonStyles.container}>
      <FlatList
        data={eventsData}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card}>
            {/* Render Image using the imageMap */}
            <Image source={imageMap[item.image]} style={styles.eventImage} />
            
            <Text style={styles.itemText}>{item.name}</Text>
            <Text style={styles.dateText}>{item.date}</Text>
            <Text style={styles.descriptionText}>{item.description}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    marginBottom: hp('2%'),
    padding: wp('4%'),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 5,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    width: wp('90%'),
    maxWidth: 600, // Max width for tablets and larger screens
    alignSelf: 'center',
  },
  eventImage: {
    width: '100%',
    height: hp('25%'),
    borderRadius: 10,
    marginBottom: hp('1.5%'),
    resizeMode: 'cover',
  },
  itemText: {
    fontSize: wp('4.5%'),
    fontWeight: 'bold',
    color: '#333',
    marginBottom: hp('0.5%'),
  },
  dateText: {
    fontSize: wp('3.5%'),
    color: '#888',
    marginBottom: hp('1%'),
  },
  descriptionText: {
    fontSize: wp('3.5%'),
    color: '#555',
    lineHeight: wp('4.5%'),
  },
});

export default EventsList;
