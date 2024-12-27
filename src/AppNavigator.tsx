import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LandingPage from './components/LandingPage';
import HomePage from './components/HomePage';

import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';
import FormPage from './components/FormPage';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Landing" screenOptions={{headerShown: false,}}>
      <Stack.Screen name="Landing" component={LandingPage} />
      <Stack.Screen name="Home" component={HomePage} />
      <Stack.Screen name="Login" component={LoginPage} />
      <Stack.Screen name="SignUp" component={SignUpPage} />
      <Stack.Screen name="FormPage" component={FormPage} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
