import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import EventsTabs from '../components/EventsTabs';
import Birthdays from '../components/events/Birthdays';
import EventsList from '../components/events/EventsList';
import Holidays from '../components/events/Holidays';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const EventsScreen = () => {
  const [activeTab, setActiveTab] = useState('Birthdays');

  return (
    <View style={styles.container}>
      <EventsTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === 'Birthdays' && <Birthdays />}
      {activeTab === 'Events' && <EventsList />}
      {activeTab === 'Holidays' && <Holidays />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingHorizontal: wp('3%'), // Responsive horizontal padding
  },
});

export default EventsScreen;
