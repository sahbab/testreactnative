
import React, { Component } from 'react';

import { AppRegistry, StyleSheet, ActivityIndicator, ListView, Text, View, Alert,Image, Platform} from 'react-native';
import { ListItem } from 'react-native-elements'
export default class quotes extends Component {
  static navigationOptions = {
    title: 'Select a Quote',
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
  const {navigate} = this.props.navigation;
  const navigation = this.props.navigation;
  const book_id = navigation.getParam('par_book_id'); 
  const unit_id = navigation.getParam('par_unit_id'); 
   // return fetch('https://sahbabahizad.com/ruhi_book_app/ruhi_quotes_list.php?book_id='+book_id+'&unit_id'+unit_id)
      return fetch('https://sahbabahizad.com/ruhi_book_app/ruhi_quotes_list.php?book_id=1&unit_id=2')
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
    const navigation = this.props.navigation;
    const book_id = navigation.getParam('par_book_id');  
    const unit_id = navigation.getParam('par_unit_id');  

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
        <Text onPress={() => navigate('Home', {name: 'Jane'})} >{rowData.quote_desc}</Text>
       
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

AppRegistry.registerComponent('quotes', () => quotes);