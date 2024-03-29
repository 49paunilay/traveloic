import React from 'react';
import { Text, StyleSheet } from 'react-native';

const StylishText = ({ children, style }) => {
  return <Text style={[styles.text, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    color: '#333',
    fontFamily: 'Arial', // Change the font family as needed
    // Add any other styles you want to apply universally to the text
  },
});

export default StylishText;
