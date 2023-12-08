import { StyleSheet, Text, View, TouchableOpacity,Image } from 'react-native'
import React from 'react'
import Entypo from "react-native-vector-icons/Entypo"

const SettingScreen = ({ navigation }) => {


  const sideMenu = () => {
    navigation.toggleDrawer();
  }

  return (
    <View>
      <View style={{elevation:6,backgroundColor:"white"}}>
      <TouchableOpacity style={{ margin: 6, paddingHorizontal: 8 }} onPress={sideMenu}>
        <Entypo name={"menu"} size={26} color={"black"} />
        </TouchableOpacity>
      </View>
      <View style={{ marginTop: 4 }}>
        <Image source={require("../assets/download.png")} style={{
          resizeMode: "stretch",
          height: 400,
          width: "100%",
        }} />
        <Text style={{ fontSize: 18, fontWeight: "bold", marginVertical: 6, paddingHorizontal: 6 ,textAlign:"center"}}>setting Screen</Text>
      </View>
    </View>
  )
}

export default SettingScreen

const styles = StyleSheet.create({})