import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'; // Import FontAwesome for icons

const MyApps = () => {
  const apps = [
    { id: '1', name: 'Task Manager', color: '#FF6347', icon: 'tasks' },
    { id: '2', name: 'Project Management', color: '#1E90FF', icon: 'folder' },
    { id: '3', name: 'ERP', color: '#32CD32', icon: 'cogs' },
    { id: '4', name: 'Reimbursement', color: '#FFD700', icon: 'money' },
    { id: '5', name: 'Help', color: '#6A5ACD', icon: 'life-ring' },
  ];

  return (
    <View>
      <Text style={styles.title}>My Apps</Text>
      <FlatList
        data={apps}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={[styles.appCard, { backgroundColor: item.color }]}>
            <FontAwesome name={item.icon} size={24} color="#FFF" style={styles.icon} />
            <Text style={styles.appText}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#004A8F',
  },
  appCard: {
    padding: 20,
    borderRadius: 10,
    marginHorizontal: 5,
    alignItems: 'center', // Center the icon and text
    justifyContent: 'center', // Center the icon and text
    width: 120, // Set a fixed width for consistency
    height: 120, // Set a fixed height for consistency
  },
  appText: {
    color: '#FFF',
    fontWeight: 'bold',
    marginTop: 10, // Add some spacing between the icon and text
    textAlign: 'center', // Center the text
    fontSize: 14, // Adjust font size for readability
  },
  icon: {
    marginBottom: 5, // Space between the icon and text
  },
});

export default MyApps;
