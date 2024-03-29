import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const TextareaInput = ({text,setText,editable=true}) => {

  const handleChangeText = (newText) => {
    setText(newText);
  };

  return (
    <View style={styles.container}>
      <TextInput
      editable ={editable}
        style={styles.textInput}
        multiline={true}
        numberOfLines={9} // Set the number of lines visible without scrolling
        placeholder="Enter your text here..."
        value={text}
        onChangeText={handleChangeText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%', // Set the container width to 100%
    paddingHorizontal: 10
  },
  textInput: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    height: 150,
    width: '100%', // Set the input width to 100%
  },
});

export default TextareaInput;
