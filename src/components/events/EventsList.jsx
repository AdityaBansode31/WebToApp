import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';
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
    marginBottom: 15,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 5,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  eventImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
    resizeMode: 'cover',
  },
  itemText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  dateText: {
    fontSize: 14,
    color: '#888',
    marginBottom: 10,
  },
  descriptionText: {
    fontSize: 14,
    color: '#555',
    lineHeight: 18,
  },
});

export default EventsList;
