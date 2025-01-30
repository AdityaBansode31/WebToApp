import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet, FlatList, Modal, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import imageData from '../../data/images.json';

// Image mapping for static imports
const imageMap = {
  profile1: require('../../assets/profile1.png'),
  profile2: require('../../assets/profile2.png'),
  profile: require('../../assets/profile.png'),
  image1: require('../../assets/image1.png'),
};

const Images = () => {
  const [imageItems, setImageItems] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    // Map image keys to static imports
    const mappedImages = imageData.map((item) => ({
      ...item,
      image: imageMap[item.image],
    }));
    setImageItems(mappedImages);
  }, []);

  const openImageModal = (image) => {
    setSelectedImage(image);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedImage(null);
  };

  const renderImageItem = ({ item }) => (
    <TouchableOpacity onPress={() => openImageModal(item.image)}>
      <Image source={item.image} style={styles.image} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={imageItems}
        renderItem={renderImageItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        numColumns={3} // Set number of columns for images to wrap
        contentContainerStyle={styles.flatListContainer}
      />

      {/* Fullscreen Modal for Image */}
      <Modal visible={modalVisible} transparent={true} animationType="fade" onRequestClose={closeModal}>
        <TouchableOpacity style={styles.modalOverlay} onPress={closeModal}>
          <Image source={selectedImage} style={styles.fullscreenImage} />
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: wp('3%'), // Add responsive padding around the screen
  },
  flatListContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: wp('28%'), // Set responsive width for images
    height: wp('28%'), // Set responsive height for images
    margin: wp('1%'), // Space between images
    borderRadius: wp('2.5%'), // Optional rounding of corners
    resizeMode: 'cover', // Ensure the image covers the space properly
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)', // Semi-transparent background
  },
  fullscreenImage: {
    width: wp('90%'), // Image takes up most of the screen
    height: hp('80%'), // Image height is proportionally 80% of the screen
    resizeMode: 'contain', // Image fits in container without stretching
  },
});

export default Images;
