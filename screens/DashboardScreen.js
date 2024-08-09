import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import { LineChart, BarChart } from 'react-native-chart-kit';


const DashboardScreen = () => {
  const [selectedRange, setSelectedRange] = useState('weekly');

  const chartData = {
    daily: {
      steps: [3000, 3500, 3800, 3500, 5000, 4500, 6000],
      calories: [200, 250, 300, 280, 350, 320, 400],
      water: [2, 2.5, 3, 2.8, 3.2, 3, 2.7],
    },
    weekly: {
      steps: [21000, 21500, 23000, 23500, 25000, 22000, 27000],
      calories: [1400, 1500, 1600, 1550, 1700, 1500, 1800],
      water: [14, 15, 16, 15.5, 17, 15, 18],
    },
    monthly: {
      steps: [80000, 95000, 85000, 105000, 100000, 115000, 120000],
      calories: [6000, 7000, 6500, 8000, 7500, 8500, 9000],
      water: [60, 70, 65, 80, 75, 85, 90],
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Dashboard</Text>
      
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => setSelectedRange('daily')} style={styles.button}>
          <Text>Daily</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelectedRange('weekly')} style={styles.button}>
          <Text>Weekly</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelectedRange('monthly')} style={styles.button}>
          <Text>Monthly</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.summaryContainer}>
        <Text style={styles.subHeader}>Steps Taken ({selectedRange})</Text>
        <LineChart
          data={{
            labels: selectedRange === 'daily' ? ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                    : selectedRange === 'weekly' ? ['Week 1', 'Week 2', 'Week 3', 'Week 4']
                    : ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [
              {
                data: chartData[selectedRange].steps,
              }
            ]
          }}
          width={Dimensions.get("window").width - 40}
          height={220}
          yAxisSuffix=""
          chartConfig={{
            backgroundColor: "#f2f2f2",
            backgroundGradientFrom: "#f2f2f2",
            backgroundGradientTo: "#f2f2f2",
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            style: {
              borderRadius: 16
            },
            propsForDots: {
              r: "6",
              strokeWidth: "2",
              stroke: "#ffa726"
            }
          }}
          style={{
            marginVertical: 8,
            borderRadius: 16
          }}
        />
      </View>

      <View style={styles.summaryContainer}>
        <Text style={styles.subHeader}>Calories Burned ({selectedRange})</Text>
        <LineChart
          data={{
            labels: selectedRange === 'daily' ? ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                    : selectedRange === 'weekly' ? ['Week 1', 'Week 2', 'Week 3', 'Week 4']
                    : ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [
              {
                data: chartData[selectedRange].calories,
              }
            ]
          }}
          width={Dimensions.get("window").width - 40}
          height={220}
          yAxisSuffix="kcal"
          chartConfig={{
            backgroundColor: "#f2f2f2",
            backgroundGradientFrom: "#f2f2f2",
            backgroundGradientTo: "#f2f2f2",
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(255, 69, 58, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            style: {
              borderRadius: 16
            },
            propsForDots: {
              r: "6",
              strokeWidth: "2",
              stroke: "#ffa726"
            }
          }}
          style={{
            marginVertical: 8,
            borderRadius: 16
          }}
        />
      </View>

      <View style={styles.summaryContainer}>
        <Text style={styles.subHeader}>Water Intake ({selectedRange})</Text>
        <BarChart
          data={{
            labels: selectedRange === 'daily' ? ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                    : selectedRange === 'weekly' ? ['Week 1', 'Week 2', 'Week 3', 'Week 4']
                    : ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [
              {
                data: chartData[selectedRange].water,
              }
            ]
          }}
          width={Dimensions.get("window").width - 40}
          height={220}
          yAxisSuffix="L"
          chartConfig={{
            backgroundColor: "#f2f2f2",
            backgroundGradientFrom: "#f2f2f2",
            backgroundGradientTo: "#f2f2f2",
            decimalPlaces: 1,
            color: (opacity = 1) => `rgba(0, 128, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            style: {
              borderRadius: 16
            }
          }}
          style={{
            marginVertical: 8,
            borderRadius: 16
          }}
        />
      </View>
    </ScrollView>
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
    marginBottom: 20,
  },
  subHeader: {
    fontSize: 18,
    marginVertical: 10,
  },
  summaryContainer: {
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#ddd',
    padding: 10,
    borderRadius: 10,
    flex: 1,
    marginHorizontal: 5,
    alignItems: 'center',
  },
});

export default DashboardScreen;
