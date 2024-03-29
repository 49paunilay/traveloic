import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const StylishButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#4CAF50', // Background color
    paddingVertical: 12, // Vertical padding
    paddingHorizontal: 24, // Horizontal padding
    borderRadius: 25, // Border radius
    justifyContent: 'center', // Center text vertically
    alignItems: 'center', // Center text horizontally,
    margin:2
  },
  buttonText: {
    color: '#FFFFFF', // Text color
    fontSize: 16, // Text size
    fontWeight: 'bold', // Text weight
  },
});

export default StylishButton;
