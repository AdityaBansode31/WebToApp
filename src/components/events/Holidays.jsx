import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
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
    marginBottom: hp('2%'),
    padding: wp('4%'),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    width: wp('90%'),
    maxWidth: 600, // Max width for tablets and larger screens
    alignSelf: 'center',
  },
  holidayImage: {
    width: '100%',
    height: hp('25%'),
    borderRadius: 10,
    marginBottom: hp('1.5%'),
    resizeMode: 'cover',
  },
  textContainer: {
    padding: wp('2%'),
  },
  holidayName: {
    fontSize: wp('4.5%'),
    fontWeight: 'bold',
    color: '#333',
    marginBottom: hp('0.5%'),
  },
  holidayDate: {
    fontSize: wp('3.5%'),
    color: '#888',
    marginBottom: hp('1%'),
  },
  holidayDescription: {
    fontSize: wp('3.5%'),
    color: '#555',
    lineHeight: wp('4.5%'),
  },
});

export default Holidays;
