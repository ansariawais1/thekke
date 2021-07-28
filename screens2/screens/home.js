import {View,Text, Button} from 'react-native'
import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import CSS,{colors} from './style/style'
import { CardStyleInterpolators } from '@react-navigation/stack';
export const Home=()=>{
const Stack=createStackNavigator()
    return(
        
        <Stack.Navigator>
            <Stack.Screen name="HomeHeader" component={HomeHeader} options={{
                headerStyle:{
                    backgroundColor:colors.green
                }
            }} />
            <Stack.Screen  name="Masala and Spice" component={MasalaAndSpice}
            options={{
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
            }}
            />
        </Stack.Navigator>
        
    )
}

const MasalaAndSpice=({navigation})=>{
    return(
        <View>
           <Text> Masala and spiced page</Text>
        </View>
    )
}
const HomeHeader=({navigation})=>{
    return(
    <View style={CSS.Screen}>
        <View style={CSS.container}> 
            <Text>Hi Thekke India</Text>
            <View style={CSS.sliderContainer}>
                <Text>This space is for slider container</Text>
            </View>

            <View style={CSS.row} >
                <View style={CSS.col} ></View>
                <View style={CSS.col} ></View>
            </View>
            <View style={CSS.row} >
                <View style={CSS.col} ></View>
                <View style={CSS.col} ></View>
            </View>
            <View style={CSS.row} >
                <View style={CSS.col} ></View>
                <View style={CSS.col} ></View>
            </View>
        </View>
        <Button title="Go to masala and spices" onPress={()=>navigation.navigate('Masala and Spice')}></Button>
    </View>
    )
}