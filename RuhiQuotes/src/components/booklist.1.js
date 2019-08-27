
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
              <Card >

                <CardItem style={styles.block}> 
                <Button iconRight transparent dark style={styles.textstyle}
                 onPress={() => navigate('UnitScreen', { par_book_id : item.id})}>
                <View style={styles.imageview}>
                <Image source={{ uri: item.book_image_url }} style={styles.imageViewContainer}/>
                </View>
                
                <View style={styles.textview}>
                
                <Text >
                Book {item.id}
                </Text>
                
                <Text style={styles.textstyle}>
                 {item.book_name}
                
                <Icon Right name='arrow-forward' />
                </Text>
                </View>
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
    marginRight: 8,
    marginBottom: 60,
    height: 130,
    width: 100
    },
    
    cardalign:{
      alignItems:'stretch',
      flex: 1 ,
      justifyContent: 'center',
      flexDirection:'row',
      marginTop: 20,
      marginBottom: 30,
      backgroundColor: '#b0e0e6'
    },
    container: {
      flex: 1,
      marginTop: 20,
      marginBottom: 30,
      backgroundColor: '#b0e0e6',
      
    },
    block: {
      flex: 1,
      margin: 20,
      backgroundColor: 'white',
      margin: 10,
      paddingTop: 70,
      flexDirection: 'row',
      //alignItems: 'center',
     
    },
    textstyle: {
      flex: 0.90,
      textAlign: 'left',
      fontSize: 16,

      fontWeight: 'bold'
      
    },
    textview: {
      width:'50%', 
    textAlignVertical:'center',
    padding:10,
    color: '#000'
    },
    iconstyle: {
      flex: 0.20,
      
     textAlign: 'right',
      fontSize: 45,
      marginTop:-10,
      marginRight: 30,
      color: 'darkgray'
    },
    imageview:{
      width: '50%',
    height: 100 ,
    margin: 7,
    borderRadius : 7
    },
    
    });
    
// AppRegistry.registerComponent('RuhiBookApp_V0', () => RuhiBookApp_V0);