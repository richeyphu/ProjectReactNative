import React from 'react';
import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';

import {styles} from '../components/styles';

const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Text style={styles.textCenterStyle}>Home Screen</Text>
        <TouchableOpacity
          style={styles.buttonStyle}
          activeOpacity={0.8}
          onPress={() => {
            navigation.navigate('SettingScreen');
          }}>
          <Text>Go to Setting Tab</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonStyle}
          activeOpacity={0.8}
          onPress={() => {
            navigation.navigate('DetailScreen');
          }}>
          <Text>Open News Screen</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.textBottomStyle}>www.tni.ac.th</Text>
    </SafeAreaView>
  );
};

export default HomeScreen;
