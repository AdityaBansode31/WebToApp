import React from 'react';
import { View, Text, StyleSheet, FlatList, Dimensions, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'; // Import FontAwesome for icons

const MyApps = () => {
  const apps = [
    { id: '1', name: 'Task Manager', color: '#FF6347', icon: 'tasks' },
    { id: '2', name: 'Project Management', color: '#1E90FF', icon: 'folder' },
    { id: '3', name: 'ERP', color: '#32CD32', icon: 'cogs' },
    { id: '4', name: 'Reimbursement', color: '#FFD700', icon: 'money' },
    { id: '5', name: 'Help', color: '#6A5ACD', icon: 'life-ring' },
  ];

  const screenWidth = Dimensions.get('window').width;
  const isTablet = screenWidth >= 600; // Adjust breakpoint as needed

  const cardWidth = isTablet ? (screenWidth - 40) / 3 : (screenWidth - 20) / 2; // Adjust fractions and margins
  const cardHeight = isTablet ? 150 : 100;

  const numColumns = isTablet ? 3 : 1;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Apps</Text>
      <FlatList
        data={apps}
        numColumns={numColumns}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={[
              styles.appCard,
              { backgroundColor: item.color, width: cardWidth, height: cardHeight },
            ]}>
            <FontAwesome name={item.icon} size={isTablet ? 32 : 24} color="#FFF" style={styles.icon} />
            <Text style={[styles.appText, { fontSize: isTablet ? 16 : 14 }]}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: 10, // Consistent padding
    flex: 1,
  },
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
