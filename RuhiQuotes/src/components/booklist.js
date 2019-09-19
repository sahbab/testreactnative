
import React, { Component } from 'react';
// import Header from './header';
import { AppRegistry, StyleSheet, ActivityIndicator, Text, View, Alert,Image, Platform} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { Container, Content, ListItem, Footer,  Header ,Button , Body, Right, Left, Card, CardItem, Icon , Thumbnail} from 'native-base';
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
renderItem = item => {
  const {navigate} = this.props.navigation;
  return  <ListItem button onPress={() => navigate('UnitScreen' , { par_book_id : item.id})}>
  <Card >
    <CardItem> 
        <Image source={{ uri: item.book_image_url }} style={styles.imageViewContainer}/>
        <View style={styles.textview}>
          <Text style={styles.textstyle}>Book {item.id}</Text>
          <Text style={styles.textstyle}>{item.book_name}</Text>
        </View>
    </CardItem> 
  </Card>
</ListItem>
}
  render() {
   
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
            renderItem ={({item}) => this.renderItem(item) }
            keyExtractor={(item, index) => index.toString()}
            />  
          </Content>
          <Footer>
         
         </Footer>
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
     
      paddingRight: 10,
      backgroundColor: 'white',
      margin: 10,
      
      flexDirection: 'row',
      //alignItems: 'center',
     
    },
    textstyle: {
      
      textAlign: 'left',
      fontSize: 20,
      color:"black",
      fontWeight: 'bold',
      
      
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
    textstyle2: {
     
    textAlign: 'left',
    fontSize: 20,
    color:"black",
    fontWeight: 'bold',
    marginBottom: 5,
     textAlignVertical:'top'
  }
    });
    
// AppRegistry.registerComponent('RuhiBookApp_V0', () => RuhiBookApp_V0);