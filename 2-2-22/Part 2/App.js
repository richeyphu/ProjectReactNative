// 2/2/2565

import {StyleSheet, Image} from 'react-native';
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen';
import SettingScreen from './screens/SettingScreen';
import ProfileScreen from './screens/ProfileScreen';
import DetailScreen from './screens/DetailScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeScreenStack({navigation}) {
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        // Header Color
        headerStyle: {backgroundColor: '#5f9ea0'},
        // Header Text Color
        headerTintColor: '#fff',
        // Header Text Style
        headerTitleStyle: {fontWeight: 'bold'},
      }}>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{title: 'Home Page'}}
      />
      <Stack.Screen
        name="SettingScreen"
        component={SettingScreen}
        options={{title: 'Settings Page'}}
      />
      <Stack.Screen
        name="DetailScreen"
        component={DetailScreen}
        options={{title: 'News Page'}}
      />
    </Stack.Navigator>
  );
}

function SettingScreenStack() {
  return (
    <Stack.Navigator
      initialRouteName="SettingScreen"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#5f9ea0', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
      }}>
      <Stack.Screen
        name="SettingScreen"
        component={SettingScreen}
        options={{title: 'Settings Page'}}
      />
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{title: 'Home Page'}}
      />
      <Stack.Screen
        name="DetailScreen"
        component={DetailScreen}
        options={{title: 'News Page'}}
      />
      <Stack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{title: 'Profile Page'}}
      />
    </Stack.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconPath;
            if (route.name === 'Home') {
              iconPath = focused
                ? require('./assets/logo1.png')
                : require('./assets/logo2.png');
            } else if (route.name === 'Setting') {
              iconPath = focused
                ? require('./assets/logo1.png')
                : require('./assets/logo3.png');
            }
            return <Image style={{width: 25, height: 25}} source={iconPath} />;
          },
        })}
        tabBarOptions={{activeTintColor: 'tomato', inactiveTintColor: 'gray'}}>
        <Tab.Screen name="Home" component={HomeScreenStack} />
        <Tab.Screen name="Setting" component={SettingScreenStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
