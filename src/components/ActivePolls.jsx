import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Modal } from 'react-native';
import commonStyles from '../styles/commonStyles';
import pollData from '../data/polls.json'; // Updated data path

const ActivePolls = () => {
  const [polls, setPolls] = useState(pollData); // Load data from JSON
  const [votedPolls, setVotedPolls] = useState({}); // Track votes per poll
  const [isModalVisible, setIsModalVisible] = useState(false); // Modal visibility state
  const [modalMessage, setModalMessage] = useState(''); // Modal message to display

  const handleVote = (pollId, optionId) => {
    if (votedPolls[pollId]) {
      setModalMessage('You have already voted on this poll.');
      setIsModalVisible(true); // Show modal if already voted
      return;
    }

    const updatedPolls = polls.map((poll) => {
      if (poll.id === pollId) {
        return {
          ...poll,
          options: poll.options.map((option) =>
            option.id === optionId
              ? { ...option, votes: option.votes + 1 }
              : option
          ),
        };
      }
      return poll;
    });

    setPolls(updatedPolls);
    setVotedPolls({ ...votedPolls, [pollId]: optionId });
    setModalMessage('Thank you for your feedback!');
    setIsModalVisible(true); // Show modal after vote submission
  };

  const renderPoll = ({ item: poll }) => (
    <View style={[commonStyles.card, styles.pollCard]}>
      <Text style={styles.pollQuestion}>{poll.question}</Text>
      {poll.options.map((option) => (
        <TouchableOpacity
          key={option.id}
          style={[styles.pollOption, votedPolls[poll.id] === option.id && styles.selectedOption]}
          onPress={() => handleVote(poll.id, option.id)}
          disabled={!!votedPolls[poll.id]} // Disable options if already voted
        >
          <Text style={styles.optionText}>{option.text}</Text>
          {votedPolls[poll.id] && (
            <Text style={styles.voteCount}>{option.votes} votes</Text>
          )}
        </TouchableOpacity>
      ))}
    </View>
  );

  return (
    <View>
      <Text style={styles.activePollsTitle}>Active Polls</Text>
      <FlatList
        data={polls}
        keyExtractor={(item) => item.id}
        renderItem={renderPoll}
        horizontal // Horizontal scroll
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.pollList}
      />

      {/* Modal for Vote Submission */}
      <Modal
        visible={isModalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setIsModalVisible(false)} // Close modal
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>{modalMessage}</Text>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => setIsModalVisible(false)} // Close modal
            >
              <Text style={styles.modalButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  activePollsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#004A8F',
    marginVertical: 15,
    textAlign: 'center',
  },
  pollCard: {
    width: 300,
    marginRight: 15,
    padding: 20,
    borderRadius: 15,
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
    borderWidth: 1,
    borderColor: '#DDDDDD',
  },
  pollQuestion: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  pollOption: {
    padding: 12,
    marginVertical: 8,
    borderRadius: 10,
    backgroundColor: '#F8F9FA',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  selectedOption: {
    backgroundColor: '#00BFFF',
    borderColor: '#1E90FF',
  },
  optionText: {
    fontSize: 16,
    color: '#333',
  },
  voteCount: {
    fontSize: 14,
    color: '#666',
  },
  pollList: {
    paddingHorizontal: 10,
  },

  // Modal Styles
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  modalButton: {
    backgroundColor: '#004A8F',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  modalButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ActivePolls;
