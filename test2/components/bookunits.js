
import React, { Component } from 'react';

import { AppRegistry, StyleSheet, ActivityIndicator, ListView, Text, View, Alert,Image, Platform} from 'react-native';
// https://sahbabahizad.com/ruhi_book_app/ruhi_units_list.php
//https://sahbabahizad.com/ruhi_book_app/BooksList.php
export default class bookunits extends Component {
  static navigationOptions = {
    title: 'Select a Unit',
  };
constructor(props) {
   super(props);
   this.state = {
     isLoading: true
   }
 }
 GetItem (unit_it){
 }
 
 
 
 componentDidMount() {

   return fetch('https://sahbabahizad.com/ruhi_book_app/ruhi_units_list.php')
     .then((response) => response.json())
     .then((responseJson) => {
       let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
       this.setState({
         isLoading: false,
         dataSource: ds.cloneWithRows(responseJson),
       }, function() {
         // In this block you can do something with new state.
       });
     })
     .catch((error) => {
       console.error(error);
     });
 }
 
 
 ListViewItemSeparator = () => {
   return (
     <View
       style={{
         height: .5,
         width: "100%",
         backgroundColor: "#000",
       }}
     />
   );
 }
 
   
   render() {
    const {navigate} = this.props.navigation;
          
   if (this.state.isLoading) {
     return (
       <View style={{flex: 1, paddingTop: 20}}>
         <ActivityIndicator />
       </View>
     );
   }

   return (

     <View style={styles.MainContainer}>

       <ListView

         dataSource={this.state.dataSource}

         renderSeparator= {this.ListViewItemSeparator}

         renderRow={(rowData) =>

        <View style={{flex:1, flexDirection: 'row'}}>
        <Text onPress={() => navigate('Home', {name: 'Jane'})} >{rowData.unit_name}</Text>
        <Text onPress={() => navigate('Quotes', {name: 'Jane'})} >{rowData.unit_desc}</Text>
        
        </View>
         }
       />

     </View>
   );
 }
 _onPressRow(rowID, rowData) {

    rowData.isSelect = !rowData.isSelect;
    var dataClone = this.state.data;
    dataClone[rowID] = rowData;
    this.setState({
      data: dataClone
    });
    console.log(this.state.data);
  }

}


const styles = StyleSheet.create({

MainContainer :{

// Setting up View inside content in Vertically center.
justifyContent: 'center',
flex:1,
margin: 5,
paddingTop: (Platform.OS === 'android') ? 20 : 0,

},

imageViewContainer: {
width: '50%',
height: 250 ,
margin: 10,
borderRadius : 10

},

textViewContainer: {

  textAlignVertical:'center',
  width:'50%', 
  padding:20

}

});

AppRegistry.registerComponent('bookunits', () => bookunits);