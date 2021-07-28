

import {View,Text} from 'react-native'
import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import CSS from './style/style'


export const Orders=()=>{
const Stack=createStackNavigator()
    return(
        
        <Stack.Navigator>
            <Stack.Screen name="OrderHeader" component={OrderHeader} />
        </Stack.Navigator>
        
    )
}

const OrderHeader=()=>{
    return(
    <View style={CSS.Screen}>
        <Text>Order Screen</Text>
    </View>
    )
}