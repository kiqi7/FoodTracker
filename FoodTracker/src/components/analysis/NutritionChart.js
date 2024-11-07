// src/components/analysis/NutritionChart.js
import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

const NutritionChart = ({ data }) => {
  const totalCalories = data.protein * 4 + data.carbs * 4 + data.fat * 9;
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nutrition Breakdown</Text>
      <View style={styles.chart}>
        <MacroBar 
          label="Protein"
          value={data.protein}
          total={totalCalories}
          color="#FF6B6B"
        />
        <MacroBar 
          label="Carbs"
          value={data.carbs}
          total={totalCalories}
          color="#4ECDC4"
        />
        <MacroBar 
          label="Fat"
          value={data.fat}
          total={totalCalories}
          color="#45B7D1"
        />
      </View>
    </View>
  );
};

const MacroBar = ({ label, value, total, color }) => {
  const percentage = (value * 100) / total;
  
  return (
    <View style={styles.macroContainer}>
      <Text style={styles.macroLabel}>{label}</Text>
      <View style={styles.barContainer}>
        <View style={[styles.bar, { width: `${percentage}%`, backgroundColor: color }]} />
      </View>
      <Text style={styles.macroValue}>{value}g</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 12,
    margin: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  chart: {
    gap: 12,
  },
  macroContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  macroLabel: {
    width: 60,
    fontSize: 14,
  },
  barContainer: {
    flex: 1,
    height: 20,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    overflow: 'hidden',
  },
  bar: {
    height: '100%',
    borderRadius: 10,
  },
  macroValue: {
    width: 40,
    fontSize: 14,
    textAlign: 'right',
  },
});

export default NutritionChart;