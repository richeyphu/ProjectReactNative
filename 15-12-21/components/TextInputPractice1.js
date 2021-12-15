import React, {useState} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Button,
  SafeAreaView,
} from 'react-native';

const TextInputPractice1 = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const checkInput = () => {
    if (!name.trim()) {
      alert('Please Enter Name');
      return;
    }
    if (!email.trim()) {
      alert('Please Enter Email');
      return;
    }
    alert('Success!');
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <TextInput
          style={styles.textInputStyle}
          placeholder="Enter Name"
          underlineColorAndroid="transparent"
          onChangeText={name => {
            setName(name);
          }}
        />
        <TextInput
          style={styles.textInputStyle}
          placeholder="Enter Email"
          underlineColorAndroid="transparent"
          onChangeText={email => {
            setEmail(email);
          }}
        />
        <View style={{marginTop: 15}}>
          <Button onPress={checkInput} title="Submit" color="#666" />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default TextInputPractice1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
  },
  textInputStyle: {
    width: '100%',
    height: 40,
    paddingHorizontal: 5,
    borderWidth: 0.5,
    marginTop: 15,
  },
});
