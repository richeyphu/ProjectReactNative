import React from 'react';
import {Button, SafeAreaView, StyleSheet, Text, View} from 'react-native';

const ButtonExample = () => {
  const onPressAlert = () => {
    alert('Hello');
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Text>
          <Button
            onPress={onPressAlert}
            title="Click me"
            color="#841584"
          />
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ButtonExample;
