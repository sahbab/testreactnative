
import React, { Component } from 'react';
// import Header from './header';
import { AppRegistry,  StyleSheet, ActivityIndicator, Text, View, Alert,Image, Platform} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { Container, Content, Header ,Footer, Button , Body, Right, Left, Card, CardItem, Icon , Thumbnail, ListItem} from 'native-base';
// https://sahbabahizad.com/ruhi_book_app/ruhi_units_list.php
//https://sahbabahizad.com/ruhi_book_app/BooksList.php
export default class unitscreen extends Component {
 static navigationOptions = ({ navigation }) => {
    return {
      title: 'Book ' + navigation.getParam('par_book_id') + " Units ",
    };
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
      
        <Container>
          <Content>
          
            <FlatList
            data={this.state.dataSource}
            renderItem ={({item}) => 
             
                <View>
    
                {item.unit_info.map((item, i) => {

                    return <ListItem button onPress={() => navigate('QuoteScreen', { par_book_id : item.book_id, par_unit_id : item.unit_id })}  key={item.unit_id} title = {item.unit_name} >
                              <Card style={styles.textview}>
                <CardItem> 
                              <View >

                                   <Text style={{fontWeight: 'bold', marginBottom: 5}}>
                                      Unit {item.unit_id}
                                    </Text>
                                    <Text style={styles.textstyle2}>
                                    <Icon style={styles.iconstyle} name="flag" > </Icon>  Purpose</Text>
                                    <Text style={styles.textstyle}>{item.unit_desc}</Text>
                                   
                              </View>
                              </CardItem> 
            </Card>
                              </ListItem>

                })}
</View>
                   
                }
            keyExtractor={(item, index) => index.toString()}
            />  
          </Content>
        
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
    }
    ,
    textview: {
    
      width: '100%',
      textAlignVertical:'center',
      textAlign:'justify',
      padding:10,
      color: '#000'
      },
      textstyle2: {
     
        textAlign: 'center',
        fontSize: 14,
        color:"darkgray",
        fontWeight: 'bold',
        marginBottom: 3,
         textAlignVertical:'top'
      } ,
      textstyle: {
      
        textAlign: 'left',
        fontSize: 18,
        color:"black",
        fontWeight: 'bold',
      
      },
      iconstyle: {
        flex: 0.20,
        
       textAlign: 'right',
        fontSize: 14,
        marginTop:-10,
        marginRight: 30,
        color: 'darkgray'
      },
    });
    
// AppRegistry.registerComponent('RuhiBookApp_V0', () => RuhiBookApp_V0);