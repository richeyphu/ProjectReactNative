// 15/12/2564

import React from 'react';
import {View, Text, Button} from 'react-native';
import Footer from './components/Footer';
import Logo from './components/Logo';

const App = () => {
  const showData = () => {
    alert('Hello World!!!');
  };

  return (
    <View>
      <Logo />
      <Text>Hello React Native</Text>
      <Text>สวัสดี React Native</Text>
      <Button title="Click" onPress={showData} />
      <Footer />
    </View>
  );
};

export default App;
