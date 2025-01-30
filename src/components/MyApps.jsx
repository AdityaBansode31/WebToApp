import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Dimensions } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
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
              { backgroundColor: item.color, width: wp('45%'), height: cardHeight },
            ]}>
            <FontAwesome name={item.icon} color="#FFF" style={styles.icon} />
            <Text style={styles.appText}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: wp('3%'), // Consistent responsive padding
    flex: 1,
  },
  title: {
    fontSize: wp('5%'), // Responsive font size
    fontWeight: 'bold',
    marginBottom: hp('2%'),
    textAlign: 'center',
    color: '#004A8F',
  },
  appCard: {
    padding: wp('5%'),
    borderRadius: wp('2.5%'),
    marginHorizontal: wp('2%'),
    alignItems: 'center', // Center the icon and text
    justifyContent: 'center', // Center the icon and text
    maxWidth: 200, // Max width for app cards on larger screens
  },
  appText: {
    color: '#FFF',
    fontWeight: 'bold',
    marginTop: hp('1%'), // Add some spacing between the icon and text
    textAlign: 'center', // Center the text
    fontSize: wp('4%'), // Responsive font size
  },
  icon: {
    marginBottom: hp('0.5%'), // Space between the icon and text
  },
});

export default MyApps;
