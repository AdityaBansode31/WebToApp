
// import React, { useState } from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import HomeScreen from './src/screens/HomeScreen'; // Import HomeScreen
// import FontAwesome from 'react-native-vector-icons/FontAwesome'; // Optional: For Icons
// import { TouchableOpacity, TextInput, StyleSheet, View, Modal, Text, ScrollView } from 'react-native';
// import ProfileModal from './src/components/ProfileModal'; // Import ProfileModal
// import employeeData from './src/data/employeeData.json'; 
// import FeedScreen from './src/screens/FeedScreen';
// import { createStackNavigator } from '@react-navigation/stack';
// import EventsScreen from './src/screens/EventsScreen';
// import GalleryScreen from './src/screens/GalleryScreen';




// const Tab = createBottomTabNavigator();
// const Stack = createStackNavigator();

// // // Create a navigation reference
// export const navigationRef = React.createRef();

// // Utility to navigate globally
// export const navigate = (name, params) => {
//   navigationRef.current?.navigate(name, params);
// };



// const headerStyle = {
//   backgroundColor: 'rgb(0,37,60)', // Base color for the header (dark ocean)
//   background: 'linear-gradient(90deg, rgba(0,37,60,1) 0%, rgba(0,68,82,1) 50%, rgba(0,128,128,1) 100%)', // Dark ocean gradient for header
// };

// const footerStyle = {
//   backgroundColor: 'rgb(0,37,60)', // Base color for the footer (dark ocean)
//   background: 'linear-gradient(90deg, rgba(0,37,60,1) 0%, rgba(0,68,82,1) 50%, rgba(0,128,128,1) 100%)', // Dark ocean gradient for footer
// };

// export default function App() {
//   const [modalVisible, setModalVisible] = useState(false); // Modal visibility state
//   const [searchVisible, setSearchVisible] = useState(false); // Toggle visibility of search input
  
//   const [searchQuery, setSearchQuery] = useState(''); // Store search input text
//   const [notificationVisible, setNotificationVisible] = useState(false); // State for notification popup

//   // Function to handle opening the modal when Profile is clicked
//   const handleProfileClick = () => {
//     setModalVisible(true); // Open the modal when Profile tab is clicked
//   };

//   // Function to toggle search visibility
//   const handleSearchClick = () => {
//     setSearchVisible(!searchVisible); // Toggle search input visibility
//   };

//   // Function to toggle notification popup visibility
//   const toggleNotification = () => {
//     setNotificationVisible(!notificationVisible); // Toggle notification popup visibility
//   };

//   return (
//     <NavigationContainer>
//       <Tab.Navigator
//         screenOptions={{
//           headerStyle: headerStyle, // Apply header gradient
//           headerTintColor: '#fff', // Header text color
//           headerTitleStyle: {
//             fontWeight: 'bold', // Header title style
//           },
//           headerRight: () => (
//             <View style={{ flexDirection: 'row', alignItems: 'center' }}>
//               {/* If search input is not visible, show the search icon */}
//               {!searchVisible ? (
//                 <TouchableOpacity
//                   style={{ paddingRight: 15 }} // Add some right padding to space the icon
//                   onPress={handleSearchClick} // Toggle search input visibility
//                 >
//                   <FontAwesome name="search" size={20} color="#fff" />
//                 </TouchableOpacity>
//               ) : (
//                 // If search input is visible, show the input field
//                 <TextInput
//                   style={styles.searchInput}
//                   value={searchQuery}
//                   onChangeText={setSearchQuery}
//                   placeholder="Search..."
//                   placeholderTextColor="#ccc"
//                   autoFocus
//                 />
//               )}
//               {/* Notification Bell Icon */}
//               <TouchableOpacity
//                 style={{ paddingRight: 15 }}
//                 onPress={toggleNotification} // Toggle notification popup visibility
//               >
//                 <FontAwesome name="bell" size={20} color="#fff" />
//               </TouchableOpacity>
//             </View>
//           ),
//           tabBarStyle: footerStyle, // Apply footer gradient
//         }}
//       >

