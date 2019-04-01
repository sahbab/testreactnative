import React,  { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import HomeScreen from './components/homescreen'
import ProfileScreen from './components/profilescreen'
import DetailScreen from './components/detailscreen'
import RuhiBookListScreen from './components/RuhiBookApp_V0'
import BookUnitsScreen from './components/bookunits'
import QuotesScreen from './components/quotes'
const MainNavigator = createStackNavigator({

  Home: {screen: HomeScreen},
  Profile: {screen: ProfileScreen},
  Detail: {screen: DetailScreen},
  RuhiBooks: {screen: RuhiBookListScreen},
  BookUnits: {screen: BookUnitsScreen},
  Quotes: {screen: QuotesScreen},
});


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const App = createAppContainer(MainNavigator);


export default App;