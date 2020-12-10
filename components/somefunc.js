import React from 'react'
import {StyleSheet, View, Alert, Text, TouchableOpacity, TextInput} from 'react-native'

export const Myfunc = props => {
    const {data, myvariable}= props
    console.log(data, myvariable)

return(<View style={styles.container}>
          <View>
            <Text style={styles.buttonText}>{data?.mytitle}</Text>
            <Text style={styles.buttonText}>{data?.mygender}</Text>
            <Text style={styles.buttonText}>{myvariable?.name}</Text>
            
            <TouchableOpacity style={styles.button}  
                onPress={() =>console.log("Button pressed")}>  
                  <Text style={styles.buttonText}>{data?.myname}</Text>
                  
            </TouchableOpacity>
            <TextInput
                style={{flex: 1, backgroundColor: 'white'}}
                secureTextEntry={data?.secure}
             />
          </View>
      </View>   
)
}

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