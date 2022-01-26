// 26/1/2565

import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import FirstPage from './pages/FirstPage';
import SecondPage from './pages/SecondPage';
import ThirdPage from './pages/ThirdPage';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const NavigationDrawerStructure = props => {
  const toggleDrawer = () => {
    props.navigationProps.toggleDrawer();
  };
  return (
    <View style={{flexDirection: 'row'}}>
      <TouchableOpacity
        onPress={() => {
          toggleDrawer();
        }}>
        <Image
          source={require('./assets/drawerWhite.png')}
          style={{width: 25, height: 25, marginLeft: 5}}
        />
      </TouchableOpacity>
    </View>
  );
};

function firstScreeenStack({navigation}) {
  return (
    <Stack.Navigator
      initialRouteName="Firstpage"
      screenOptions={{
        // Header Color
        headerStyle: {backgroundColor: '#5f9ea0'},
        // Header Text Color
        headerTintColor: '#fff',
        // Header Text Style
        headerTitleStyle: {fontWeight: 'bold', fontStyle: 'italic'},
        headerLeft: () => (
          <NavigationDrawerStructure navigationProps={navigation} />
        ),
      }}>
      <Stack.Screen
        name="FirstPage"
        component={FirstPage}
        options={{title: 'First Page'}}
      />
    </Stack.Navigator>
  );
}

function secondScreeenStack({navigation}) {
  return (
    <Stack.Navigator
      initialRouteName="Firstpage"
      screenOptions={{
        // Header Color
        headerStyle: {backgroundColor: '#5f9ea0'},
        // Header Text Color
        headerTintColor: '#fff',
        // Header Text Style
        headerTitleStyle: {fontWeight: 'bold', fontStyle: 'italic'},
        headerLeft: () => (
          <NavigationDrawerStructure navigationProps={navigation} />
        ),
      }}>
      <Stack.Screen
        name="SecondPage"
        component={SecondPage}
        options={{title: 'Second Page'}}
      />
      <Stack.Screen
        name="ThirdPage"
        component={ThirdPage}
        options={{title: 'Third Page'}}
      />
    </Stack.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContentOptions={{
          activeTintColor: '#e91263',
          itemStyle: {marginVertical: 5},
        }}>
        <Drawer.Screen
          name="FirstPage"
          component={firstScreeenStack}
          options={{drawerLabel: 'First Page Option'}}
        />
        <Drawer.Screen
          name="SecondPage"
          component={secondScreeenStack}
          options={{drawerLabel: 'Second Page Option'}}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
