import React, {Component} from 'react';
import {Button, TouchableOpacity, Alert, View} from 'react-native';
import {Somefunc1, Myfunc} from './components';


export default class App extends Component {
constructor(props){
 super(props)  
  
 this.state={
  mytitle: "Hello",
  myname : "Elmar",
  mygender : "male",
  secure: false,
 }
}
  //data = { message: "asdaewaq" };
//mytitle="Hello"
//myname="Elmar"
//mygender="male"


  // componentDidMount () {
  //   console.log('........my component did mount')
  //   this.state={
  //     mytitle: "Bye",
  //     }
  // }

  Myclick =()=>{
    console.log("entered")
    this.setState({myname: 'Test'})
  }


	render(){
		return (
      <View style={{flex:1}}>
        <Button title="Test" onPress={this.Myclick}/>
      <Myfunc data={{...this.state}}/>
      <Myfunc myvariable={{name: "Eldar"}}/>
      </View>


      )
  } 
}
