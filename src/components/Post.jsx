import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const Post = () => (
  <View style={styles.post}>
    <View style={styles.header}>
      <Image source={{ uri: 'https://via.placeholder.com/50' }} style={styles.avatar} />
      <Text style={styles.name}>John Doe</Text>
    </View>
    <Text style={styles.content}>Congratulations on your new role!</Text>
    <View style={styles.footer}>
      <TouchableOpacity style={styles.button}><Text>Like</Text></TouchableOpacity>
      <TouchableOpacity style={styles.button}><Text>Comment</Text></TouchableOpacity>
    </View>
  </View>
);

const styles = StyleSheet.create({
  post: { borderWidth: 1, borderColor: '#ccc', padding: 10, marginVertical: 5, borderRadius: 5, backgroundColor: '#fff' },
  header: { flexDirection: 'row', alignItems: 'center' },
  avatar: { width: 50, height: 50, borderRadius: 25, marginRight: 10 },
  name: { fontWeight: 'bold', fontSize: 16 },
  content: { marginVertical: 10, fontSize: 14 },
  footer: { flexDirection: 'row', justifyContent: 'space-around' },
  button: { padding: 5 },
});

export default Post;
