import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, Modal, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import calendarData from '../data/calendar.json';
import commonStyles from '../styles/commonStyles';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from 'moment';
import Icon from 'react-native-vector-icons/MaterialIcons';

const MyCalendarScreen = () => {
  const [events, setEvents] = useState(calendarData);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [isDatePickerVisible, setDatePickerVisible] = useState(false);
  const [isTimePickerVisible, setTimePickerVisible] = useState(false);
  const [showFormModal, setShowFormModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const showDatePicker = () => setDatePickerVisible(true);
  const hideDatePicker = () => setDatePickerVisible(false);
  const showTimePicker = () => setTimePickerVisible(true);
  const hideTimePicker = () => setTimePickerVisible(false);

  const handleDateConfirm = (date) => {
    setDate(moment(date).format('YYYY-MM-DD'));
    hideDatePicker();
  };

  const handleTimeConfirm = (time) => {
    setTime(moment(time).format('hh:mm A'));
    hideTimePicker();
  };

  const resetForm = () => {
    setTitle('');
    setDescription('');
    setDate('');
    setTime('');
  };

  const addEvent = () => {
    if (!title || !description || !date || !time) {
      alert('All fields are required');
      return;
    }

    const newEvent = {
      id: (events.length + 1).toString(),
      title,
      description,
      date,
      time,
    };

    setEvents(prev => {
      const updated = [...prev, newEvent];
      updated.sort((a, b) => new Date(`${a.date} ${a.time}`) - new Date(`${b.date} ${b.time}`));
      return updated;
    });

    setShowFormModal(false);
    setShowSuccessModal(true);
    resetForm();
  };

  return (
    <View style={commonStyles.container}>
      <Text style={styles.header}>My Calendar</Text>

      <FlatList
        data={events}
        renderItem={({ item }) => (
          <View style={styles.eventCard}>
            <Text style={styles.eventTitle}>{item.title}</Text>
            <Text style={styles.eventDescription}>{item.description}</Text>
            <Text style={styles.eventDetails}>Date: {item.date}</Text>
            <Text style={styles.eventDetails}>Time: {item.time}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />

      {/* Add Event Floating Button */}
      <TouchableOpacity 
        style={styles.fab} 
        onPress={() => setShowFormModal(true)}
      >
        <Icon name="add" size={wp('7%')} color="white" />
      </TouchableOpacity>

      {/* Add Event Form Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={showFormModal}
        onRequestClose={() => setShowFormModal(false)}
      >
        <TouchableWithoutFeedback onPress={() => setShowFormModal(false)}>
          <View style={styles.modalOverlay}>
            <TouchableWithoutFeedback>
              <View style={styles.formModal}>
                <Text style={styles.modalTitle}>Add New Event</Text>

                <TextInput
                  style={styles.input}
                  placeholder="Event Title"
                  value={title}
                  onChangeText={setTitle}
                  placeholderTextColor="#AAA"
                />

                <TextInput
                  style={styles.input}
                  placeholder="Event Description"
                  value={description}
                  onChangeText={setDescription}
                  placeholderTextColor="#AAA"
                />

                <TouchableOpacity style={styles.input} onPress={showDatePicker}>
                  <Text style={styles.datePickerText}>
                    {date || 'Select Date'}
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.input} onPress={showTimePicker}>
                  <Text style={styles.datePickerText}>
                    {time || 'Select Time'}
                  </Text>
                </TouchableOpacity>

                <View style={styles.buttonRow}>
                  <TouchableOpacity 
                    style={[styles.button, styles.cancelButton]} 
                    onPress={() => {
                      setShowFormModal(false);
                      resetForm();
                    }}
                  >
                    <Text style={styles.buttonText}>Cancel</Text>
                  </TouchableOpacity>

                  <TouchableOpacity 
                    style={[styles.button, styles.submitButton]} 
                    onPress={addEvent}
                  >
                    <Text style={styles.buttonText}>Add Event</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      {/* Success Confirmation Modal */}
      <Modal
        transparent={true}
        visible={showSuccessModal}
        onRequestClose={() => setShowSuccessModal(false)}
      >
        <TouchableWithoutFeedback onPress={() => setShowSuccessModal(false)}>
          <View style={styles.modalOverlay}>
            <View style={styles.successModal}>
              <Icon name="check-circle" size={wp('15%')} color="#4CAF50" />
              <Text style={styles.successText}>Event Added Successfully!</Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleDateConfirm}
        onCancel={hideDatePicker}
      />

      <DateTimePickerModal
        isVisible={isTimePickerVisible}
        mode="time"
        onConfirm={handleTimeConfirm}
        onCancel={hideTimePicker}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: wp('7%'),
    fontWeight: 'bold',
    color: '#2E3A59',
    marginVertical: hp('2%'),
    textAlign: 'center',
  },
  eventCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: wp('2.5%'),
    padding: wp('4%'),
    marginBottom: hp('2%'),
    marginHorizontal: wp('5%'),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  eventTitle: {
    fontSize: wp('5%'),
    fontWeight: 'bold',
    color: '#2E3A59',
    marginBottom: hp('1%'),
  },
  eventDescription: {
    fontSize: wp('4%'),
    color: '#555',
    marginBottom: hp('1.5%'),
  },
  eventDetails: {
    fontSize: wp('3.5%'),
    color: '#888',
  },
  fab: {
    position: 'absolute',
    bottom: hp('3%'),
    right: wp('5%'),
    backgroundColor: '#4CAF50',
    width: wp('15%'),
    height: wp('15%'),
    borderRadius: wp('7.5%'),
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  formModal: {
    width: wp('90%'),
    backgroundColor: 'white',
    borderRadius: wp('4%'),
    padding: wp('5%'),
  },
  modalTitle: {
    fontSize: wp('6%'),
    fontWeight: 'bold',
    color: '#2E3A59',
    marginBottom: hp('3%'),
    textAlign: 'center',
  },
  input: {
    height: hp('6%'),
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: hp('2%'),
    paddingHorizontal: wp('3%'),
    borderRadius: wp('2.5%'),
    justifyContent: 'center',
  },
  datePickerText: {
    fontSize: wp('4%'),
    color: '#555',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: hp('2%'),
  },
  button: {
    flex: 1,
    paddingVertical: hp('1.5%'),
    borderRadius: wp('2%'),
    alignItems: 'center',
    marginHorizontal: wp('1%'),
  },
  cancelButton: {
    backgroundColor: '#f44336',
  },
  submitButton: {
    backgroundColor: '#4CAF50',
  },
  buttonText: {
    color: 'white',
    fontSize: wp('4%'),
    fontWeight: '500',
  },
  successModal: {
    backgroundColor: 'white',
    borderRadius: wp('4%'),
    padding: wp('6%'),
    alignItems: 'center',
  },
  successText: {
    fontSize: wp('5%'),
    fontWeight: 'bold',
    color: '#2E3A59',
    marginTop: hp('2%'),
  },
});

export default MyCalendarScreen;