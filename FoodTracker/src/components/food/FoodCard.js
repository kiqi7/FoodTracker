// src/components/food/FoodCard.js
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const FoodCard = ({ food, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={{ uri: food.image }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.name}>{food.name}</Text>
        <View style={styles.nutritionRow}>
          <NutritionBadge label="Cal" value={food.calories} unit="kcal" />
          <NutritionBadge label="Protein" value={food.protein} unit="g" />
          <NutritionBadge label="Carbs" value={food.carbs} unit="g" />
          <NutritionBadge label="Fat" value={food.fat} unit="g" />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const NutritionBadge = ({ label, value, unit }) => (
  <View style={styles.badge}>
    <Text style={styles.badgeLabel}>{label}</Text>
    <Text style={styles.badgeValue}>{value}{unit}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 12,
    marginVertical: 8,
    marginHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  info: {
    padding: 16,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  nutritionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  badge: {
    alignItems: 'center',
  },
  badgeLabel: {
    fontSize: 12,
    color: '#666',
  },
  badgeValue: {
    fontSize: 14,
    fontWeight: '600',
  },
});

export default FoodCard;