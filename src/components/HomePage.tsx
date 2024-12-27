import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import Header from './Header';
import Banner from './Banner';
import AppShortcuts from './AppShortcuts';
import Post from './Post';
import FooterNavigation from './FooterNavigation';

const HomePage = () => (
  <View style={styles.container}>
    <Header />
    <ScrollView>
      <Banner />
      <AppShortcuts />
      <Post />
      <Post />
    </ScrollView>
    <FooterNavigation />
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5' },
});

export default HomePage;
