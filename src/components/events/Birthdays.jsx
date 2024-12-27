import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal, Alert, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import * as Animatable from 'react-native-animatable'; // For animations

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
          <Icon name="calendar" size={16} color="#FF6347" /> {item.date}
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => openModal(item)} // Open modal on button press
        >
          <Icon name="gift-outline" size={18} color="#FFF" />
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
            <Icon name="checkmark-circle" size={50} color="green" style={styles.icon} />
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
    padding: 15,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    marginBottom: 20,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 5,
    borderWidth: 1,
    borderColor: '#e0e0e0', // Light border color
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 20,
    borderWidth: 2,
    borderColor: '#FF6347', // Border color around the image
  },
  details: {
    flex: 1,
    justifyContent: 'center',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  date: {
    fontSize: 16,
    color: '#888',
    marginVertical: 5,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4CAF50', // Updated button color
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    marginTop: 15,
    width: '100%',
    justifyContent: 'center', // Center the button content
  },
  buttonText: {
    color: '#FFF',
    marginLeft: 10,
    fontWeight: 'bold',
    fontSize: 16,
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
    padding: 30,
    borderRadius: 10,
    alignItems: 'center',
    width: '80%',
  },
  icon: {
    marginBottom: 20,
  },
  modalText: {
    fontSize: 18,
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  closeButton: {
    backgroundColor: '#007BFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default Birthdays;
