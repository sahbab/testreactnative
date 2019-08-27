
import React, { Component } from 'react';
// import Header from './header';
import { AppRegistry, StyleSheet, ActivityIndicator, Text, View, Alert,Image, Platform} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { Container, Content, Header ,Button , Body, Right, Left, Card, Item, Input,SearchBar, CardItem, Icon , Thumbnail, ListItem} from 'native-base';
// https://sahbabahizad.com/ruhi_book_app/ruhi_units_list.php
//https://sahbabahizad.com/ruhi_book_app/BooksList.php
export default class search extends Component {
  
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
    const search  = '';  
    
  }


  static navigationOptions = {
    title: 'Preview ',
  }; 
  renderHeader = () => {    
    return (      
      <SearchBar        
        placeholder="Type Here..."        
        lightTheme        
        round        
        onChangeText={text => this.searchFilterFunction(text)}
        autoCorrect={false}             
      />    
    );  
  };
  searchFilterFunction = text => {    
    const newData = this.arrayholder.filter(item => {      
      const itemData = `${item.name.title.toUpperCase()}   
      ${item.name.first.toUpperCase()} ${item.name.last.toUpperCase()}`;
      
       const textData = text.toUpperCase();
        
       return itemData.indexOf(textData) > -1;    
    });
    
    this.setState({ data: newData });  
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
          <Header searchBar rounded>
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="Search" />
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header>
          <FlatList
            
            data={this.state.dataSource}
            renderItem ={({item}) => 
              <Card>
                <CardItem>
                
                <ListItem button onPress={() => navigate('QuoteCard', { par_book_id : item.book_id, par_unit_id : item.unit_id })}  key={item.unit_id} title = {item.unit_name} >
                          
                  
                <View >
               
                <Text style={{fontWeight: 'bold', marginBottom: 5}}>
                Quote {item.quote_id}
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