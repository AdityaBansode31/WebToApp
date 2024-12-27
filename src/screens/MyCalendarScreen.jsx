import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, Modal, TouchableOpacity } from 'react-native';
import calendarData from '../data/calendar.json';  // Import calendar data
import commonStyles from '../styles/commonStyles'; // Assuming you have common styles
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from 'moment';

const MyCalendarScreen = () => {
  const [events, setEvents] = useState(calendarData);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [isDatePickerVisible, setDatePickerVisible] = useState(false);
  const [isTimePickerVisible, setTimePickerVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // Function to show date picker
  const showDatePicker = () => {
    setDatePickerVisible(true);
  };

  // Function to hide date picker
  const hideDatePicker = () => {
    setDatePickerVisible(false);
  };

  // Function to handle date selection
  const handleDateConfirm = (date) => {
    setDate(moment(date).format('YYYY-MM-DD')); // Format date
    hideDatePicker();
  };

  // Function to show time picker
  const showTimePicker = () => {
    setTimePickerVisible(true);
  };

  // Function to hide time picker
  const hideTimePicker = () => {
    setTimePickerVisible(false);
  };

  // Function to handle time selection
  const handleTimeConfirm = (time) => {
    setTime(moment(time).format('hh:mm A')); // Format time
    hideTimePicker();
  };

  // Function to add a new event
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

    setEvents([...events, newEvent]);
    setTitle('');
    setDescription('');
    setDate('');
    setTime('');
    setShowModal(true);  // Show modal instead of alert
  };

  return (
    <View style={commonStyles.container}>
      <Text style={styles.header}>My Calendar</Text>

      <View style={styles.formContainer}>
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
            {date ? `Date: ${date}` : 'Select Date'}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.input} onPress={showTimePicker}>
          <Text style={styles.datePickerText}>
            {time ? `Time: ${time}` : 'Select Time'}
          </Text>
        </TouchableOpacity>

        <Button title="Add Event" onPress={addEvent} color="#4CAF50" />
      </View>

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

      {/* Modal for confirmation */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={showModal}
        onRequestClose={() => setShowModal(false)}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Event added successfully!</Text>
          <Button title="Close" onPress={() => setShowModal(false)} color="#4CAF50" />
        </View>
      </Modal>

      {/* Date Picker */}
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleDateConfirm}
        onCancel={hideDatePicker}
      />

      {/* Time Picker */}
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
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2E3A59',
    marginBottom: 20,
    textAlign: 'center',
  },
  formContainer: {
    marginBottom: 25,
    backgroundColor: '#F5F5F5',
    padding: 20,
    borderRadius: 10,
    marginHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  input: {
    height: 45,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 15,
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
  },
  datePickerText: {
    fontSize: 16,
    color: '#555',
  },
  eventCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
    marginHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  eventTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2E3A59',
    marginBottom: 8,
  },
  eventDescription: {
    fontSize: 16,
    color: '#555',
    marginBottom: 10,
  },
  eventDetails: {
    fontSize: 14,
    color: '#888',
  },
  modalView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
});

export default MyCalendarScreen;
