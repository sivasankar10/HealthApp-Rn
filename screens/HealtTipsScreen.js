import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const HealthTipsScreen = () => {
  const [tips, setTips] = useState([]);

  useEffect(() => {
    // Fetch health tips from an API or local storage
    const fetchTips = async () => {
      const response = await fetch('https://mockapi.io/health-tips');
      const data = await response.json();
      setTips(data);
    };
    fetchTips();
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
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  tipItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  tipTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default HealthTipsScreen;