//         <Tab.Screen
//           name="Home"
//           component={HomeScreen}
//           options={{
//             tabBarIcon: ({ color, size }) => (
//               <FontAwesome name="home" size={size} color={color} />
//             ),
//             headerTitle: 'Sciqus',  // Custom header title
//           }}
//         />
//         <Tab.Screen
//           name="Feed"
//           component={FeedScreen}
//           options={{
//             tabBarIcon: ({ color, size }) => (
//               <FontAwesome name="newspaper-o" size={size} color={color} />
//             ),
//             headerTitle: 'Feed',  // Custom header title
//           }}
//         />
//         <Tab.Screen
//           name="Search"
//           component={HomeScreen}
//           options={{
//             tabBarIcon: ({ color, size }) => (
//               <FontAwesome name="search" size={size} color={color} />
//             ),
//             headerTitle: 'Search',  // Custom header title
//           }}
//         />
//         <Tab.Screen
//           name="Profile"
//           component={HomeScreen}
//           options={{
//             tabBarIcon: ({ color, size }) => (
//               <FontAwesome name="user" size={size} color={color} />
//             ),
//             headerTitle: 'Profile',  // Custom header title
//             tabBarButton: (props) => (
//               <TouchableOpacity
//                 {...props}
//                 style={styles.tabButton}
//                 onPress={handleProfileClick} // Open the modal on press
//               >
//                 <FontAwesome name="user" size={25} color="#fff" />
//               </TouchableOpacity>
//             ),
//           }}
//         />
//       </Tab.Navigator>

//       {/* Notification Modal */}
//       <Modal
//         transparent={true}
//         visible={notificationVisible}
//         animationType="fade"
//         onRequestClose={toggleNotification} // Close on back press
//       >
//         <View style={styles.modalOverlay}>
//           <View style={styles.modalContent}>
//             <Text style={styles.modalTitle}>Employee Birthdays and Events</Text>
            
//             <ScrollView style={styles.scrollView}>
//               <Text style={styles.sectionTitle}>Birthdays:</Text>
//               {employeeData.birthdays.map((employee, index) => (
//                 <Text key={index} style={styles.modalText}>
//                   {employee.name} - {employee.date}
//                 </Text>
//               ))}
//               <Text style={styles.sectionTitle}>Upcoming Events:</Text>
//               {employeeData.events.map((event, index) => (
//                 <Text key={index} style={styles.modalText}>
//                   {event.title} - {event.date}
//                 </Text>
//               ))}
//             </ScrollView>

//             <TouchableOpacity style={styles.closeButton} onPress={toggleNotification}>
//               <Text style={styles.closeButtonText}>Close</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </Modal>

//       {/* Use the ProfileModal component */}
//       <ProfileModal
//         visible={modalVisible}
//         onClose={() => setModalVisible(false)} // Close the modal
//       />


      



//     </NavigationContainer>
//   );
// }

// // Styles for the bottom tab buttons and content
// const styles = StyleSheet.create({
//   tabButton: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingBottom: 10,  // Align icons better
//   },
//   searchInput: {
//     backgroundColor: 'rgba(255, 255, 255, 0.8)',
//     borderRadius: 20,
//     paddingHorizontal: 10,
//     paddingVertical: 5,
//     marginRight: 15,
//     width: 150, // Control the width of the input field
//   },
//   modalOverlay: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//   },
//   modalContent: {
//     width: 300,
//     padding: 20,
//     backgroundColor: '#fff',
//     borderRadius: 12,
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     shadowOffset: { width: 0, height: 2 },
//     shadowRadius: 10,
//     elevation: 5,
//   },
//   modalTitle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: '#333',
//     marginBottom: 15,
//   },
//   modalText: {
//     fontSize: 16,
//     color: '#555',
//     marginBottom: 15,
//   },
//   closeButton: {
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     backgroundColor: '#007BFF',
//     borderRadius: 8,
//     alignItems: 'center',
//   },
//   closeButtonText: {
//     color: 'white',
//     fontWeight: 'bold',
//     fontSize: 16,
//   },
// });

