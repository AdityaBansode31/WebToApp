
// import React, { useRef } from 'react';
// import {
//   Animated,
//   Text,
//   View,
//   Image,
//   TouchableOpacity,
//   StyleSheet,
//   Dimensions,
//   ScrollView,
// } from 'react-native';
// import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import LinearGradient from 'react-native-linear-gradient';

// const { width } = Dimensions.get('window');

// const ProfileModal = ({ visible, onClose }) => {
//   const translateX = useRef(new Animated.Value(-width)).current;

//   React.useEffect(() => {
//     if (visible) {
//       Animated.timing(translateX, {
//         toValue: 0,
//         duration: 300,
//         useNativeDriver: true,
//       }).start();
//     } else {
//       Animated.timing(translateX, {
//         toValue: -width,
//         duration: 300,
//         useNativeDriver: true,
//       }).start();
//     }
//   }, [visible]);

//   return (
//     <Animated.View
//       style={[
//         styles.sidebarContainer,
//         { transform: [{ translateX }] },
//       ]}
//     >
//       {/* Dark Blue Ocean Gradient */}
//       <LinearGradient
//         colors={['rgb(0,37,60)', 'rgb(0,68,82)', 'rgb(0,128,128)']}
//         style={styles.gradientBackground}
//       >
//         {/* Close Button */}
//         <TouchableOpacity onPress={onClose} style={styles.closeButton}>
//           <Text style={styles.closeText}>X</Text>
//         </TouchableOpacity>

//         {/* Header Section */}
//         <View style={styles.headerContainer}>
//           <Image
//             source={require('../assets/profile2.png')}
//             style={styles.profileImage}
//           />
//           <Text style={styles.name}>Aditya Bansode</Text>
//           <Text style={styles.designation}>Software Developer</Text>
//         </View>

//         {/* Scrollable List */}
//         <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
//           <TouchableOpacity style={styles.listItem}>
//             <FontAwesome name="home" size={20} color="white" />
//             <Text style={styles.listText}>Home</Text>
//           </TouchableOpacity>

//           {/* Events */}
//           <TouchableOpacity style={styles.listItem}>
//             <FontAwesome name="calendar" size={20} color="white" />
//             <Text style={styles.listText}>Events</Text>
//           </TouchableOpacity>

//           {/* Gallery */}
//           <TouchableOpacity style={styles.listItem}>
//             <FontAwesome name="folder" size={20} color="white" />
//             <Text style={styles.listText}>Gallery</Text>
//           </TouchableOpacity>

//           {/* Other Options */}
//           <TouchableOpacity style={styles.listItem}>
//             <FontAwesome name="file-text" size={20} color="white" />
//             <Text style={styles.listText}>Articles</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.listItem}>
//             <FontAwesome name="truck" size={20} color="white" />
//             <Text style={styles.listText}>Vendor Updates</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.listItem}>
//             <FontAwesome name="calendar-check-o" size={20} color="white" />
//             <Text style={styles.listText}>My Calendar</Text>
//           </TouchableOpacity>
//         </ScrollView>
//       </LinearGradient>
//     </Animated.View>
//   );
// };

// const styles = StyleSheet.create({
//   sidebarContainer: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     height: '100%',
//     width: width * 0.75,
//     zIndex: 1000,
//   },
//   gradientBackground: {
//     flex: 1,
//   },
//   closeButton: {
//     position: 'absolute',
//     top: 10,
//     right: 10,
//     zIndex: 1,
//   },
//   closeText: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: 'white',
//   },
//   headerContainer: {
//     alignItems: 'center',
//     paddingVertical: 20,
//   },
//   profileImage: {
//     width: 80,
//     height: 80,
//     borderRadius: 40,
//   },
//   name: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: 'white',
//     marginTop: 5,
//   },
//   designation: {
//     fontSize: 16,
//     color: 'white',
//   },
//   scrollContainer: {
//     paddingHorizontal: 10,
//   },
//   listItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingVertical: 15,
//     borderBottomWidth: 1,
//     borderBottomColor: 'rgba(255,255,255,0.2)',
//   },
//   listText: {
//     fontSize: 16,
//     color: 'white',
//     marginLeft: 15,
//   },
// });

// export default ProfileModal;

import React, { useRef } from 'react';
import {
  Animated,
  Text,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  ScrollView,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';

const { width } = Dimensions.get('window');

const ProfileModal = ({ visible, onClose, navigate }) => { // Accept navigate as a prop
  const translateX = useRef(new Animated.Value(-width)).current;

  React.useEffect(() => {
    if (visible) {
      Animated.timing(translateX, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(translateX, {
        toValue: -width,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  }, [visible]);

  const handleNavigation = (screenName) => {
    onClose(); // Close the sidebar
    navigate(screenName); // Navigate to the selected screen
  };

  return (
    <Animated.View
      style={[
        styles.sidebarContainer,
        { transform: [{ translateX }] },
      ]}
    >
      <LinearGradient
        colors={['rgb(0,37,60)', 'rgb(0,68,82)', 'rgb(0,128,128)']}
        style={styles.gradientBackground}
      >
        <TouchableOpacity onPress={onClose} style={styles.closeButton}>
          <Text style={styles.closeText}>X</Text>
        </TouchableOpacity>

        <View style={styles.headerContainer}>
          <Image
            source={require('../assets/profile2.png')}
            style={styles.profileImage}
          />
          <Text style={styles.name}>Aditya Bansode</Text>
          <Text style={styles.designation}>Software Developer</Text>
        </View>

        <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        <TouchableOpacity
            style={styles.listItem}
            onPress={() => handleNavigation('RecursiveApp')} // Navigate to Events screen
          >
            <FontAwesome name="home" size={20} color="white" />
            <Text style={styles.listText}>Home</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.listItem}
            onPress={() => handleNavigation('Events')} // Navigate to Events screen
          >
            <FontAwesome name="calendar" size={20} color="white" />
            <Text style={styles.listText}>Events</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.listItem}
            onPress={() => handleNavigation('Gallery')} // Navigate to Gallery screen
          >
            <FontAwesome name="folder" size={20} color="white" />
            <Text style={styles.listText}>Gallery</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.listItem}
            onPress={() => handleNavigation('Articles')} // Navigate to Articles (placeholder)
          >
            <FontAwesome name="file-text" size={20} color="white" />
            <Text style={styles.listText}>Articles</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.listItem}
            onPress={() => handleNavigation('VendorUpdates')} // Navigate to Vendor Updates (placeholder)
          >
            <FontAwesome name="truck" size={20} color="white" />
            <Text style={styles.listText}>Vendor Updates</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.listItem}
            onPress={() => handleNavigation('MyCalendar')} // Navigate to My Calendar (placeholder)
          >
            <FontAwesome name="calendar-check-o" size={20} color="white" />
            <Text style={styles.listText}>My Calendar</Text>
          </TouchableOpacity>
        </ScrollView>
      </LinearGradient>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  sidebarContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: width * 0.75,
    zIndex: 1000,
  },
  gradientBackground: {
    flex: 1,
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 1,
  },
  closeText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  headerContainer: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 5,
  },
  designation: {
    fontSize: 16,
    color: 'white',
  },
  scrollContainer: {
    paddingHorizontal: 10,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255,255,255,0.2)',
  },
  listText: {
    fontSize: 16,
    color: 'white',
    marginLeft: 15,
  },
});

export default ProfileModal;
  