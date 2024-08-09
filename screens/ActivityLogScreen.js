import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const ActivityLogScreen = () => {
  const [activities, setActivities] = useState([
    { id: '1', date: '2024-08-01', activity: 'Ran 5km' },
    { id: '2', date: '2024-08-02', activity: 'Cycled 10km' },
    { id: '3', date: '2024-08-03', activity: 'Yoga for 30 mins' },
  ]);
  const [filterDate, setFilterDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);

  const filteredActivities = activities.filter(activity => {
    return activity.date === filterDate.toISOString().split('T')[0];
  });

  const onDateChange = (event, selectedDate) => {
    setShowPicker(false);
    if (selectedDate) {
      setFilterDate(selectedDate);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Activity Log</Text>
      <Button title="Pick a Date" onPress={() => setShowPicker(true)} />
      {showPicker && (
        <DateTimePicker
          value={filterDate}
          mode="date"
          display="default"
          onChange={onDateChange}
        />
      )}
      <FlatList
        data={filteredActivities}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.logItem}>
            <Text>{item.date}: {item.activity}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  logItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default ActivityLogScreen;