// import React, { useState } from 'react';
// import { NavigationContainer } from '@react-navigation/native';  // Ensure NavigationContainer is imported
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createStackNavigator } from '@react-navigation/stack';
// import HomeScreen from './src/screens/HomeScreen';  // Import screens
// import FeedScreen from './src/screens/FeedScreen';
// import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import { TouchableOpacity, TextInput, View, Modal, Text, ScrollView, StyleSheet } from 'react-native';
// import ProfileModal from './src/components/ProfileModal';  // Import ProfileModal
// import employeeData from './src/data/employeeData.json';

// const Tab = createBottomTabNavigator();
// const Stack = createStackNavigator();

// const headerStyle = {
//   backgroundColor: 'rgb(0,37,60)',
// };

// const footerStyle = {
//   backgroundColor: 'rgb(0,37,60)',
// };

// export default function App() {
//   const [modalVisible, setModalVisible] = useState(false);
//   const [searchVisible, setSearchVisible] = useState(false);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [notificationVisible, setNotificationVisible] = useState(false);

//   const handleProfileClick = () => {
//     setModalVisible(true);
//   };

//   const handleSearchClick = () => {
//     setSearchVisible(!searchVisible);
//   };

//   const toggleNotification = () => {
//     setNotificationVisible(!notificationVisible);
//   };

//   return (
//     // Ensure NavigationContainer wraps everything in the app
//     <NavigationContainer>  
//       <Tab.Navigator
//         screenOptions={{
//           headerStyle: headerStyle,
//           headerTintColor: '#fff',
//           tabBarStyle: footerStyle,
//         }}
//       >
//         <Tab.Screen
//           name="Home"
//           component={HomeScreen}
//           options={{
//             tabBarIcon: ({ color, size }) => <FontAwesome name="home" size={size} color={color} />,
//           }}
//         />
//         <Tab.Screen
//           name="Feed"
//           component={FeedScreen}
//           options={{
//             tabBarIcon: ({ color, size }) => <FontAwesome name="newspaper-o" size={size} color={color} />,
//           }}
//         />
//         <Tab.Screen
//           name="Profile"
//           component={HomeScreen}
//           options={{
//             tabBarIcon: ({ color, size }) => <FontAwesome name="user" size={size} color={color} />,
//             tabBarButton: (props) => (
//               <TouchableOpacity {...props} style={styles.tabButton} onPress={handleProfileClick}>
//                 <FontAwesome name="user" size={25} color="#fff" />
//               </TouchableOpacity>
//             ),
//           }}
//         />
//       </Tab.Navigator>

//       {/* Profile Modal */}
//       <ProfileModal visible={modalVisible} onClose={() => setModalVisible(false)} />

//       {/* Notification Modal */}
//       <Modal transparent={true} visible={notificationVisible} animationType="fade" onRequestClose={toggleNotification}>
//         <View style={styles.modalOverlay}>
//           <View style={styles.modalContent}>
//             <Text style={styles.modalTitle}>Employee Birthdays and Events</Text>
//             <ScrollView style={styles.scrollView}>
//               <Text style={styles.sectionTitle}>Birthdays:</Text>
//               {employeeData.birthdays.map((employee, index) => (
//                 <Text key={index} style={styles.modalText}>
//                   {employee.name} - {employee.date}
//                 </Text>
//               ))}
//               <Text style={styles.sectionTitle}>Upcoming Events:</Text>
//               {employeeData.events.map((event, index) => (
//                 <Text key={index} style={styles.modalText}>
//                   {event.title} - {event.date}
//                 </Text>
//               ))}
//             </ScrollView>
//             <TouchableOpacity style={styles.closeButton} onPress={toggleNotification}>
//               <Text style={styles.closeButtonText}>Close</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </Modal>
//     </NavigationContainer>
//   );
// }

// // Styles for the bottom tab buttons and content
// const styles = StyleSheet.create({
//   tabButton: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingBottom: 10,
//   },
//   modalOverlay: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//   },
//   modalContent: {
//     width: 300,
//     padding: 20,
//     backgroundColor: '#fff',
//     borderRadius: 12,
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     shadowOffset: { width: 0, height: 2 },
//     shadowRadius: 10,
//     elevation: 5,
//   },
//   modalTitle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: '#333',
//     marginBottom: 15,
//   },
//   modalText: {
//     fontSize: 16,
//     color: '#555',
//     marginBottom: 15,
//   },
//   closeButton: {
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     backgroundColor: '#007BFF',
//     borderRadius: 8,
//     alignItems: 'center',
//   },
//   closeButtonText: {
//     color: 'white',
//     fontWeight: 'bold',
//     fontSize: 16,
//   },
// });
 
