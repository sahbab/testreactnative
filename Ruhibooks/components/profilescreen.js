import React, {Component } from 'react';
import {AppRegistry, View, Text, StyleSheet , Button} from 'react-native'

export default class profilescreen extends React.Component {
    static navigationOptions = {
      title: 'Welcome to profile',
    };
    render() {
      const {navigate} = this.props.navigation;
      return (
        <Button
          title="This is profile screen"
          onPress={() => navigate('Detail', {name: 'Jane'})}
        />
      );
    }
  }

  AppRegistry.registerComponent('profilescreen' , () => profilescreen)