import { StyleSheet,Dimensions } from "react-native";
import React  from "react";
// import {vw, vh, vmin, vmax} from 'react-native-viewport-units';
export default StyleSheet.create({
Screen:{
    flex:1,
    backgroundColor:"white"
    },
container:{
padding:10
},
row:{
    flex:1,
    marginTop:10,
    flexDirection:"row",
    justifyContent:"space-evenly"
},
col:{
    margin:"auto",
    flex:0.42,
    // paddingLeft:5,
    // paddingRight:5,
    elevation:10
},
colCard:{
    borderBottomWidth:3,
    marginTop:18,
    justifyContent:"center",
    alignItems:"center",
    borderRadius:10,
    height:140,
    width:"100%"
},
headerTitle:{
    justifyContent:"center",alignItems:"center"
},
headerImage:{
    height:30,width:150
},
headerIcon:{
    height:18,width:18,tintColor:"white",marginHorizontal:7
},
greetText:{
    lineHeight:20,color:'#098B4D',fontWeight:"600",marginLeft:7,marginBottom:15,fontSize:16
},
slider:{
    marginHorizontal:5,width:vw(88),height:200,borderRadius:15
},
boldText:{
    fontSize:16,fontWeight:"600"
},
searchBox:{
    height:40,borderColor:"#ffffff",borderWidth:1,marginHorizontal:13,borderRadius:5,color:"#ffffff",paddingHorizontal:15
},
topEmptyBar:{
    marginTop:45,height:30,borderBottomLeftRadius:50,borderBottomRightRadius:50,backgroundColor:"#098B4D",zIndex:-2,position:"absolute",left:0,right:0,top:0
},
masalaScrollScreen:{
    width:60,height:28,position:"absolute",right:0,top:55,zIndex:999
},
modalTitle:
{
    position:"absolute",width:"100%",top:-20,height:40,backgroundColor:"#098B4D",borderRadius:30,paddingHorizontal:20,justifyContent:"center"
},
})

export const colors={
    green:"#098B4D",
    greenGray:"rgba(9, 139, 77,0.1)"
}


export function vw(num){
    const newNum=100/num
    return Dimensions.get('window').width/newNum
}



export function vh(num){
    const newNum=100/num
    return Dimensions.get('window').height/newNum
}