// import React, { useState } from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createStackNavigator } from '@react-navigation/stack';
// import {
//   TouchableOpacity,
//   Text,
//   View,
//   Modal,
//   ScrollView,
//   StyleSheet,
// } from 'react-native';
// import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import HomeScreen from './src/screens/HomeScreen';
// import FeedScreen from './src/screens/FeedScreen';
// import EventsScreen from './src/screens/EventsScreen';
// import GalleryScreen from './src/screens/GalleryScreen';
// import ProfileModal from './src/components/ProfileModal'; // Sidebar navigation component
// import employeeData from './src/data/employeeData.json';
// import ArticlesScreen from './src/screens/ArticlesScreen';
// import VendorUpdatesScreen from './src/screens/VendorUpdatesScreen';
// import MyCalendarScreen from './src/screens/MyCalendarScreen';

// const Tab = createBottomTabNavigator();
// const Stack = createStackNavigator();

// export const navigationRef = React.createRef();
// export const navigate = (name, params) => {
//   navigationRef.current?.navigate(name, params);
// };

// const headerStyle = {
//   backgroundColor: 'rgb(0,37,60)',
// };

// const footerStyle = {
//   backgroundColor: 'rgb(0,37,60)',
// };

// const BottomTabs = ({ handleProfileClick }) => (
//   <Tab.Navigator
//     screenOptions={{
//       headerStyle: headerStyle,
//       headerTintColor: '#fff',
//       tabBarStyle: footerStyle,
//     }}
//   >
//     <Tab.Screen
//       name="Home"
//       component={HomeScreen}
//       options={{
//         tabBarIcon: ({ color, size }) => (
//           <FontAwesome name="home" size={size} color={color} />
//         ),
//       }}
//     />
//     <Tab.Screen
//       name="Feed"
//       component={FeedScreen}
//       options={{
//         tabBarIcon: ({ color, size }) => (
//           <FontAwesome name="newspaper-o" size={size} color={color} />
//         ),
//       }}
//     />
//     <Tab.Screen
//       name="Profile"
//       component={HomeScreen} // Placeholder, navigation is handled via ProfileModal
//       options={{
//         tabBarIcon: ({ color, size }) => (
//           <FontAwesome name="user" size={size} color={color} />
//         ),
//         tabBarButton: (props) => (
//           <TouchableOpacity
//             {...props}
//             style={styles.tabButton}
//             onPress={handleProfileClick}
//           >
//             <FontAwesome name="user" size={25} color="#fff" />
//           </TouchableOpacity>
//         ),
//       }}
//     />
//   </Tab.Navigator>
// );

// export default function App() {
//   const [modalVisible, setModalVisible] = useState(false);
//   const [notificationVisible, setNotificationVisible] = useState(false);

//   const toggleNotification = () => setNotificationVisible(!notificationVisible);
//   const handleProfileClick = () => setModalVisible(true);

//   return (
//     <NavigationContainer ref={navigationRef}>
//       {/* Sidebar Modal */}
//       <ProfileModal
//         visible={modalVisible}
//         onClose={() => setModalVisible(false)}
//         navigate={navigate}
//       />

//       <Stack.Navigator>
//         {/* Bottom Tabs */}
//         <Stack.Screen
//           name="Main"
//           options={{ headerShown: false }}
//         >
//           {() => <BottomTabs handleProfileClick={handleProfileClick} />}
//         </Stack.Screen>
//         {/* Other Stack Screens */}
//         <Stack.Screen name="Events" component={EventsScreen} />
//         <Stack.Screen name="Gallery" component={GalleryScreen} />
//         <Stack.Screen name="Articles" component={ArticlesScreen} />
//         <Stack.Screen name="VendorUpdates" component={VendorUpdatesScreen} />
//         <Stack.Screen name="MyCalendar" component={MyCalendarScreen} />

//       </Stack.Navigator>

