import React, {useState} from 'react';

import {View, Text, TextInput, StyleSheet, SafeAreaView} from 'react-native';

const TextInputReview = () => {
  const [inputValue, setInputValue] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={{color: '#1a22bc'}}>{inputValue}</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Text"
          onChangeText={inputValue => {
            setInputValue(inputValue);
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 20,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
  },
  input: {
    width: 250,
    height: 44,
    padding: 10,
    marginTop: 20,
    marginBottom: 10,
    backgroundColor: '#e8e8e8',
  },
});

export default TextInputReview;