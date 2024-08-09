import React, { useState } from 'react';  
import { View, Text, StyleSheet, FlatList, ActivityIndicator, TouchableOpacity, Modal, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const generateRandomActivity = (date) => {
  return {
    id: date.toISOString(),
    date: date.toISOString().split('T')[0], 
    steps: Math.floor(Math.random() * 10000),
    exercise: Math.floor(Math.random() * 60), 
    calories: Math.floor(Math.random() * 500),
  };
};

const generateActivitiesInRange = (startDate, endDate) => {
  const activities = [];
  let currentDate = new Date(startDate);

  while (currentDate <= endDate) {
    activities.push(generateRandomActivity(currentDate));
    currentDate.setDate(currentDate.getDate() + 1); 
  }

  return activities;
};

const ActivityLogScreen = () => {
  const [activities, setActivities] = useState([]);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [showStartPicker, setShowStartPicker] = useState(false);
  const [showEndPicker, setShowEndPicker] = useState(false);
  const [loading, setLoading] = useState(false);

  const onDateChange = (event, selectedDate, type) => {
    if (event.type === 'set') {
      if (type === 'start') {
        setStartDate(selectedDate || startDate);
        setShowStartPicker(false);
      } else if (type === 'end') {
        setEndDate(selectedDate || endDate);
        setShowEndPicker(false);
      }
    } else {
      if (type === 'start') {
        setShowStartPicker(false);
      } else if (type === 'end') {
        setShowEndPicker(false);
      }
    }
  };

  const onGenerateActivities = () => {
    setLoading(true);
    setTimeout(() => {
      const generatedActivities = generateActivitiesInRange(startDate, endDate);
      setActivities(generatedActivities);
      setLoading(false);
    }, 1000); // Simulating a delay
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Activity Log</Text>
      
      <View style={styles.datePickerContainer}>
        <TouchableOpacity style={styles.button} onPress={() => setShowStartPicker(true)}>
          <Text style={styles.buttonText}>Select Start Date</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => setShowEndPicker(true)}>
          <Text style={styles.buttonText}>Select End Date</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.generateButton} onPress={onGenerateActivities}>
        <Text style={styles.buttonText}>Generate Activities</Text>
      </TouchableOpacity>

      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <FlatList
          data={activities}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <View style={styles.logItem}>
              <Text style={styles.logText}>Date: {item.date}</Text>
              <Text style={styles.logText}>Steps: {item.steps}</Text>
              <Text style={styles.logText}>Exercise: {item.exercise} min</Text>
              <Text style={styles.logText}>Calories Burned: {item.calories}</Text>
            </View>
          )}
        />
      )}

      {/* Date Picker Modals */}
      <Modal
        visible={showStartPicker || showEndPicker}
        transparent
        animationType="slide"
        onRequestClose={() => {
          setShowStartPicker(false);
          setShowEndPicker(false);
        }}
      >
        <View style={styles.modalContainer}>
          {showStartPicker && (
            <DateTimePicker
              value={startDate}
              mode="date"
              display={Platform.OS === 'ios' ? 'inline' : 'default'}
              onChange={(event, selectedDate) => onDateChange(event, selectedDate, 'start')}
            />
          )}
          {showEndPicker && (
            <DateTimePicker
              value={endDate}
              mode="date"
              display={Platform.OS === 'ios' ? 'inline' : 'default'}
              onChange={(event, selectedDate) => onDateChange(event, selectedDate, 'end')}
            />
          )}
          <TouchableOpacity style={styles.modalCloseButton} onPress={() => {
            setShowStartPicker(false);
            setShowEndPicker(false);
          }}>
            <Text style={styles.buttonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  datePickerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  logItem: {
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  logText: {
    fontSize: 16,
    marginBottom: 5,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  generateButton: {
    backgroundColor: '#28a745',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 20,
  },
  modalCloseButton: {
    backgroundColor: '#dc3545',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
});

export default ActivityLogScreen;
