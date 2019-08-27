
import React, { Component } from 'react';
// import Header from './header';
import { AppRegistry, StyleSheet, ActivityIndicator, Text, View, Alert,Image, Platform} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { Container, Content, Header ,Button , Body, Right, Left, List, Card, Item, Input,SearchBar, CardItem, Icon , Thumbnail, ListItem} from 'native-base';

// https://sahbabahizad.com/ruhi_book_app/ruhi_units_list.php
//https://sahbabahizad.com/ruhi_book_app/BooksList.php
export default class search extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataSource: '',
    } ;
    this.arrayholder = [];
}


  componentDidMount() {
    const {navigate} = this.props.navigation;
    const navigation = this.props.navigation;
    const book_id = navigation.getParam('par_book_id');  
    const unit_id = navigation.getParam('par_unit_id'); 
  
    this.makeRemoteRequest();
  }

  makeRemoteRequest = () => {
    const url = 'https://sahbabahizad.com/ruhi_book_app/search_quotes.php/';
    this.setState({ isLoading: true });
    fetch(url)
      .then(res => res.json())
      .then(res => {
        this.setState({
          dataSource: res,
          
          isLoading: false,
        });
        this.arrayholder = res;
      })
      this.setState({
        data: this.arrayholder,
      });
      
  };

  

  static navigationOptions = {
    title: 'Search ',
  }; 
   
  renderHeader = () => {
    return <View searchBar style={styles.headerstyle}>
    
     <Item>
            <Icon name="ios-search" />
            <Input placeholder="Type Here..."
          placeholder="Search Here..."
          lightTheme
          round
          onChangeText={text => this.searchFilterFunction(text)}
          autoCorrect={false}
          value = {this.state.text}/>
            <Icon name="ios-book" />
            </Item>
          <Button transparent >
            <Text>Search</Text>
          </Button></View>;
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
      data: newData,
    });
  };

  render() {
    const {navigate} = this.props.navigation;
    
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <ActivityIndicator />
        </View>
      );
    }
    return (
      
      <View style={styles.cardalign}>
        <Container>
          <Content>
          <List containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0 }}>
         <FlatList
            
            data ={this.state.data}
            renderItem ={({item}) => 
              <Card>
                <CardItem>
                <ListItem  >
                          
                  
                <View >
               
                <Text style={{fontWeight: 'bold', marginBottom: 5}}>
                Quote  {item.quote_id}
                </Text>
                <Text style={{fontSize: 12}}>
                 {item.quote_desc}
                </Text>
                <Text style={{fontWeight: 'bold', marginBottom: 5}}>
                </Text>

                
                </View>
                
                </ListItem>
                
                </CardItem> 
              </Card>}
            keyExtractor={(item, index) => index.toString()}
        
            ListHeaderComponent={this.renderHeader}
            
            />  
            
            </List>
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
    headerstyle: {
      width: '100%',
  height: 45,
  backgroundColor: '#bbbbb2',
      textAlign: 'center',
      margin: 10,
  alignSelf: 'center'
    }
    
    });
    
// AppRegistry.registerComponent('RuhiBookApp_V0', () => RuhiBookApp_V0);