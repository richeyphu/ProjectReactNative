import React from 'react';
import {Text, View, SafeAreaView} from 'react-native';

import {styles} from '../components/styles';

const DetailScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, padding: 15}}>
        <View style={styles.container}>
          <Text style={styles.textTopStyle}>You are on Detail Screen</Text>
        </View>
        <Text style={styles.textBottomStyle}>www.tni.ac.th</Text>
      </View>
    </SafeAreaView>
  );
};

export default DetailScreen;
