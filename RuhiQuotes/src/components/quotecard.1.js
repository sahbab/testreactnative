
import React, { Component } from 'react';
// import Header from './header';
import { AppRegistry, StyleSheet, ActivityIndicator, Text, View, Alert,Image, Platform} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { Container, Content, Header ,Button , Body, DeckSwiper, Left, Card, CardItem, Icon , Thumbnail, ListItem} from 'native-base';
// https://sahbabahizad.com/ruhi_book_app/ruhi_units_list.php
//https://sahbabahizad.com/ruhi_book_app/BooksList.php
export default class quotecard extends Component {
  
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
    const unit_id = navigation.getParam('par_unit_id'); 
    const quote_id = navigation.getParam('par_quote_id'); 
    return fetch('https://sahbabahizad.com/ruhi_book_app/ruhi_quotes_list.php?book_id='+book_id+'&unit_id='+unit_id)
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


  static navigationOptions = {
    title: 'Preview ',
  }; 

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
            <DeckSwiper
              dataSource={this.state.dataSource}
              renderEmpty={() =>
                <View style={{ alignSelf: "center" }}>
                  <Text>Over</Text>
                </View>
              }
              renderItem ={item  => 
                <Card style={{ elevation: 2 }}>
                  
                  <CardItem cardBody>
                     <Text style={styles.textstyle}>{item.quote_desc}</Text>
                  </CardItem>
                  <CardItem>
                    <Icon name="heart" style={{ color: '#ED4A6A' }} />
                    <Text>Favorite</Text>
                  </CardItem>
                </Card>
          }
          
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
    },
    textview: {
    
      width: '88%',
      height: '80%',
      textAlignVertical:'center',
      textAlign:'justify',
      padding:20,
      color: '#000'
      },
      textstyle: {
        flex: 0.90,
        textAlign: 'left',
        fontSize: 16,
  
        fontWeight: 'bold'
        
      }
    
    });
    
// AppRegistry.registerComponent('RuhiBookApp_V0', () => RuhiBookApp_V0);