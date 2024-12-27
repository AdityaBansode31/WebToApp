import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';
import holidaysData from '../../data/holidays.json';
import commonStyles from '../../styles/commonStyles';

// Static image mapping for holidays
const holidayImages = {
  'New Year': require('../../assets/newYear.png'),
  'Christmas': require('../../assets/crismas.png'),
  'Eid al-Fitr': require('../../assets/eid.png'),
};

const Holidays = () => {
  return (
    <View style={commonStyles.container}>
      <FlatList
        data={holidaysData}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card}>
            {/* Render the image based on holiday name */}
            <Image source={holidayImages[item.name]} style={styles.holidayImage} />

            <View style={styles.textContainer}>
              <Text style={styles.holidayName}>{item.name}</Text>
              <Text style={styles.holidayDate}>{item.date}</Text>
              <Text style={styles.holidayDescription}>{item.description}</Text>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFF',
    borderRadius: 15,
    marginBottom: 20,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  holidayImage: {
    width: '100%',
    height: 180,
    borderRadius: 10,
    marginBottom: 10,
    resizeMode: 'cover',
  },
  textContainer: {
    padding: 10,
  },
  holidayName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  holidayDate: {
    fontSize: 14,
    color: '#888',
    marginBottom: 5,
  },
  holidayDescription: {
    fontSize: 14,
    color: '#555',
    lineHeight: 18,
  },
});

export default Holidays;
