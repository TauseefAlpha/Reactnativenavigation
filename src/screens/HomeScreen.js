
import { StyleSheet, Text, TouchableOpacity, View, Image,ScrollView } from 'react-native'
import React from 'react'
import Entypo from "react-native-vector-icons/Entypo"

// menu

const HomeScreen = ({ navigation }) => {
    const sideMenu = () => {
        navigation.toggleDrawer();
    }

    return (
        <>
           <View style={{ elevation: 6, backgroundColor: "white" }}>
                <TouchableOpacity style={{ margin: 6, paddingHorizontal: 8 }} onPress={sideMenu}>
                    <Entypo name={"menu"} size={26} color={"black"} />
                </TouchableOpacity>
            </View>
        <ScrollView style={{ flex: 1 }}>
         
            <View style={{ marginTop: 4 }}>
                <Image source={require("../assets/burger.jpg")} style={{
                    resizeMode: 'cover',
                    height: 200,
                    width: "100%",
                }} />
                <Text style={{ fontSize: 18, fontWeight: "bold", marginVertical: 6, paddingHorizontal: 6 }}>Mans Casual Dressing</Text>
            </View>
            <View style={{ marginTop: 4 }}>
                <Image source={require("../assets/breakfast.jpg")} style={{
                    resizeMode: 'cover',
                    height: 200,
                    width: "100%",
                }} />
                <Text style={{ fontSize: 18, fontWeight: "bold", marginVertical: 6, paddingHorizontal: 6 }}>Morning breakfast</Text>
            </View>
            <View style={{ marginTop: 4 }}>
                <Image source={require("../assets/food.jpg")} style={{
                    resizeMode: 'cover',
                    height: 200,
                    width: "100%",
                }} />
                <Text style={{ fontSize: 18, fontWeight: "bold", marginVertical: 6, paddingHorizontal: 6 }}>Morning breakfast</Text>
            </View>
            </ScrollView>
        </>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})