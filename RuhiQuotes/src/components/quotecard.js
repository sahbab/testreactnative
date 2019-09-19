
import React, { Component } from 'react';
// import Header from './header';
import { AppRegistry, StyleSheet, ActivityIndicator, Text,AsyncStorage, View, Alert,Image} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';


import { Container, Content, Header ,Button , Body, DeckSwiper, Left, Card, CardItem, Icon , Thumbnail, ListItem} from 'native-base';
// https://sahbabahizad.com/ruhi_book_app/ruhi_units_list.php
//https://sahbabahizad.com/ruhi_book_app/BooksList.php

export default class quotecard extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      quote : '',
      id : '', 
      isfavorite: '',
      favorits : [],
    }
    
}

  componentDidMount() {
    const {navigate} = this.props.navigation;
    const navigation = this.props.navigation;
    const book_id = navigation.getParam('par_book_id');  
    const unit_id = navigation.getParam('par_unit_id'); 
    this.quote_desc = navigation.getParam('par_quote_desc');
    this.quote_id = navigation.getParam('par_quote_id');
    AsyncStorage.getItem( 'favoritekey', (error, result) => {
      this.setState({ favorits: result}, function () { });})
   
   
    this.setState({
      quote: this.quote_desc,
      id: this.quote_id,
      isfavorite: false
    });  
  };


  static navigationOptions = {
    title: 'Preview ',
  }; 

  
  addfontsize = () =>{
this.setState({
  fontSize: this.fontSize,
});
  };



// Gets the value
//getValueLocaly = key => {

//AsyncStorage.getItem( key, (error, result) => {
 // this.setState({ key: JSON.stringify(result)}, function () { });});
//}

getcurrentfavs = () =>{
  key = 'favoritekey';
  AsyncStorage.getItem( key, (error, result) => {
    this.setState({ key: result}, function () { 
      Alert.alert(result, this.state.key),
      this.setState({
        favorits: result
      })
    }
    
    );});
    
   
  }

/*async removeItemValue(key) {
  //this.state.favorits.pop('favoritekey');
  try {
    await AsyncStorage.removeItem(key);
    
    Alert.alert("Value removed Successfully.")
    return true;
  }
  catch(exception) {
    return false;
  }
}*/
setfavstatus = value_id => {
  if(this.state.isfavorite == true){
    this.setState({
      isfavorite :false})
     // this.removeItemValue('favoritekey')
  }
  else{
    this.setState({
      isfavorite :true,
      favorits : this.state.favorits.concat(",",value_id )
    }),
    
    AsyncStorage.setItem('favoritekey', this.state.favorits)
  }
}
/*//NOT USED
setValueLocally1 =  async () => {
  try {
    await AsyncStorage.setItem('@MySuperStore:key', this.state.quote);
    Alert.alert("Value Stored Successfully.")
  } catch (error) {
    // Error saving data
  }
};
//NOt USed
setValueLocally22=()=>{
 
  AsyncStorage.setItem('quote1', this.state.quote);
  Alert.alert("Value Stored Successfully.")
  return true
}
*/
getcolor = () => {
  if(this.state.isfavorite){
    return 'red'
  }
  else{
    return 'gray'
  }
}
  render() {
    const {navigate} = this.props.navigation;

    return (
     
      <View style={styles.textview} >
        
               <Card>
                 <CardItem>
                 <Text style={styles.textstyle} selectable={true} allowFontScaling={true}>
                     {this.state.quote} 
                 </Text>
                  </CardItem>
                  <CardItem>
                  <Text><Icon name="heart" style={{color:this.getcolor()}} onPress={() => {this.setfavstatus(this.state.id )}}
                  ></Icon>{this.state.id}</Text>
                  </CardItem>
               </Card>           
      </View>
    
    );
  }
}


const styles = StyleSheet.create({

  
  
    block: {
      flex: 1,

      backgroundColor: 'white',
      flexDirection: 'row',
      
     
    },
    
    textview: {
      flex: 1,
      flexDirection: 'column',
     width: "100%",
     alignItems: 'stretch',
     justifyContent:'center',
      textAlign:'center',
      padding:10,
      color: '#000'
      },
    textstyle: {
        
       
        textAlign: 'center',
        fontSize: 18,
       
        fontWeight: 'bold',
       
        padding: 25,
        color: 'black',
        
      }
    
    });
    
// AppRegistry.registerComponent('RuhiBookApp_V0', () => RuhiBookApp_V0);