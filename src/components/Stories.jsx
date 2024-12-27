import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const AppShortcuts = () => (
  <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.container}>
    <View style={styles.iconWrapper}>
      <Text style={styles.icon}>📱</Text>
      <Text style={styles.label}>My Apps</Text>
    </View>
    <View style={styles.iconWrapper}>
      <Text style={styles.icon}>📖</Text>
      <Text style={styles.label}>My Stories</Text>
    </View>
    <View style={styles.iconWrapper}>
      <Text style={styles.icon}>🎉</Text>
      <Text style={styles.label}>My Events</Text>
    </View>
  </ScrollView>
);

const styles = StyleSheet.create({
  container: { marginVertical: 10, paddingHorizontal: 10 },
  iconWrapper: { alignItems: 'center', marginRight: 20 },
  icon: { fontSize: 40 },
  label: { marginTop: 5, fontSize: 12, fontWeight: '600' },
});

export default AppShortcuts;
