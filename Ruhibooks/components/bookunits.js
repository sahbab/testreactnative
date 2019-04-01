
import React, { Component } from 'react';
import { ListItem } from 'react-native-elements'
import { AppRegistry, StyleSheet, ActivityIndicator, ListView,  Text, View, Alert,Image, Platform} from 'react-native';
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

 
 
 componentDidMount() {
  const {navigate} = this.props.navigation;
  const navigation = this.props.navigation;
  const book_id = navigation.getParam('par_book_id');  
    
  return fetch('http://sahbabahizad.com/ruhi_book_app/ruhi_quotes_list2.php?book_id='+book_id)
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
         renderRow={(rowData) => this._renderRow(rowData)}
         
      />
        
    </View>
   );
   

 }

 _renderRow=(rowData)=> {
  const {navigate} = this.props.navigation;
  const navigation = this.props.navigation;
  const book_id = navigation.getParam('par_book_id');  
  const unit_id = navigation.getParam('par_unit_id');  
  
  return (
    <View style={{flex:1, flexDirection: 'column', justifyContent: 'space-between',}}>
    
     {rowData.unit_info.map((item, i) => {
    return <ListItem button onPress={() => this.props.navigation.navigate('Quotes', { par_book_id : book_id, par_unit_id : item.unit_id })} 
    style={{ flex:1, backgroundColor: 'steelblue'} }
    key={item.unit_id} title = {item.unit_name} 
    ><Text >{item.unit_desc}
    </Text>
    </ListItem>
    
   
    
    })}
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