//       {/* Notification Modal */}
//       <Modal
//         transparent={true}
//         visible={notificationVisible}
//         animationType="fade"
//         onRequestClose={toggleNotification}
//       >
//         <View style={styles.modalOverlay}>
//           <View style={styles.modalContent}>
//             <Text style={styles.modalTitle}>Employee Birthdays and Events</Text>
//             <ScrollView style={styles.scrollView}>
//               <Text style={styles.sectionTitle}>Birthdays:</Text>
//               {employeeData.birthdays.map((employee, index) => (
//                 <Text key={index} style={styles.modalText}>
//                   {employee.name} - {employee.date}
//                 </Text>
//               ))}
//               <Text style={styles.sectionTitle}>Upcoming Events:</Text>
//               {employeeData.events.map((event, index) => (
//                 <Text key={index} style={styles.modalText}>
//                   {event.title} - {event.date}
//                 </Text>
//               ))}
//             </ScrollView>
//             <TouchableOpacity style={styles.closeButton} onPress={toggleNotification}>
//               <Text style={styles.closeButtonText}>Close</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </Modal>
//     </NavigationContainer>
//   );
// }

// const styles = StyleSheet.create({
//   tabButton: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingBottom: 10,
//   },
//   modalOverlay: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//   },
//   modalContent: {
//     width: 300,
//     padding: 20,
//     backgroundColor: '#fff',
//     borderRadius: 12,
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     shadowOffset: { width: 0, height: 2 },
//     shadowRadius: 10,
//     elevation: 5,
//   },
//   modalTitle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: '#333',
//     marginBottom: 15,
//   },
//   modalText: {
//     fontSize: 16,
//     color: '#555',
//     marginBottom: 15,
//   },
//   closeButton: {
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     backgroundColor: '#007BFF',
//     borderRadius: 8,
//     alignItems: 'center',
//   },
//   closeButtonText: {
//     color: 'white',
//     fontWeight: 'bold',
//     fontSize: 16,
//   },
// });

