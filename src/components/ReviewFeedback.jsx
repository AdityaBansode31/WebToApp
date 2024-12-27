import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const ReviewFeedback = () => {
  const [rating, setRating] = useState(0); // Track the star rating
  const [review, setReview] = useState(''); // Track the review text
  const [feedbacks, setFeedbacks] = useState([]); // Store submitted feedback

  // Submit the review feedback
  const handleSubmit = () => {
    if (rating > 0 && review.trim() !== '') {
      const newFeedback = {
        id: feedbacks.length.toString(),
        rating,
        review,
      };
      setFeedbacks([...feedbacks, newFeedback]);
      setRating(0);
      setReview('');
    } else {
      alert('Please provide both rating and review');
    }
  };

  // Display the star rating
  const renderStars = () => {
    let stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <TouchableOpacity key={i} onPress={() => setRating(i)}>
          <FontAwesome
            name={i <= rating ? 'star' : 'star-o'}
            size={30}
            color={i <= rating ? '#FFD700' : '#ccc'}
          />
        </TouchableOpacity>
      );
    }
    return stars;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Leave a Review</Text>
      
      {/* Star Rating Section */}
      <View style={styles.starsContainer}>{renderStars()}</View>

      {/* Text Input for Review */}
      <TextInput
        style={styles.textInput}
        placeholder="Write your review here"
        value={review}
        onChangeText={(text) => setReview(text)}
        multiline
      />

      {/* Submit Button */}
      <Button title="Submit Review" onPress={handleSubmit} color="#007BFF" />

      {/* Display Submitted Feedback */}
      <FlatList
        data={feedbacks}
        renderItem={({ item }) => (
          <View style={styles.feedbackCard}>
            <View style={styles.starsContainer}>
              {Array.from({ length: item.rating }, (_, index) => (
                <FontAwesome key={index} name="star" size={20} color="#FFD700" />
              ))}
            </View>
            <Text style={styles.reviewText}>{item.review}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
        style={styles.feedbackList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    flex: 1,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  starsContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    height: 100,
    textAlignVertical: 'top',
  },
  feedbackCard: {
    padding: 15,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    backgroundColor: '#f9f9f9',
  },
  feedbackList: {
    marginTop: 20,
  },
  reviewText: {
    fontSize: 16,
    color: '#333',
  },
});

export default ReviewFeedback;
