import React, {useState} from 'react';
import {StyleSheet, Text, View, Button, TextInput} from 'react-native';

const HomeScreen = ({navigation}) => {
  const [name, setName] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
        React Native Pass Value From One Screen
      </Text>
      <Text style={styles.textStyle}>
        Please insert your name to pass it to second screen
      </Text>
      <TextInput
        style={styles.inputStyle}
        placeholder="Enter your name"
        onChangeText={name => {
          setName(name);
        }}
      />
      <Button
        title="Go Next"
        onPress={() =>
          navigation.navigate('Second', {
            name: name,
          })
        }
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  heading: {
    fontSize: 25,
    textAlign: 'center',
    marginVertical: 10,
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 16,
    marginVertical: 10,
  },
  inputStyle: {
    width: '80%',
    height: 44,
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#DBDBD6',
  },
});
