import {StyleSheet, View, ScrollView} from 'react-native';
import React from 'react';

import {
  Container,
  Header,
  Content,
  Button,
  ListItem,
  Text,
  Icon,
  Left,
  Body,
  Right,
  Switch,
} from 'native-base';

const MenuScreen = ({navigation}) => {
  return (
    <ScrollView style={{flex: 1}}>
      <View>
        <Text
          style={{
            color: 'blue',
            fontSize: 20,
            fontWeight: 'bold',
            padding: 20,
          }}>
          Main Menu
        </Text>
        {/* Native base code starts here */}
        <Content>
          {/* Home Page */}
          <ListItem
            icon
            style={{marginBottom: 10, marginTop: 10}}
            onPress={() => {
              navigation.navigate('HomeStack');
            }}>
            <Left>
              <Button style={{backgroundColor: '#FF9501'}}>
                <Icon active name="home" />
              </Button>
            </Left>
            <Body>
              <Text>Home Page</Text>
            </Body>
            <Right>
              <Icon active name="arrow-forward" />
            </Right>
          </ListItem>
          {/* Product Page */}
          <ListItem
            icon
            onPress={() => {
              navigation.navigate('ProductStack');
            }}>
            <Left>
              <Button style={{backgroundColor: '#007AFF'}}>
                <Icon active name="cube" />
              </Button>
            </Left>
            <Body>
              <Text>Products</Text>
            </Body>
            <Right>
              <Icon active name="arrow-forward" />
            </Right>
          </ListItem>
          {/* Login Page */}
          <ListItem
            icon
            onPress={() => {
              navigation.navigate('Login');
            }}>
            <Left>
              <Button style={{backgroundColor: '#007AFF'}}>
                <Icon active name="log-in" />
              </Button>
            </Left>
            <Body>
              <Text>Login</Text>
            </Body>
            <Right>
              <Icon active name="arrow-forward" />
            </Right>
          </ListItem>
        </Content>
      </View>
    </ScrollView>
  );
};

export default MenuScreen;

const styles = StyleSheet.create({});
