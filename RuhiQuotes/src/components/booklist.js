
import React, { Component } from 'react';
// import Header from './header';
import { AppRegistry, StyleSheet, ActivityIndicator, Text, View, Alert,Image, Platform} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { Container, Content, Header ,Button , Body, Right, Left, Card, CardItem, Icon , Thumbnail} from 'native-base';
// https://sahbabahizad.com/ruhi_book_app/ruhi_units_list.php
//https://sahbabahizad.com/ruhi_book_app/BooksList.php
export default class bookscreen extends Component {
  static navigationOptions = {
    title: 'Select a Book',
  };
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataSource: ''
    }
}

  
  componentDidMount() {
    return fetch('https://sahbabahizad.com/ruhi_book_app/BooksList.php')
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
              <Card>
                <CardItem>
                
                
                <View style={{flex: 1}}>
                <Image source={{ uri: item.book_image_url }} style={styles.imageViewContainer}/>
                </View>
                
                <View style={{flex: 3, flexDirection: 'column'}}>
                
                <Text style={{fontWeight: 'bold', marginBottom: 5}}>
                Book {item.id}
                </Text>
                <Text style={{fontSize: 12}}>
                 {item.book_name}
                </Text>
                </View>
                
                <Button iconRight transparent dark onPress={() => navigate('UnitScreen', { par_book_id : item.id})}>
                <Icon Right name='arrow-forward' />
                  
                </Button>
                
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
      justifyContent: 'center',
      flexDirection:'row'
    }
    
    });
    
// AppRegistry.registerComponent('RuhiBookApp_V0', () => RuhiBookApp_V0);