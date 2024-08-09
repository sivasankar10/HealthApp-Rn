import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const allTips = [
  { id: '1', title: 'Stay Hydrated', description: 'Drink at least 8 cups of water daily.' },
  { id: '2', title: 'Regular Exercise', description: 'Engage in at least 30 minutes of exercise every day.' },
  { id: '3', title: 'Balanced Diet', description: 'Eat a balanced diet rich in fruits, vegetables, and lean proteins.' },
  { id: '4', title: 'Adequate Sleep', description: 'Aim for 7-8 hours of sleep each night.' },
  { id: '5', title: 'Mental Wellness', description: 'Practice mindfulness and meditation to reduce stress.' },
  { id: '6', title: 'Routine Checkups', description: 'Visit your doctor for regular checkups and screenings.' },
  { id: '7', title: 'Limit Sugar Intake', description: 'Reduce consumption of sugary drinks and snacks.' },
  { id: '8', title: 'Healthy Snacking', description: 'Opt for nuts, fruits, and yogurt instead of chips or candy.' },
  { id: '9', title: 'Stay Active', description: 'Incorporate physical activity into your daily routine, like walking or cycling.' },
  { id: '10', title: 'Avoid Smoking', description: 'Quit smoking to improve your overall health and well-being.' },
];

const HealthTipsScreen = () => {
  const [tips, setTips] = useState([]);

  const shuffleTips = () => {
    const shuffled = [...allTips].sort(() => Math.random() - 0.5);
    setTips(shuffled.slice(0, 10));
  };

  useEffect(() => {
    shuffleTips();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Health Tips</Text>
      <FlatList
        data={tips}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.tipItem}>
            <Text style={styles.tipTitle}>{item.title}</Text>
            <Text>{item.description}</Text>
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
    backgroundColor: '#f5f5f5',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  tipItem: {
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  tipTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});

export default HealthTipsScreen;
