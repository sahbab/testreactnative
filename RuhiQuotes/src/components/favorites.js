
import React, { Component } from 'react';
// import Header from './header';
import { AppRegistry, StyleSheet, ActivityIndicator, Text,TextInput,TouchableOpacity,  View,AsyncStorage , Alert,Image, Platform} from 'react-native';
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
      getValue:'',
      //favs : 'favoritekey',
      favs: '',
        };
    this.arrayholder = [];
    
  }
  /* async getItemValue(key) {
    try {
      let value = await AsyncStorage.getItem(key);
      this.setState(
        {favs : JSON.stringify(value),
          favs : '00'
        }
        );
    }
    catch(exception) {
    }
  } */
  _loadInitialState = async () => {
    
    AsyncStorage.getItem("favoritekey", (err, res) => {
      if (res !== null) {
        this.setState({getValue : res} );
        getValue = res;
        
        return fetch('https://sahbabahizad.com/ruhi_book_app/ruhi_fav_list.php?ids='+this.state.getValue)
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
        });}
      else{
        this.setState({getValue : "Ooops!",
        isLoading: false,} )
        return this.state.getValue;
      }
         
    })
  }

  componentDidMount() {
    const {navigate} = this.props.navigation;
    const navigation = this.props.navigation;
    return this._loadInitialState();
    
}

  static navigationOptions = {
    title: 'Favorite Quotes ',
   
  }; 
  
  renderItem = item => {
    const {navigate} = this.props.navigation;
    
    return <ListItem button onPress={() => navigate('QuoteCard', { par_book_id : item.book_id, par_unit_id : item.unit_id, par_quote_desc :item.quote_desc })}  >
    <Card>
    <CardItem >
    <View style={styles.textview}>
    <Text style={{fontWeight: 'bold', marginBottom: 5}}>
    Quote {item.quote_id} 
    </Text>
    
    <Text style={{fontWeight: 'bold', marginBottom: 5}}>
    {item.quote_desc} 
    </Text>
   
    </View >
    </CardItem> 
  </Card>
    </ListItem>
 
  }

  renderHeader = () => {
    return <View searchBar style={styles.headerstyle}>
     <Item > 
            <Icon name="ios-search" />
            <Input placeholder="Search Here..."
          
          lightTheme
          round
          onChangeText={text => this.searchFilterFunction(text)}
          autoCorrect={false}
         />
            <Icon name="ios-book" />
           
          </Item>



        </View>
  }
  searchFilterFunction = text => {
   
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
  
  
  render() {
   
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
          <Text>{this.state.favs}</Text> 
          <FlatList
            data={this.state.dataSource}
            renderItem ={({item}) => this.renderItem(item) }
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