import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

const AboutScreen = ({route}) => {
  const name = route.params.name;
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
        React Native Pass Value From One Screen
      </Text>
      <Text style={styles.textStyle}>
        Value passed from First page: {name}
      </Text>
    </View>
  );
};

export default AboutScreen;

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
