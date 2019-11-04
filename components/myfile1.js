import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
 export const Somefunc1 = () => {
    const {red, bigblue}=styles
    return (


        <View style={{ flex: 1 }}>


            <View style={{ flex: 1, backgroundColor: 'powderblue' }} />
            <Text style={bigblue}> Hello, my friend </Text>



            <View style={{ flex: 2, backgroundColor: 'skyblue' }} />

            <Text style={red}> Hello, dear friend </Text>

            <View style={{ flex: 3, backgroundColor: 'steelblue' }} />
        </View>
    )
}
export const styles = StyleSheet.create({
    bigBlue: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30,
    },
    red: {
        color: 'red',
    },
});

