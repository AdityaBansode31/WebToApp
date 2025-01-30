// import React from 'react';
// import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
// import LinearGradient from 'react-native-linear-gradient'; // Gradient library

// const GalleryTabs = ({ activeTab, setActiveTab }) => {
//   return (
//     <View style={styles.container}>
//       <TouchableOpacity
//         style={[styles.tab, activeTab === 'Images' && styles.activeTab]}
//         onPress={() => setActiveTab('Images')}
//       >
//         <Text style={[styles.tabText, activeTab === 'Images' && styles.activeTabText]}>
//           Images
//         </Text>
//       </TouchableOpacity>
//       <TouchableOpacity
//         style={[styles.tab, activeTab === 'Videos' && styles.activeTab]}
//         onPress={() => setActiveTab('Videos')}
//       >
//         <Text style={[styles.tabText, activeTab === 'Videos' && styles.activeTabText]}>
//           Videos
//         </Text>
//       </TouchableOpacity>
//       </View>
//   );
// };

// const styles = StyleSheet.create({
//   // container: {
//   //   flexDirection: 'row',
//   //   justifyContent: 'space-around',
//   //   paddingVertical: 15,
//   //   borderRadius: 20,
//   //   marginHorizontal: 10,
//   //   elevation: 10, // Adds shadow for a raised effect
//   // },
//   // tab: {
//   //   paddingVertical: 12,
//   //   paddingHorizontal: 20,
//   //   borderRadius: 10,
//   //   marginHorizontal: 8,
//   //   alignItems: 'center',
//   //   backgroundColor: '#1E2A47', // Dark blue background for inactive tabs
//   //   opacity: 0.8, // Slight transparency for inactive tabs
//   // },
//   // tabText: {
//   //   fontSize: 16,
//   //   color: '#D1D8E0', // Light gray text for inactive tabs
//   //   fontWeight: '600',
//   // },
//   // activeTab: {
//   //   backgroundColor: '#003366', // Darker blue for active tab
//   //   opacity: 1, // Full opacity for active tab
//   //   borderBottomWidth: 3,
//   //   borderBottomColor: '#00D8FF', // Blue highlight for active tab
//   //   paddingVertical: 12,
//   // },
//   // activeTabText: {
//   //   color: '#FFFFFF', // White text for active tab
//   // },
//   container: {
//     flexDirection: 'row',
//     justifyContent: 'space-around', // Or 'space-between' if you prefer
//     // Removed paddingVertical, borderRadius
//      // Keep horizontal margins if needed
//     // Removed elevation
//     elevation: 10,
//     backgroundColor: 'white', // White background
//     padding: 15,
//   },
//   tab: {
//     paddingVertical: 12,
//     paddingHorizontal: 20,
//    borderRadius: 10,
//     marginHorizontal: 8,
//     alignItems: 'center',
//     backgroundColor: '#1E2A47', // Dark blue background for inactive tabs
//     opacity: 0.8,
//   },
//   tabText: {
//     fontSize: 16,
//     color: '#D1D8E0',
//     fontWeight: '600',
//   },
//   activeTab: {
//     backgroundColor: '#003366',
//     opacity: 1,
//     // Removed borderBottomWidth, borderBottomColor
//     borderBottomWidth: 3,
//     borderBottomColor: '#00D8FF',
//     paddingVertical: 12,
//   },
//   activeTabText: {
//     color: '#FFFFFF',
//   },
// });

// export default GalleryTabs;

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const GalleryTabs = ({ activeTab, setActiveTab }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.tab, activeTab === 'Images' && styles.activeTab]}
        onPress={() => setActiveTab('Images')}
      >
        <Text style={[styles.tabText, activeTab === 'Images' && styles.activeTabText]}>
          Images
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.tab, activeTab === 'Videos' && styles.activeTab]}
        onPress={() => setActiveTab('Videos')}
      >
        <Text style={[styles.tabText, activeTab === 'Videos' && styles.activeTabText]}>
          Videos
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: hp('2%'),

    marginHorizontal: wp('3%'),
    // elevation: 10, // Adds shadow for a raised effect
  },
  tab: {
    paddingVertical: hp('1.5%'),
    paddingHorizontal: wp('5%'),
    borderRadius: 10,
    marginHorizontal: wp('2%'),
    alignItems: 'center',
    backgroundColor: '#1E2A47', // Dark blue background for inactive tabs
    opacity: 0.8, // Slight transparency for inactive tabs
  },
  tabText: {
    fontSize: wp('4%'),
    color: '#D1D8E0', // Light gray text for inactive tabs
    fontWeight: '600',
  },
  activeTab: {
    backgroundColor: '#003366', // Darker blue for active tab
    opacity: 1, // Full opacity for active tab
    borderBottomWidth: 3,
    borderBottomColor: '#00D8FF', // Blue highlight for active tab
    paddingVertical: hp('1.5%'),
  },
  activeTabText: {
    color: '#FFFFFF', // White text for active tab
  },
});

export default GalleryTabs;
