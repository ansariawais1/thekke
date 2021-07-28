/* eslint-disable no-spaced-func */
/* eslint-disable semi */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import { NavigationContainer } from '@react-navigation/native';
// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View,Image } from 'react-native';
import { Home } from './screens2/home';
import { Orders } from './screens2/orders';
import { Profile } from './screens2/profile';
import {createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Menu } from './screens2/menu';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import { SvgCssUri,SvgUri } from 'react-native-svg';
// import {GridLogo} from './screens2/images/grid.svg'
import CSS,{colors} from "./screens2/style/style"

const Tab=createBottomTabNavigator ()

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <MyTab />
      </View>
    </NavigationContainer>
    
  );
}

const MyTab=()=>{
  return(
  <Tab.Navigator  >
    <Tab.Screen name="home" component={Home} 
    options={{
      tabBarLabel: '',
      tabBarIcon: ({focused}) => (
        <IconComponent focused={focused} name="home" imageUrl={require('./screens2/images/home.png')} />

      ),
    }}
    />
    
    <Tab.Screen name="menu" component={Menu} 
    options={{
      tabBarLabel: '',
      tabBarIcon: ({focused}) => (
        <IconComponent focused={focused} name="Order" imageUrl={require('./screens2/images/grid.png')} />

      ),
    }}
    />

    <Tab.Screen name="order" component={Orders} 
    options={{
      tabBarLabel: '',
      tabBarIcon: ({focused}) => (
        <IconComponent focused={focused} name="Order" imageUrl={require('./screens2/images/shopping.png')} />

      ),
    }}
    />
    <Tab.Screen name="profile" component={Profile}
    options={{
      tabBarLabel: '',
      tabBarIcon: ({focused}) => (
        <IconComponent focused={focused} name="Profile" imageUrl={require('./screens2/images/user.png')} />

      ),
    }}
  /> 
    </Tab.Navigator>
  )
}


const IconComponent=({focused,imageUrl})=>{

  
  return(
    <View>
      <View style={{justifyContent:"center",alignItems:"center",top:0}}>
          <Image style={{width:18,height:18,tintColor:focused?colors.green:"black"}} source={imageUrl} />
          {focused?
          <View style={{position:"absolute",width:3,height:3,borderRadius:5,backgroundColor:colors.green,top:23,margin:"auto"}}>
          </View>:<></>
        }
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
