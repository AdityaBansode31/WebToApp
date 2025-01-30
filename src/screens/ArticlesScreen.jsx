import React from 'react';
import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
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
    paddingTop: hp('1%'),
    paddingBottom: hp('1%'),
    paddingHorizontal: wp('3%'),
  },
  articleContainer: {
    marginBottom: hp('2%'), // Spacing between articles
    paddingHorizontal: wp('3%'),
    paddingVertical: hp('1%'),
    borderRadius: 8, // Rounded corners for each article
    width: wp('90%'), // Width relative to screen size
    alignSelf: 'center', // Center the card horizontally
    maxWidth: 600, // Max width for tablets and larger screens
  },
  articleImage: {
    width: '100%',
    height: hp('25%'),
    borderRadius: 8,
    marginBottom: hp('1.5%'),
    resizeMode: 'cover',
  },
  textContainer: {
    paddingBottom: hp('1%'),
  },
  articleTitle: {
    fontSize: wp('5%'),
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: hp('0.5%'),
  },
  articleDescription: {
    fontSize: wp('4%'),
    color: '#555555',
    marginBottom: hp('0.5%'),
  },
  articleContent: {
    fontSize: wp('3.5%'),
    color: '#777777',
    marginBottom: hp('1%'),
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  articleAuthor: {
    fontSize: wp('3.5%'),
    color: '#0081FF',
    fontWeight: 'bold',
  },
  articleDate: {
    fontSize: wp('3.5%'),
    color: '#AAAAAA',
  },
  flatListContent: {
    paddingBottom: hp('1%'),
  },
});

export default ArticlesScreen;