import React, { useState } from 'react';
import { NavigationContainer, NavigationIndependentTree } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import {
  TouchableOpacity,
  Text,
  View,
  Modal,
  ScrollView,
  StyleSheet,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import HomeScreen from './src/screens/HomeScreen';
import FeedScreen from './src/screens/FeedScreen';
import EventsScreen from './src/screens/EventsScreen';
import GalleryScreen from './src/screens/GalleryScreen';
import ProfileModal from './src/components/ProfileModal'; // Sidebar navigation component
import employeeData from './src/data/employeeData.json';
import ArticlesScreen from './src/screens/ArticlesScreen';
import VendorUpdatesScreen from './src/screens/VendorUpdatesScreen';
import MyCalendarScreen from './src/screens/MyCalendarScreen';
import LinearGradient from 'react-native-linear-gradient'; // Importing LinearGradient

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export const navigationRef = React.createRef();
export const navigate = (name, params) => {
  navigationRef.current?.navigate(name, params);
};

const footerStyle = {
  backgroundColor: 'rgb(0,37,60)',
};

const BottomTabs = ({ handleProfileClick }) => (
  <Tab.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: 'rgb(0, 37, 60)', // Keep Home header the same
      },
      headerTintColor: '#fff',
      tabBarStyle: footerStyle,
    }}
  >
    <Tab.Screen
      name="Home"
      component={HomeScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <FontAwesome name="home" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Feed"
      component={FeedScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <FontAwesome name="newspaper-o" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={HomeScreen} // Placeholder, navigation is handled via ProfileModal
      options={{
        tabBarIcon: ({ color, size }) => (
          <FontAwesome name="user" size={size} color={color} />
        ),
        tabBarButton: (props) => (
          <TouchableOpacity
            {...props}
            style={styles.tabButton}
            onPress={handleProfileClick}
          >
            <FontAwesome name="user" size={wp('6%')} color="#fff" />
          </TouchableOpacity>
        ),
      }}
    />
  </Tab.Navigator>
);

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [notificationVisible, setNotificationVisible] = useState(false);

  const toggleNotification = () => setNotificationVisible(!notificationVisible);
  const handleProfileClick = () => setModalVisible(true);

  const renderHeader = (title) => {
    return (
      <LinearGradient
      colors={['#000f5e', '#003c8f']}
      style={styles.headerGradient}
    >
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={handleProfileClick} style={styles.menuIcon}>
          <FontAwesome name="bars" size={wp('6%')} color="#fff" />
        </TouchableOpacity>
        <View style={styles.titleContainer}> {/* New View for the title */}
          <Text style={styles.headerText}>{title}</Text>
        </View>
        <View style={{ width: 40 }} />
      </View>
    </LinearGradient>
    );
  };

  return (
    <NavigationContainer ref={navigationRef}>
      {/* Sidebar Modal */}
      <ProfileModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        navigate={navigate}
      />

      <Stack.Navigator>
        {/* Bottom Tabs */}
        <Stack.Screen
          name="Main"
          options={{ headerShown: false }}
        >
          {() => <BottomTabs handleProfileClick={handleProfileClick} />}
        </Stack.Screen>
        <Stack.Screen
          name="Events"
          component={EventsScreen}
          options={{ header: () => renderHeader("Events") }}
        />
        <Stack.Screen
          name="Gallery"
          component={GalleryScreen}
          options={{ header: () => renderHeader("Gallery") }}
        />
        <Stack.Screen
          name="Articles"
          component={ArticlesScreen}
          options={{ header: () => renderHeader("Articles") }}
        />
        <Stack.Screen
          name="VendorUpdates"
          component={VendorUpdatesScreen}
          options={{ header: () => renderHeader("VendorUpdates") }}
        />
        <Stack.Screen
          name="MyCalendar"
          component={MyCalendarScreen}
          options={{ header: () => renderHeader("MyCalendar") }}
        />
        <Stack.Screen
          name="RecursiveApp"
          options={{ headerShown: false }}
        >
          {() => (
            <NavigationIndependentTree> {/* Wrap in NavigationIndependentTree */}
              <App /> {/* Recursive rendering */}
            </NavigationIndependentTree>
          )}
        </Stack.Screen>
      </Stack.Navigator>

      {/* Notification Modal */}
      <Modal
        transparent={true}
        visible={notificationVisible}
        animationType="fade"
        onRequestClose={toggleNotification}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Employee Birthdays and Events</Text>
            <ScrollView style={styles.scrollView}>
              <Text style={styles.sectionTitle}>Birthdays:</Text>
              {employeeData.birthdays.map((employee, index) => (
                <Text key={index} style={styles.modalText}>
                  {employee.name} - {employee.date}
                </Text>
              ))}
              <Text style={styles.sectionTitle}>Upcoming Events:</Text>
              {employeeData.events.map((event, index) => (
                <Text key={index} style={styles.modalText}>
                  {event.title} - {event.date}
                </Text>
              ))}
            </ScrollView>
            <TouchableOpacity style={styles.closeButton} onPress={toggleNotification}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  tabButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: wp('2%'),
  },
  headerGradient: {
    height: hp('8%'), // Responsive height
    justifyContent: 'center',  // Center vertically
    paddingHorizontal: wp('5%'), // Consistent horizontal padding
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // Distribute space evenly
    width: '100%',
  },
  titleContainer: { // Style for the title container
    flex: 1, // Allow title to take up available space
    alignItems: 'center', // Center the text horizontally within its container
    justifyContent: 'center', // Center the text vertically
  },
  headerText: {
    color: '#fff',
    fontSize: wp('4.5%'), // Responsive font size
    fontWeight: 'bold',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: wp('80%'), // Responsive width
    padding: wp('5%'),
    backgroundColor: '#fff',
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 5,
  },
  modalTitle: {
    fontSize: wp('5%'), // Responsive font size
    fontWeight: 'bold',
    color: '#333',
    marginBottom: wp('3%'),
  },
  modalText: {
    fontSize: wp('4%'), // Responsive font size
    color: '#555',
    marginBottom: wp('2%'),
  },
  closeButton: {
    paddingVertical: hp('1.5%'),
    paddingHorizontal: wp('5%'),
    backgroundColor: '#007BFF',
    borderRadius: 8,
    alignItems: 'center',
  },
  closeButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: wp('4%'), // Responsive font size
  },
});

