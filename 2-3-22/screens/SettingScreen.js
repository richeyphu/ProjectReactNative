import React from 'react';
import {Text, View, SafeAreaView, TouchableOpacity} from 'react-native';

import {styles} from '../components/styles';

const SettingScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Text style={styles.textCenterStyle}>Settings Screen</Text>
        <TouchableOpacity
          style={styles.buttonStyle}
          activeOpacity={0.8}
          onPress={() => {
            navigation.navigate('HomeScreen');
          }}>
          <Text>Go to Home Tab</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonStyle}
          activeOpacity={0.8}
          onPress={() => {
            navigation.navigate('DetailScreen');
          }}>
          <Text>Open News Screen</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonStyle}
          activeOpacity={0.8}
          onPress={() => {
            navigation.navigate('ProfileScreen');
          }}>
          <Text>Open Profile Screen</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.textBottomStyle}>www.tni.ac.th</Text>
    </SafeAreaView>
  );
};

export default SettingScreen;
