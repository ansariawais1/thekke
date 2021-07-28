

import {View,Text} from 'react-native'
import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import CSS from './style/style'

export const Menu=()=>{
const Stack=createStackNavigator()
    return(
        <Stack.Navigator>
            <Stack.Screen name="MenuHeader" component={MenuHeader} />
        </Stack.Navigator>

    )
}

const MenuHeader=()=>{
    return(
    <View >
        <Text>Hello</Text>
    </View>
    )
}