
import React, { Component } from 'react';
// import Header from './header';
import { AppRegistry, StyleSheet, ActivityIndicator, Text, View, Alert,Image, Platform} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { Container, Content, Header ,Button , Root, Toast,   Footer, FooterTab, Card, CardItem, Icon , Item, Input, Thumbnail, ListItem} from 'native-base';
// https://sahbabahizad.com/ruhi_book_app/ruhi_units_list.php
//https://sahbabahizad.com/ruhi_book_app/BooksList.php

export default class quotescreen extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataSource: '',
      isEmpty: false,
      showToast: false,
    };
    this.arrayholder = [];
    
}


  componentDidMount() {
    const {navigate} = this.props.navigation;
    const navigation = this.props.navigation;
    const book_id = navigation.getParam('par_book_id');  
    const unit_id = navigation.getParam('par_unit_id'); 
    
    return fetch('https://sahbabahizad.com/ruhi_book_app/ruhi_quotes_list.php?book_id='+book_id+'&unit_id='+unit_id)
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        
        this.arrayholder = responseJson;
        if(this.arrayholder == 'Error: No Results Found.'){
          navigate('BlankPage');
        }
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
    title: 'Select a quote ',
   
  }; 
  renderHeader = () => {
    return <View searchBar style={styles.headerstyle}>
    
    
     <Item > 
            <Icon name="ios-search" />
            <Input placeholder="Search Here..."
          
          lightTheme
          round
          onChangeText={text => this.searchFilterFunction(text)}
          autoCorrect={false}
          value = {this.state.text}/>
            <Icon name="ios-book" />
            
          </Item>
        </View>;
  };
  searchFilterFunction = text => {
    this.setState({
      value: text,
    });

    const newData = this.arrayholder.filter( item => {
      const itemData = item.quote_desc.toUpperCase();
      const textData = text.toUpperCase(); // This is the value of that is entered
     // alert(itemData.includes(textData) > -1);
      itemData.includes(textData) > -1;
      return itemData.indexOf(textData) > -1;
    });
    this.setState({
      dataSource: newData,
    });
  };
  
   
  getcolor = text => {
    if(text = 1) {
      return "green"
    }else{
      return "gray"
    }
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
   
        <Container>
        
          <Content>
          <View style={styles.cardalign}>
          <FlatList
            data={this.state.dataSource}
            renderItem ={({item}) => 
             
                
                <ListItem button onPress={() => navigate('QuoteCard', { par_book_id : item.book_id, par_unit_id : item.unit_id, par_quote_desc :item.quote_desc, par_quote_id :item.quote_id })}  >
                <Card>
                <CardItem>
                <View style={styles.textview}>
                <Text style={{fontWeight: 'bold', marginBottom: 5}}>
                Quote {item.quote_id} 
                </Text>
                <Text style={styles.textstyle}>
                 {item.quote_desc}
                </Text>
                <Text style={{fontWeight: 'bold', marginBottom: 5}}>
                </Text>
               
                </View >
                </CardItem> 
              </Card>
                </ListItem>
                
                }
            keyExtractor={(item, index) => index.toString()}
            ListHeaderComponent={this.renderHeader}
            
            />  
            </View>
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
    
      width: '100%',
      textAlignVertical:'center',
      textAlign:'justify',
      padding:10,
      color: '#000'
      },
      headerstyle: {
        width: '100%',
         height: 45,
         backgroundColor: '#bbbbb2',
        textAlign: 'center',
        margin: 10,
    alignSelf: 'center'
      },
      textstyle: {
        
        flex: 1,
        textAlign: 'center',
        fontSize: 18,
        flexDirection:'row',
        fontWeight: 'bold',

        width: '100%',
        marginTop: 10,
        padding: 15,
        color: 'black',
        
    
    }
  });
    
// AppRegistry.registerComponent('RuhiBookApp_V0', () => RuhiBookApp_V0);