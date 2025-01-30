import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import * as Animatable from 'react-native-animatable'; // For animations
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

// Import images statically
import johnDoeImage from '../../assets/profile1.png';
import janeSmithImage from '../../assets/profile2.png';
// Add more images as needed...

const birthdayData = [
  {
    id: '1',
    name: 'John Doe',
    date: 'January 15',
    image: johnDoeImage, // Directly reference the imported image
  },
  {
    id: '2',
    name: 'Jane Smith',
    date: 'February 20',
    image: janeSmithImage, // Directly reference the imported image
  },
  // Add more items here...
];

const Birthdays = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedBirthday, setSelectedBirthday] = useState(null);

  const openModal = (birthday) => {
    setSelectedBirthday(birthday);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedBirthday(null);
  };

  const renderBirthdayItem = ({ item }) => (
    <View style={styles.card}>
      {/* Render the statically imported image */}
      <Image source={item.image} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.date}>
          <Icon name="calendar" size={wp('4%')} color="#FF6347" /> {item.date}
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => openModal(item)} // Open modal on button press
        >
          <Icon name="gift-outline" size={wp('4.5%')} color="#FFF" />
          <Text style={styles.buttonText}>Wish Happy Birthday</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={birthdayData}
        renderItem={renderBirthdayItem}
        keyExtractor={(item) => item.id}
      />

      {/* Modal for birthday wish */}
      <Modal
        transparent={true}
        animationType="slide"
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.modalOverlay}>
          <Animatable.View
            animation="zoomIn"
            duration={500}
            style={styles.modalContent}
          >
            <Icon name="checkmark-circle" size={wp('12%')} color="green" style={styles.icon} />
            <Text style={styles.modalText}>
              🎉 Happy Birthday {selectedBirthday?.name}!
            </Text>
            <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </Animatable.View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
    padding: wp('4%'),
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    marginBottom: hp('2%'),
    padding: wp('4%'),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 5,
    borderWidth: 1,
    borderColor: '#e0e0e0', // Light border color
    width: wp('90%'), // Width relative to screen size
    maxWidth: 600, // Max width for tablets and larger screens
    alignSelf: 'center', // Center the card horizontally
  },
  image: {
    width: wp('20%'),
    height: wp('20%'),
    borderRadius: wp('10%'),
    marginRight: wp('4%'),
    borderWidth: 2,
    borderColor: '#FF6347', // Border color around the image
  },
  details: {
    flex: 1,
    justifyContent: 'center',
  },
  name: {
    fontSize: wp('5%'),
    fontWeight: 'bold',
    color: '#333',
  },
  date: {
    fontSize: wp('4%'),
    color: '#888',
    marginVertical: hp('0.5%'),
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4CAF50', // Updated button color
    paddingVertical: hp('1%'),
    paddingHorizontal: wp('4%'),
    borderRadius: 8,
    marginTop: hp('2%'),
    justifyContent: 'center', // Center the button content
  },
  buttonText: {
    color: '#FFF',
    marginLeft: wp('2%'),
    fontWeight: 'bold',
    fontSize: wp('4%'),
  },

  // Modal styling
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: wp('8%'),
    borderRadius: 10,
    alignItems: 'center',
    width: wp('80%'), // Responsive width
  },
  icon: {
    marginBottom: hp('2%'),
  },
  modalText: {
    fontSize: wp('4.5%'),
    color: '#333',
    marginBottom: hp('2%'),
    textAlign: 'center',
  },
  closeButton: {
    backgroundColor: '#007BFF',
    paddingVertical: hp('1.5%'),
    paddingHorizontal: wp('5%'),
    borderRadius: 5,
  },
  closeButtonText: {
    color: '#fff',
    fontSize: wp('4%'),
    textAlign: 'center',
  },
});

export default Birthdays;
