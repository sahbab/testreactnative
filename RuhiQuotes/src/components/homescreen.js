import React, {Component } from 'react';
import {AppRegistry, View, Text, StyleSheet , ListView, Button} from 'react-native'

export default class homescreen extends React.Component {
    static navigationOptions = {
      title: 'Welcome to homescreen',
    };
    render() {
      const {navigate} = this.props.navigation;
      <View>
        <Text>Welcome to ruhi app book</Text>
        
      </View>
      return (
        <View>
        <Button
        title="Memorize the quotations"
        onPress={() => navigate('BookScreen', {name: 'welcome'})}
      />
      <Button
        title="My Favorite Quotations"
        onPress={() => navigate('BookScreen', {name: 'welcome'})}
      />
      <Button
        title="About the Ruhi Book App"
        onPress={() => navigate('BookScreen', {name: 'welcome'})}
      /></View>
        
      );
    }
  }

  AppRegistry.registerComponent('homescreen' , () => homescreen)