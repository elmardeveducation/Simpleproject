import React, {Component} from 'react';
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


  componentDidMount () {
    console.log('........my component did mount')
    state={
      mytitle: "Bye",
      }
  }


	render(){
   /* this.setState={
      mytitle : "Shahriyar"   
    }*/
    // const { mytitle, myname, mygender } = this;
    // const data = { mytitle, myname, mygender};

		return (
      <Myfunc data={{...this.state}} />
	  )
  } 
}
