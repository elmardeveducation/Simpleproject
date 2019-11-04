import React from 'react'
import {StyleSheet, View, Alert, Text, TouchableOpacity} from 'react-native'

const Myfunc = props => {
    const {data}= props
    console.log(data)


//console.log(props.mytitle) + console.log(props.myname) +console.log(props.mygender)
 //const { data } = props;


return(<View style={styles.container}>
          <View>
          <Text style={styles.buttonText}>{data.mytitle}</Text>
            <Text style={styles.buttonText}>{data.mygender}</Text>
            
            <TouchableOpacity style={styles.button}  
                onPress={() =>console.log("Button pressed")}>  
                  <Text style={styles.buttonText}>{data.myname}</Text>
                  
            </TouchableOpacity>
          </View>
      </View>   
)

}
export default Myfunc

const styles = StyleSheet.create({

    container: {
      flex: 1,
      paddingTop: 20,
      justifyContent: 'flex-start',
      alignItems: 'center',
      backgroundColor: '#262929',
  },
      button: {
          width: 350,
          borderRadius: 15,
          marginTop: "10%",
          backgroundColor: '#00b8d9',
          padding: 20,
      },
  
      buttonText: {
          fontWeight: '100',
          color: '#FFFFFF',
          fontSize: 20,
          textAlign: 'center',
      },
  });	