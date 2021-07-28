

import {View,Text} from 'react-native'
import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import CSS from './style/style'


export const Profile=()=>{
const Stack=createStackNavigator()
    return(
        
        <Stack.Navigator>
            <Stack.Screen name="ProfileHeader" component={ProfileHeader} />
        </Stack.Navigator>
        
    )
}

const ProfileHeader=()=>{
    return(
    <View style={CSS.Screen}>
        <Text>Profile Screen</Text>
    </View>
    )
}