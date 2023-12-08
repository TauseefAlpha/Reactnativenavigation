import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import Splashscreen from '../screens/Splashscreen'
import MainScreen from '../screens/drawerScreens/MainScreen'

const Stack = createNativeStackNavigator()


const MainNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Splashscreen' component={Splashscreen} options={{ headerShown: false }} />
                <Stack.Screen name='Maincomp' component={MainScreen} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainNavigation