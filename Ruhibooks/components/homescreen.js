import React, {Component } from 'react';
import {AppRegistry, View, Text, StyleSheet , ListView, Button} from 'react-native'

export default class homescreen extends React.Component {
    static navigationOptions = {
      title: 'Welcome to homescreen',
    };
    render() {
      const {navigate} = this.props.navigation;
      return (


        <Button
          title="Welcome to ruhi app book"
          onPress={() => navigate('RuhiBooks', {name: 'welcome'})}
        />
      );
    }
  }

  AppRegistry.registerComponent('homescreen' , () => homescreen)