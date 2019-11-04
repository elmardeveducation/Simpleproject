import React, { Component } from 'react';
import {h, w} from './components/moikonstanti'
import {Somefunc1} from './components/'



export default class FlexDirectionBasics extends Component {
 
  componentDidMount() {
   
    console.log("width="+h+"hight="+w)
  }
  

  render() {
    
    
    return (
      // Try setting `flexDirection` to `column`.
      
     <Somefunc1/>   
        
    )
  }
};
