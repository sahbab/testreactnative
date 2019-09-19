
import React, { Component } from 'react';
// import Header from './header';
import { AppRegistry, StyleSheet, ActivityIndicator, Text, View, Alert,Image, Platform} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { Container, Content, ListItem, Footer,  Header ,Button , Body, Right, Left, Card, CardItem, Icon , Thumbnail} from 'native-base';
// https://sahbabahizad.com/ruhi_book_app/ruhi_units_list.php
//https://sahbabahizad.com/ruhi_book_app/BooksList.php
export default class bookscreen extends Component {
  static navigationOptions = {
    title: 'No Data Found!',
  };
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataSource: ''
    }
}

  
  componentDidMount() {
    
  }

  render() {
    const {navigate} = this.props.navigation;
    //test
    return (
     
        <Container>
          <Content>
          
              <Card >

                <CardItem> 
                  
                    <View style={styles.textview}>
                    <Text style={{ marginBottom: 5, textAlignVertical:'top'}}>No Data Yet!</Text>
                    
                    </View>
                   
                 
                </CardItem> 
                
              </Card> 
          </Content>
          <Footer>
         
         </Footer>
        </Container>
     
    );
  }
}
const styles = StyleSheet.create({

  
    
    imageViewContainer: {
    // width: '50%',
    //height: 250 ,
    marginRight: 8,
    marginBottom: 6,
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
      marginTop: 10,
      marginBottom: 2,
      backgroundColor: '#bbbbb2',
      
    },
    block: {
      flex: 1,
      margin: 1,
      paddingRight: 10,
      backgroundColor: 'white',
      margin: 10,
      
      flexDirection: 'row',
      //alignItems: 'center',
     
    },
    textstyle: {
      
      textAlign: 'left',
      fontSize: 16,

      fontWeight: 'bold'
      
    },
    textview: {
    
    width: '70%',
    textAlignVertical:'center',
    textAlign:'center',
    padding:10,
    color: '#000'
    },
    
    imageview:{
      width: '50%',
    height: '100%' ,
    margin: 7,
    borderRadius : 7
    },
    
    });
    
// AppRegistry.registerComponent('RuhiBookApp_V0', () => RuhiBookApp_V0);