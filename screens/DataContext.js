import React, { createContext, useState, useContext } from 'react';

// Create Context
const DataContext = createContext();

// Create Provider Component
export const DataProvider = ({ children }) => {
  const [chartData, setChartData] = useState({
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
  });

  return (
    <DataContext.Provider value={{ chartData, setChartData }}>
      {children}
    </DataContext.Provider>
  );
};

// Custom Hook to use DataContext
export const useData = () => useContext(DataContext);
