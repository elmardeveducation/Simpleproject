import React, {Component} from 'react';
import {Button, TouchableOpacity, Alert, View} from 'react-native';
import Myfunc from './components/somefunc';


export default class App extends Component {
constructor(props){
 super(props)  
  
 this.state={
  mytitle: "Hello",
  myname : "Elmar",
  mygender : "male"
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
   /* this.setState={
      mytitle : "Shahriyar"   
    }*/
    // const { mytitle, myname, mygender } = this;
    // const data = { mytitle, myname, mygender};

		return (
      <View style={{flex:1}}>
        <Button title="Test" onPress={this.Myclick}/>
      <Myfunc data={{...this.state}}/>

     
    
      </View>


      )
  } 
}
