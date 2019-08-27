
import React, { Component } from 'react';
// import Header from './header';
import { AppRegistry, StyleSheet, ActivityIndicator, Text, View, Alert,Image, Platform} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { Container, Content, Header ,Button , Body, Right, Left, Card, CardItem, Icon , Thumbnail, ListItem} from 'native-base';
// https://sahbabahizad.com/ruhi_book_app/ruhi_units_list.php
//https://sahbabahizad.com/ruhi_book_app/BooksList.php
export default class unitscreen extends Component {
  static navigationOptions = {
    title: 'Select a Unit',
  };
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataSource: ''
    }
}

  
  componentDidMount() {
  const {navigate} = this.props.navigation;
  const navigation = this.props.navigation;
  const book_id = navigation.getParam('par_book_id');  
  
    return fetch('http://sahbabahizad.com/ruhi_book_app/ruhi_quotes_list2.php?book_id='+book_id)
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        this.setState({
          isLoading: false,
          dataSource: responseJson,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    const {navigate} = this.props.navigation;
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1}}>
          <ActivityIndicator />
        </View>
      );
    }
    

    return (
      <View style={styles.cardalign}>
        <Container>
          <Content>
          
            <FlatList
            data={this.state.dataSource}
            renderItem ={({item}) => 
              <Card >
                <CardItem> 
                <View>
    
    {item.unit_info.map((item, i) => {

    return <ListItem button onPress={() => navigate('QuoteScreen', { par_book_id : item.book_id, par_unit_id : item.unit_id })} 

      key={item.unit_id} title = {item.unit_name} 

>
<View>
<Text style={{fontWeight: 'bold', marginBottom: 5 , textAlign: 'center'}}>Unit {item.unit_id}
</Text>
<Text >{item.unit_desc}
</Text>
<Text>View <Icon style={{fontWeight: 'bold', marginBottom: 5 , textAlign: 'center'}} Right name='arrow-forward' /></Text>
</View>


</ListItem>



})}
</View>
                   
                </CardItem> 
            </Card>}
            keyExtractor={(item, index) => index.toString()}
            />  
          </Content>
        </Container>
      </View>
    );
    }
}
const styles = StyleSheet.create({

  
    
    imageViewContainer: {
    // width: '50%',
    //height: 250 ,
    margin: 1,
    borderRadius : 10,
    width: 60, height: 60
    },
    
    cardalign:{
      alignItems:'stretch',
      flex: 1 ,
      justifyContent: 'flex-end',
      flexDirection:'row'
    }
    
    });
    
// AppRegistry.registerComponent('RuhiBookApp_V0', () => RuhiBookApp_V0);