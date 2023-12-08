import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useIsFocused } from '@react-navigation/native'



const Splashscreen = ({ navigation }) => {
   const focus= useIsFocused()

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate("Maincomp")
        }, 2000)
    }, [focus])
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text style={{fontSize:20}}>Splashscreen</Text>
        </View>
    )
}

export default Splashscreen

const styles = StyleSheet.create({})