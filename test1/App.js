import React, { Component } from 'react';
import { StyleSheet, Text, View , AppRegistry, Image } from 'react-native';

class Greeting extends Component {
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <Text>Hello {this.props.name}!</Text>
      </View>
    );
  }
}

class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = { isShowingText: true };

    // Toggle the state every second
    setInterval(() => (
      this.setState(previousState => (
        { isShowingText: !previousState.isShowingText }
      ))
    ), 1000);
  }

  render() {
    if (!this.state.isShowingText) {
      return null;
    }

    return (
      <Text>{this.props.text}</Text>
    );
  }
}
export default class Bananas extends Component {
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      
      <View style={{alignItems: 'center'}}>
        <Greeting name='Rexxar' />
        <Blink text='I love to blink' />
        <Blink text='Yes blinking is so great' />
        <Greeting name='Jaina' />
        <Greeting name='Valeera' />
        <Image source={pic} style={{width: 193, height: 110}}/>
      </View>
    );
  }



}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


// skip this line if using Create React Native App
AppRegistry.registerComponent('App', () => Bananas);