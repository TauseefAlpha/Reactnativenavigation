import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import SettingScreen from '../SettingScreen'
import HomeScreen from '../HomeScreen'

import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
// home
import Feather from "react-native-vector-icons/Feather"
// settings

const Tab = createBottomTabNavigator()

const Dashoard = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name='Home' component={HomeScreen} options={{ headerShown: false, tabBarIcon: (({ color, size }) => (<FontAwesome5 name="home" color={color} size={size} />)) }} />
            <Tab.Screen name='Setting' component={SettingScreen} options={{
                headerShown: false, tabBarIcon: (({ color, size }) => (<Feather name="settings" color={color} size={size} />))
            }} />
        </Tab.Navigator>
    )
}

export default Dashoard

const styles = StyleSheet.create({})