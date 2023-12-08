import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


const data = [
    { id: 1, icon: "shopping-cart", iconname: "Cart" },
    { id: 2, icon: "location-arrow", iconname: "location" },
    { id: 3, icon: "shopping-bag", iconname: "Order" },
]

const SideBar = () => {
    return (
        <View style={{ flex: 1, backgroundColor: "lightgrey" }}>
            <View style={{ backgroundColor: "#c4910e", height: 10, width: "100%" }}></View>
            <View style={{ alignItems: "center", marginTop: 6 }}>
                <Image style={{ height: 100, width: 100, resizeMode: "contain", borderRadius: 50 }} source={require("../assets/profile.jpg")} />
                <Text style={{ fontSize: 18, alignItems: "center", fontWeight: "bold" }}>Tauseef Ahmad</Text>
            </View>
            <View style={{marginTop:28}}>
                {data.map((val, index) => (
                    <TouchableOpacity key={index} style={{ flexDirection: 'row', alignItems: "center", gap: 10, marginTop: 13, paddingLeft :13}}>
                        <FontAwesome5 name={val.icon} size={28} color={"#c4910e"} />
                        <Text style={{ fontSize: 17, fontWeight: 700, color: "black" }}>{val.iconname}</Text>
                    </TouchableOpacity>
                ))}

            </View>
        </View>
    )
}

export default SideBar

const styles = StyleSheet.create({})