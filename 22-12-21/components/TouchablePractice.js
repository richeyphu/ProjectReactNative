import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

const TouchablePractice = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const checkInput = () => {
    if (!email.trim()) {
      alert('Please Enter Email');
      return;
    }
    if (!password.trim()) {
      alert('Please Enter Password');
      return;
    }
    alert(`Email: ${email}\nPassword: ${password}`);
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <TextInput
          style={styles.textInputStyle}
          placeholder="Enter Email"
          placeholderTextColor="#7A42FA"
          underlineColorAndroid="transparent"
          onChangeText={email => {
            setEmail(email);
          }}
        />
        <TextInput
          style={styles.textInputStyle}
          placeholder="Enter Password"
          placeholderTextColor="#7A42FA"
          underlineColorAndroid="transparent"
          secureTextEntry={true}
          onChangeText={password => {
            setPassword(password);
          }}
        />
        <TouchableOpacity style={styles.buttonStyle} activeOpacity={0.5} onPress={checkInput}>
          <Text style={{color:'#fff'}}>Submit</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default TouchablePractice;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
  },
  textInputStyle: {
    width: '100%',
    height: 40,
    paddingHorizontal: 5,
    borderWidth: 0.5,
    marginTop: 15,
    borderColor: '#7A42FA',
  },
  buttonStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#7A42FA',
    height: 40,
    borderRadius: 5,
    marginTop: 15,
    paddingHorizontal: 15,
  },
});
