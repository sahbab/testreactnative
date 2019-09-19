import React, {Component } from 'react';
import {AppRegistry, View, Text, StyleSheet, TouchableHighlight  } from 'react-native'
import { Container, Content, Header ,Button , Body, Right, Left, Card, CardItem, Icon , Thumbnail, ListItem} from 'native-base';
export default class homescreen extends React.Component {
    static navigationOptions = {
      title: 'Greetings!',
    };
    render() {
      const {navigate} = this.props.navigation;
      <View>
        <Text > Welcome to ruhi app book</Text>
      </View>
      return (
        

        
        <View style={styles.container} >
         <TouchableHighlight underlayColor="#fff" style={styles.block} onPress={() => navigate('BookScreen', {name: 'memorize'})}>
         
          <View style={styles.block}>
            <Icon style={styles.iconstyle} Right name='book' />
            <Text style={styles.textstyle} >
              Books
            </Text>
            
          </View>
          </TouchableHighlight>

        <TouchableHighlight underlayColor="#fff" style={styles.block} onPress={() => navigate('FavoritePage', {name: 'favorite'})}>
        <View style={styles.block} >
        <Icon style={styles.iconstyle}  Right name='heart' />
        <Text style={styles.textstyle} >
        Favorites
        </Text>
        </View>
        </TouchableHighlight>
          
        <TouchableHighlight underlayColor="#fff" style={styles.block} onPress={() => navigate('SearchQuote', {name: 'search'})}>
        <View style={styles.block} >
        <Icon style={styles.iconstyle}  Right name='search' />
        <Text style={styles.textstyle} >
        Search
        </Text>
       
        </View>
        </TouchableHighlight>

      </View>
        
      );
    }
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 20,
      marginBottom: 30,
      backgroundColor: '#bbbbb2',
      
    },
    block: {
      flex: 1,
      margin: 10,
      backgroundColor: 'white',
      
       paddingTop: 35,
      flexDirection: 'row',
      //alignItems: 'center',
     
    },
    top_bar: {
      flex: 0.5,
      margin: 20,
      backgroundColor: 'white',
      margin: 10,
      paddingTop: 20,
      flexDirection: 'row',
      //alignItems: 'center',
     
    },
    textstyle: {
      flex: 0.80,
      textAlign: 'left',
      fontSize: 20,
      color:"black"
      
    },
    iconstyle: {
      flex: 0.20,
      
     textAlign: 'right',
      fontSize: 45,
      marginTop:-10,
      marginRight: 30,
      color: 'darkgray'
    },
    });
  AppRegistry.registerComponent('homescreen' , () => homescreen)