import React, {Component } from 'react';
import {AppRegistry, View, Text, StyleSheet , Button} from 'react-native'

export default class DetailScreen extends React.Component {
    static navigationOptions = {
      title: 'Welcome to profile',
    };
    render() {
      const {navigate} = this.props.navigation;
      return (
        <Button
          title="Go to Jane's detail page"
          onPress={() => navigate('Home', {name: 'Jane'})}
        />
      );
    }
  }

  AppRegistry.registerComponent('detailscreen' , () => detailscreen)