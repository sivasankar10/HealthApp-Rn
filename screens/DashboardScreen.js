import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

const DashboardScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Dashboard</Text>
      
      <Text style={styles.subHeader}>Steps Taken (Last 7 Days)</Text>
      <LineChart
        data={{
          labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          datasets: [
            {
              data: [3000, 4500, 7000, 8000, 6000, 9000, 7500]
            }
          ]
        }}
        width={Dimensions.get("window").width - 40} // from react-native
        height={240}
        yAxisLabel=""
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
          marginVertical: 10,
          marginLeft:0,
          borderRadius: 16
        }}
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
  subHeader: {
    fontSize: 18,
    marginVertical: 10,
  },
});

export default DashboardScreen;
