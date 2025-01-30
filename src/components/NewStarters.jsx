import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Modal,
  TouchableWithoutFeedback,
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import commonStyles from '../styles/commonStyles';
import startersData from '../data/starters.json';

// Image mapping for static imports
const imageMap = {
  profile2: require('../assets/profile2.png'),
  profile: require('../assets/profile.png'),
  lady: require('../assets/lady.png'),
};

const NewStarters = () => {
  const [starters, setStarters] = useState([]);
  const [selectedStarter, setSelectedStarter] = useState(null);

  useEffect(() => {
    // Map image keys to static imports
    const mappedStarters = startersData.map((starter) => ({
      ...starter,
      image: imageMap[starter.image],
    }));
    setStarters(mappedStarters);
  }, []);

  const openModal = (starter) => {
    setSelectedStarter(starter);
  };

  const closeModal = () => {
    setSelectedStarter(null);
  };

  return (
    <View style={styles.container}>
      <Text style={commonStyles.sectionTitle}>New Starters</Text>
      <FlatList
        data={starters}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[commonStyles.card, styles.starterCard]}
            onPress={() => openModal(item)}
          >
            <Image source={item.image} style={styles.profileImage} />
            <View>
              <Text style={commonStyles.textPrimary}>{item.name}</Text>
              <Text style={commonStyles.textSecondary}>{item.role}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
      {/* Popup Modal */}
      {selectedStarter && (
        <Modal
          transparent
          visible={!!selectedStarter}
          animationType="slide"
          onRequestClose={closeModal}
        >
          <TouchableWithoutFeedback onPress={closeModal}>
            <View style={styles.modalOverlay}>
              <TouchableWithoutFeedback>
                <View style={styles.modalContent}>
                  <Image source={selectedStarter.image} style={styles.modalImage} />
                  <Text style={styles.modalName}>{selectedStarter.name}</Text>
                  <Text style={styles.modalRole}>{selectedStarter.role}</Text>
                  <Text style={styles.modalDetails}>
                    Department: {selectedStarter.department}
                  </Text>
                  <Text style={styles.modalDetails}>
                    Joined: {selectedStarter.joinedDate}
                  </Text>
                </View>
              </TouchableWithoutFeedback>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: wp('3%'), // Add responsive padding to prevent elements from touching edges
  },
  starterCard: {
    flexDirection: 'row',
    alignItems: 'center',
    width: wp('60%'), // Responsive width for starter cards
    maxWidth: 300, // Max width for starter cards on larger screens
    marginRight: wp('2%'),
  },
  profileImage: {
    width: wp('13%'),
    height: wp('13%'),
    borderRadius: wp('6.5%'),
    marginRight: wp('3%'),
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: wp('80%'),
    padding: wp('5%'),
    borderRadius: wp('2.5%'),
    backgroundColor: '#FFF',
    alignItems: 'center',
  },
  modalImage: {
    width: wp('20%'),
    height: wp('20%'),
    borderRadius: wp('10%'),
    marginBottom: hp('1.5%'),
  },
  modalName: {
    fontSize: wp('5%'),
    fontWeight: 'bold',
    marginBottom: hp('1%'),
  },
  modalRole: {
    fontSize: wp('4%'),
    color: '#888',
    marginBottom: hp('1.5%'),
  },
  modalDetails: {
    fontSize: wp('3.5%'),
    color: '#555',
    marginBottom: hp('1%'),
  },
});

export default NewStarters;
