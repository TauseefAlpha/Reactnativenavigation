import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'

import SideBar from '../../components/SideBar'
import Dashoard from '../bottomtab/Dashoard'


const Drawer = createDrawerNavigator()

const MainScreen = () => {
    return (
        <Drawer.Navigator drawerContent={(props) => <SideBar {...props} />}>
            <Drawer.Screen name='dashboard' component={Dashoard} options={{ headerShown: false }} />
        </Drawer.Navigator>
    )
}

export default MainScreen

const styles = StyleSheet.create({})