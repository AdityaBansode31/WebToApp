import React from 'react';
import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import articlesData from '../data/articles.json';

// Static image mapping for tech-related articles
const articleImages = {
  'Introduction to Cloud Computing': require('../assets/cloud.png'),
  'Understanding Artificial Intelligence': require('../assets/AI.png'),
  'The Future of 5G Networks': require('../assets/5G.png'),
  'Introduction to Blockchain Technology': require('../assets/Blockchain.png'),
  'Best Practices for DevOps in Software Development': require('../assets/DevOps.png'),
};

const ArticlesScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={articlesData}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.articleContainer}>
            {/* Image Rendering based on article title */}
            <Image source={articleImages[item.title]} style={styles.articleImage} />

            <View style={styles.textContainer}>
              <Text style={styles.articleTitle}>{item.title}</Text>
              <Text style={styles.articleDescription}>{item.description}</Text>
              <Text style={styles.articleContent}>{item.content}</Text>
            </View>

            <View style={styles.footerContainer}>
              <Text style={styles.articleAuthor}>By: {item.author}</Text>
              <Text style={styles.articleDate}>{item.date}</Text>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.flatListContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9', // Soft background color similar to YouTube's UI
    paddingTop: 10,
    paddingBottom: 10,
    paddingHorizontal: 15,
  },
  articleContainer: {
    marginBottom: 20, // Spacing between articles
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 8, // Rounded corners for each article
  },
  articleImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 12,
    resizeMode: 'cover',
  },
  textContainer: {
    paddingBottom: 10,
  },
  articleTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 6,
  },
  articleDescription: {
    fontSize: 14,
    color: '#555555',
    marginBottom: 8,
  },
  articleContent: {
    fontSize: 13,
    color: '#777777',
    marginBottom: 12,
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  articleAuthor: {
    fontSize: 12,
    color: '#0081FF',
    fontWeight: 'bold',
  },
  articleDate: {
    fontSize: 12,
    color: '#AAAAAA',
  },
  flatListContent: {
    paddingBottom: 10,
  },
});

export default ArticlesScreen;
